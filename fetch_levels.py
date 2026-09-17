#!/usr/bin/env python3
"""
42 Students Level Fetcher
Retrieves each student's Piscine level from the official 42 API (api.intra.42.fr)
and updates data.js and students_with_levels.json.
"""

import os
import sys
import re
import json
import time
import getpass
import argparse
import requests
from pathlib import Path

BASE_DIR = Path(__file__).parent.resolve()
DATA_JS = BASE_DIR / "data.js"
RESULT_JSON = BASE_DIR / "result.json"
OUTPUT_JSON = BASE_DIR / "students_with_levels.json"

AUTH_URL = "https://api.intra.42.fr/oauth/token"
API_BASE = "https://api.intra.42.fr/v2"

class Intra42Client:
    def __init__(self, uid: str, secret: str):
        self.uid = uid.strip()
        self.secret = secret.strip()
        self.token = None
        self.token_expiry = 0
        self.session = requests.Session()

    def get_token(self):
        now = time.time()
        if self.token and now < (self.token_expiry - 60):
            return self.token

        print("[*] Requesting OAuth2 token from api.intra.42.fr...")
        res = self.session.post(
            AUTH_URL,
            data={
                "grant_type": "client_credentials",
                "client_id": self.uid,
                "client_secret": self.secret,
            },
            timeout=15,
        )
        if res.status_code != 200:
            raise RuntimeError(f"Authentication failed ({res.status_code}): {res.text}")

        data = res.json()
        self.token = data["access_token"]
        self.token_expiry = now + data.get("expires_in", 7200)
        self.session.headers.update({"Authorization": f"Bearer {self.token}"})
        print("[+] Authentication successful!")
        return self.token

    def request(self, endpoint: str, params=None):
        self.get_token()
        url = f"{API_BASE}{endpoint}" if endpoint.startswith("/") else endpoint

        while True:
            res = self.session.get(url, params=params, timeout=20)
            if res.status_code == 429:
                retry_after = float(res.headers.get("Retry-After", 1.5))
                print(f"[!] Rate limit hit (429). Sleeping for {retry_after}s...")
                time.sleep(retry_after)
                continue
            if res.status_code == 401:
                # Token expired, renew and retry
                self.token = None
                self.get_token()
                continue
            return res


def load_students():
    """Load students from data.js or result.json."""
    if RESULT_JSON.exists():
        try:
            with open(RESULT_JSON, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass

    if DATA_JS.exists():
        with open(DATA_JS, "r", encoding="utf-8") as f:
            content = f.read()
        match = re.search(r"window\.STUDENTS_DATA\s*=\s*(\{.*?\});", content, re.DOTALL)
        if match:
            return json.loads(match.group(1))

    raise FileNotFoundError("Could not find data.js or result.json in the current directory.")


def extract_level_from_cursus_users(cursus_users):
    """
    Finds the student's level.
    Prefers C Piscine (cursus_id 9 or slug 'c-piscine').
    If not found, falls back to the highest recorded cursus level.
    """
    if not cursus_users:
        return 0.0

    piscine_level = None
    all_levels = []

    for cu in cursus_users:
        lvl = cu.get("level")
        if lvl is not None:
            try:
                lvl_val = float(lvl)
                all_levels.append(lvl_val)
                cursus_id = cu.get("cursus_id")
                cursus_slug = (cu.get("cursus") or {}).get("slug", "")
                if cursus_id == 9 or "piscine" in cursus_slug.lower():
                    piscine_level = lvl_val
            except (ValueError, TypeError):
                pass

    val = piscine_level if piscine_level is not None else (max(all_levels) if all_levels else 0.0)
    return int(val) if float(val).is_integer() else round(val, 2)


def fetch_levels_bulk(client: Intra42Client, students):
    """
    Fetches levels in bulk using /v2/cursus_users with filter[user_id].
    Chunked into groups of 100 user IDs to minimize request count.
    """
    levels_map = {}
    id_to_student = {s["id"]: s for s in students if "id" in s}
    all_ids = list(id_to_student.keys())

    chunk_size = 100
    print(f"[*] Fetching levels for {len(all_ids)} students in {chunk_size}-user chunks...")

    for i in range(0, len(all_ids), chunk_size):
        chunk = all_ids[i : i + chunk_size]
        ids_str = ",".join(str(uid) for uid in chunk)
        chunk_num = (i // chunk_size) + 1
        total_chunks = (len(all_ids) + chunk_size - 1) // chunk_size
        print(f"    Fetching chunk {chunk_num}/{total_chunks} (users {i+1} to {min(i+chunk_size, len(all_ids))})...")

        page = 1
        while True:
            params = {
                "filter[user_id]": ids_str,
                "page[size]": 100,
                "page[number]": page,
            }
            res = client.request("/cursus_users", params=params)
            if res.status_code != 200:
                print(f"[!] Warning: Bulk request failed with status {res.status_code}")
                break

            records = res.json()
            if not records:
                break

            for rec in records:
                user_info = rec.get("user") or {}
                uid = user_info.get("id")
                lvl = rec.get("level")
                cursus_id = rec.get("cursus_id")
                cursus_slug = (rec.get("cursus") or {}).get("slug", "")

                if uid is not None and lvl is not None:
                    try:
                        lvl_f = float(lvl)
                        is_piscine = (cursus_id == 9) or ("piscine" in cursus_slug.lower())

                        # Store or update level (prioritize piscine)
                        if uid not in levels_map or is_piscine:
                            levels_map[uid] = round(lvl_f, 2)
                    except (ValueError, TypeError):
                        pass

            if len(records) < 100:
                break
            page += 1
            time.sleep(0.5)

        time.sleep(0.5)

    return levels_map


def fetch_missing_individually(client: Intra42Client, missing_students, levels_map):
    """Fallback: queries /v2/users/{login} for any student not resolved in bulk."""
    print(f"[*] Fetching {len(missing_students)} missing students individually...")
    for idx, st in enumerate(missing_students, 1):
        login = st["login"]
        res = client.request(f"/users/{login}")
        if res.status_code == 200:
            data = res.json()
            cursus_users = data.get("cursus_users", [])
            lvl = extract_level_from_cursus_users(cursus_users)
            levels_map[st["id"]] = lvl
            print(f"    [{idx}/{len(missing_students)}] @{login}: level {lvl}")
        else:
            print(f"    [{idx}/{len(missing_students)}] @{login}: Not found ({res.status_code}) -> level 0.0")
            levels_map[st["id"]] = 0.0
        time.sleep(0.5)


def get_credentials(args):
    """Retrieve UID and Secret from args, env, or interactive prompt."""
    uid = args.uid or os.getenv("FT_UID") or os.getenv("INTRA_UID") or os.getenv("CLIENT_ID")
    secret = args.secret or os.getenv("FT_SECRET") or os.getenv("INTRA_SECRET") or os.getenv("CLIENT_SECRET")

    # Check for .env file if available
    env_file = BASE_DIR / ".env"
    if env_file.exists():
        with open(env_file, "r") as f:
            for line in f:
                line = line.strip()
                if "=" in line and not line.startswith("#"):
                    k, v = line.split("=", 1)
                    k = k.strip()
                    v = v.strip().strip("'\"")
                    if k in ("FT_UID", "INTRA_UID", "CLIENT_ID") and not uid:
                        uid = v
                    elif k in ("FT_SECRET", "INTRA_SECRET", "CLIENT_SECRET") and not secret:
                        secret = v

    if not uid:
        print("------------------------------------------------------------")
        print(" 42 API Credentials Required")
        print(" Create an application at: https://profile.intra.42.fr/oauth/applications")
        print("------------------------------------------------------------")
        uid = input("Enter your 42 API UID (Client ID): ").strip()

    if not secret:
        secret = getpass.getpass("Enter your 42 API SECRET (Client Secret): ").strip()

    if not uid or not secret:
        print("[!] Error: UID and Secret are required.")
        sys.exit(1)

    return uid, secret


def main():
    parser = argparse.ArgumentParser(description="Fetch student levels from 42 API and update data.js")
    parser.add_argument("--uid", help="42 API Application UID")
    parser.add_argument("--secret", help="42 API Application Secret")
    args = parser.parse_args()

    print("==========================================")
    print("      42 Students Level Fetcher           ")
    print("==========================================")

    uid, secret = get_credentials(args)
    client = Intra42Client(uid, secret)

    # 1. Load students
    raw_data = load_students()
    all_students = raw_data.get("s", []) + raw_data.get("f", [])
    print(f"[+] Loaded {len(all_students)} students ({len(raw_data.get('s', []))} passed, {len(raw_data.get('f', []))} not selected).")

    # 2. Bulk fetch levels
    levels_map = fetch_levels_bulk(client, all_students)
    print(f"[+] Retrieved levels for {len(levels_map)}/{len(all_students)} students via bulk API.")

    # 3. Check for any missing and fetch individually
    missing = [s for s in all_students if s.get("id") not in levels_map]
    if missing:
        fetch_missing_individually(client, missing, levels_map)

    # 4. Map levels to students
    for group_name in ("s", "f"):
        for st in raw_data.get(group_name, []):
            st_id = st.get("id")
            lvl = levels_map.get(st_id, 0.0)
            st["level"] = lvl

    # 5. Save updated data to students_with_levels.json
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(raw_data, f, indent=2, ensure_ascii=False)
    print(f"[+] Saved updated data with levels to: {OUTPUT_JSON}")

    # 6. Update data.js
    with open(DATA_JS, "w", encoding="utf-8") as f:
        f.write("window.STUDENTS_DATA = ")
        json.dump(raw_data, f, indent=2, ensure_ascii=False)
        f.write(";\n")
    print(f"[+] Updated: {DATA_JS}")

    print("\n==========================================")
    print("  SUCCESS! Levels mapped and website ready! ")
    print("==========================================")


if __name__ == "__main__":
    main()
