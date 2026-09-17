
import json

with open("students_with_levels.json") as f:
    data = json.load(f)

levels = {}

for user in data["s"] + data["f"]:
    levels[user["login"]] = user["level"]

levels = dict(sorted(levels.items(), key=lambda x: x[1], reverse=True))

for login, level in levels.items():
    print(login, level)