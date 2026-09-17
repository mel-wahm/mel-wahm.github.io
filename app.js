/**
 * 42 Students Directory — Meme Edition 💀👑
 */

(function () {
  'use strict';

  // ==================== MEME TAGLINES ====================
  const WINNER_TAGLINES = [
    "Built Different 💪",
    "Main Character Energy ✨",
    "Sigma Grindset 🐺",
    "Chad Energy 🗿",
    "No Cap, All Skill 🔥",
    "Gigachad Certified 💎",
    "Born to Code 👨‍💻",
    "Diff = Massive 📈",
    "Certified Goat 🐐",
    "On God Fr Fr 🙏",
    "W Collector 🏆",
    "RNG? Nah, Pure Skill 🎯",
    "Ratio'd the Piscine 📊",
    "Elo: Maxed Out 📈",
    "Speedrun Complete 🏁",
    "Zero Deaths 🛡️",
    "Top Diff 🥇",
    "Too Cracked 🧊",
    "Based & Piscined 💯",
    "GG EZ 🎮",
    "Simply Superior 👆",
    "S-Tier Human 🏅",
    "Woke Up & Chose Greatness 🌅",
    "42? More like 100 💯",
    "Keyboard Warrior 🎹",
    "Unfairly Talented 🎭",
    "Plot Armor: Activated 🛡️",
    "Diff Gap Too Big 🕳️",
    "That's My GOAT 🐐",
    "Anime Protagonist 🌸",
  ];

  const LOSER_TAGLINES = [
    "Skill Issue 💀",
    "Down Bad 📉",
    "L + Ratio 📊",
    "Pack Ur Bags 🧳",
    "Game Over 🎮",
    "Caught in 4K 📸",
    "Massive L 🫠",
    "Clown of the Day 🤡",
    "Insert Coin to Retry 🪙",
    "Error 404: Skills Not Found 🔍",
    "Alt+F4 IRL 💻",
    "Connection Lost 📡",
    "Task Failed Successfully ❌",
    "Respawn in 6 Months 🕐",
    "Try Again Next Piscine 🔄",
    "Ctrl+Z Your Life Choices ⌨️",
    "gg wp (not really) 🫡",
    "Emotional Damage 💔",
    "NPC Energy 🤖",
    "Down Horrendous 😭",
    "Bro Thought He Could 💭",
    "Main Character? More Like Extra 🎬",
    "Copium Overdose 🫁",
    "Rent Free in the L Column 🏠",
    "L Magnet 🧲",
    "Diff: Astronomical 🌌",
    "Siri, Play Despacito 📱",
    "It Is What It Is 🤷",
    "AFK During Exams 🚶",
    "Debug This Ratio 🐛",
    "Uninstall Life.exe 🗑️",
    "404 Brain Not Found 🧠",
    "Your Code Compiles in Heaven 🪦",
    "Segfault in Real Life 💥",
    "git push --force to unemployment 📤",
    "sudo rm -rf career/ 🫠",
    "malloc(success) returned NULL 🔴",
    "Bro Peaked at Hello World 👶",
    "Even Stack Overflow Can't Save U 🆘",
    "DNS: Dreams Not Selected 🌐",
    "chmod 000 your_future 🔒",
    "while(true) { take_L(); } 🔁",
    "Exception: TalentNotFoundException 🚫",
    "return EXIT_FAILURE; 🚪",
    "Norminette Said No to Your Life 📏",
    "Bro Studied on YouTube Shorts 📵",
    "The Piscine Piscined You 🏊",
    "Certified Bench Warmer 🪑",
    "Built Like a Syntax Error 🏗️",
    "Free() Called on Your Dreams 🗑️",
    "Bro Got Outperformed by printf 🖨️",
    "Your Keyboard Deserves Better ⌨️",
    "Allocated Memory, Forgot to Learn 🧠",
    "Walked in Sigma, Walked Out NPC 🚶",
    "Bro Compiled but Never Ran 🏃",
    "Not Even ChatGPT Could Save This 🤖",
    "Submitted vibes.c Instead of Code 🎵",
    "Core Dumped & So Did Your Chances 💣",
    "Makefile: No Rule to Make 'Success' 📜",
    "Exam: You | You: 😴 💤",
    "Sleep(forever) Activated 😴",
    "Your Pointers Point Nowhere 🧭",
    "Valgrind Found 42 Leaks (All Yours) 🚰",
    "Bro Forked but Never Executed 🍴",
    "SIGKILL Received From 42 ☠️",
    "Pack Watch 💨",
    "Bro Really Thought This Was the One 😬",
    "This You? Because It's Giving Failure 📸",
    "Someone Check on Him 🏥",
    "Current Status: Second-Hand Embarrassment 😳",
    "Who Lied to You? 🤥",
    "It's the Delusion for Me 🫣",
    "A for Effort, F for Execution 📝",
    "You Tried. And That's the Cutest Part 🥹",
    "Participation Trophy Incoming 🏆",
    "Nice Try. Really. (But No.) 🙂",
    "Shof had lexpooler ☝️😂",
    "👩: Wash maghadich t9aleb lik 3la khedma",
    "Mdy3 khooto f post 💃",
    "Gha khsser lflous d lekra 💸",
    "Gha dwz sif omcha 🥥🌴🌅",
    "Wld fin nta? 🥷🏻",
    "Ana li 7mar onj7t 🤷",
    "O Gals katsab9 3la blasa f bus 🤷‍♀️",
    "Better Luck Next Life 🔮",
    "Zero Stars. Would Not Recommend ⭐",
    "Expectation vs Reality: A Tragedy 🎭",
    "Embracing the Flop Era 📉",
    "Human Version of a Buffering Screen 🔄",
    "You're the Reason Shampoo Has Instructions 🧴",
    "If Being Wrong Was a Sport, Gold Medal 🥇",
    "Delete This. For Your Own Safety 🗑️",
    "Not Today, Not Tomorrow, Maybe Never 🚫",
    "Bro Lost Aura Points in Real Time 📉",
    "Absolutely Cooked 🍳",
    "It's Giving... Everything But Success 💅",
    "Delulu Is NOT the Solulu Here 🌈",
    "POV: You're the Before Photo 📷",
    "Bro Is the Tutorial Level Boss 🎮",
    "You're Not a Vibe. You're a Warning ⚠️",
    "Caught Lacking in 8K Ultra HD 📹",
    "Certified Opp of Success 🚷",
    "The Audacity vs The Ability 😤",
    "Google: How to Cope 🔍",
    "Bro Brought a Spoon to a Sword Fight 🥄",
    "The WiFi Is Stronger Than Your Hustle 📶",
    "Even Your Mom Hit Skip on This One ⏭️",
    "Went From We'll See to We Saw 💀",
    "Plot Twist: There Was No Plot 🎬",
    "Bro's Highlight Reel Is Just Bloopers 🎞️",
    "Ratio + Cope + Seethe + Touch Grass 🌿",
    "You Dropped This → L 🫴",
    "Bro Speedran Failure Any% 🏃",
    "Certified Flop of the Season 📺",
  ];

  const WINNER_OVERLAY_TEXTS = [
    "View This King 👑",
    "Behold Greatness",
    "Open GOAT Profile",
    "View Chad Profile",
    "Witness the Sigma",
  ];

  const LOSER_OVERLAY_TEXTS = [
    "View This Clown 🤡",
    "See the Wreckage",
    "Inspect the Damage",
    "Open L Collector",
    "View the NPC",
  ];

  // Random helper
  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // ==================== STATE ====================
  const state = {
    students: [],
    filteredStudents: [],
    searchQuery: '',
    statusFilter: 'all',
    sortBy: 'default',
    viewMode: 'grid',
    // Pre-assign taglines so they stay consistent per-student
    taglines: new Map(),
    overlayTexts: new Map(),
  };

  // ==================== DOM ELEMENTS ====================
  const elements = {
    winnersGrid: document.getElementById('winnersGrid'),
    losersGrid: document.getElementById('losersGrid'),
    winnersSection: document.getElementById('winnersSection'),
    losersSection: document.getElementById('losersSection'),
    winnersCount: document.getElementById('winnersCount'),
    losersCount: document.getElementById('losersCount'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    sortSelect: document.getElementById('sortSelect'),
    viewGridBtn: document.getElementById('viewGridBtn'),
    viewListBtn: document.getElementById('viewListBtn'),
    randomBtn: document.getElementById('randomBtn'),
    backToTopBtn: document.getElementById('backToTopBtn'),
    toast: document.getElementById('toast'),
    toastText: document.getElementById('toastText'),
    resultsInfo: document.getElementById('resultsInfo'),
    totalCountEl: document.getElementById('totalCount'),
    selectedCountEl: document.getElementById('selectedCount'),
    otherCountEl: document.getElementById('otherCount'),
    ratioEl: document.getElementById('ratioCount'),
    filterCountAll: document.getElementById('filterCountAll'),
    filterCountSelected: document.getElementById('filterCountSelected'),
    filterCountOther: document.getElementById('filterCountOther'),
    spotlightModal: document.getElementById('spotlightModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalContent: document.getElementById('modalContent'),
  };

  // ==================== INIT ====================
  async function init() {
    loadData();
    setupEventListeners();
  }

  async function loadData() {
    let rawData = null;
    try {
      const response = await fetch('result.json');
      if (response.ok) rawData = await response.json();
    } catch (e) { /* fallback below */ }

    if (!rawData && window.STUDENTS_DATA) rawData = window.STUDENTS_DATA;

    if (!rawData) {
      if (elements.winnersGrid) elements.winnersGrid.innerHTML = '<div class="empty-state"><h3>No data found</h3></div>';
      return;
    }

    processStudents(rawData);
  }

  function processStudents(data) {
    const list = [];
    const sList = data.s || [];
    const fList = data.f || [];

    sList.forEach((st, i) => {
      const student = normalize(st, 's', i);
      list.push(student);
      state.taglines.set(student.login, pickRandom(WINNER_TAGLINES));
      state.overlayTexts.set(student.login, pickRandom(WINNER_OVERLAY_TEXTS));
    });

    fList.forEach((st, i) => {
      const student = normalize(st, 'f', sList.length + i);
      list.push(student);
      state.taglines.set(student.login, pickRandom(LOSER_TAGLINES));
      state.overlayTexts.set(student.login, pickRandom(LOSER_OVERLAY_TEXTS));
    });

    state.students = list;

    const total = list.length;
    const selected = sList.length;
    const other = fList.length;
    const pct = total > 0 ? ((selected / total) * 100).toFixed(1) : 0;

    setText(elements.totalCountEl, total);
    setText(elements.selectedCountEl, selected);
    setText(elements.otherCountEl, other);
    setText(elements.ratioEl, `${pct}%`);
    setText(elements.filterCountAll, total);
    setText(elements.filterCountSelected, selected);
    setText(elements.filterCountOther, other);

    applyFiltersAndRender();
  }

  function normalize(st, status, index) {
    return {
      id: st.id,
      login: st.login,
      first_name: st.first_name || '',
      last_name: st.last_name || '',
      fullName: `${st.first_name || ''} ${st.last_name || ''}`.trim(),
      profile_picture: st.profile_picture,
      status,
      statusLabel: status === 's' ? 'Selected' : 'Rejected',
      originalIndex: index,
    };
  }

  function setText(el, value) {
    if (el) el.textContent = value;
  }

  // ==================== EVENT LISTENERS ====================
  function setupEventListeners() {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      elements.clearSearchBtn.classList.toggle('active', state.searchQuery.length > 0);
      applyFiltersAndRender();
    });

    elements.clearSearchBtn.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.clearSearchBtn.classList.remove('active');
      elements.searchInput.focus();
      applyFiltersAndRender();
    });

    elements.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.statusFilter = btn.getAttribute('data-filter');
        applyFiltersAndRender();
      });
    });

    elements.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      applyFiltersAndRender();
    });

    elements.viewGridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      elements.viewGridBtn.classList.add('active');
      elements.viewListBtn.classList.remove('active');
      elements.winnersGrid.classList.remove('list-view');
      elements.losersGrid.classList.remove('list-view');
      renderStudents();
    });

    elements.viewListBtn.addEventListener('click', () => {
      state.viewMode = 'list';
      elements.viewListBtn.classList.add('active');
      elements.viewGridBtn.classList.remove('active');
      elements.winnersGrid.classList.add('list-view');
      elements.losersGrid.classList.add('list-view');
      renderStudents();
    });

    if (elements.randomBtn) elements.randomBtn.addEventListener('click', pickRandomStudent);
    if (elements.modalCloseBtn) elements.modalCloseBtn.addEventListener('click', closeModal);
    if (elements.spotlightModal) {
      elements.spotlightModal.addEventListener('click', (e) => {
        if (e.target === elements.spotlightModal) closeModal();
      });
    }

    window.addEventListener('scroll', () => {
      elements.backToTopBtn.classList.toggle('show', window.scrollY > 400);
    });

    elements.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('keydown', (e) => {
      if ((e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) && document.activeElement !== elements.searchInput) {
        e.preventDefault();
        elements.searchInput.focus();
        elements.searchInput.select();
      }
      if (e.key === 'Escape') {
        if (elements.spotlightModal.classList.contains('active')) closeModal();
        else if (state.searchQuery) {
          elements.searchInput.value = '';
          state.searchQuery = '';
          elements.clearSearchBtn.classList.remove('active');
          applyFiltersAndRender();
        }
      }
      if ((e.key === 'r' || e.key === 'R') && document.activeElement !== elements.searchInput) {
        pickRandomStudent();
      }
    });
  }

  // ==================== FILTER / SORT ====================
  function applyFiltersAndRender() {
    let list = [...state.students];

    if (state.statusFilter !== 'all') {
      list = list.filter(st => st.status === state.statusFilter);
    }

    if (state.searchQuery) {
      const q = state.searchQuery;
      list = list.filter(st =>
        st.login.toLowerCase().includes(q) ||
        st.fullName.toLowerCase().includes(q) ||
        st.first_name.toLowerCase().includes(q) ||
        st.last_name.toLowerCase().includes(q) ||
        String(st.id).includes(q)
      );
    }

    switch (state.sortBy) {
      case 'login-asc': list.sort((a, b) => a.login.localeCompare(b.login)); break;
      case 'login-desc': list.sort((a, b) => b.login.localeCompare(a.login)); break;
      case 'name-asc': list.sort((a, b) => a.fullName.localeCompare(b.fullName)); break;
      case 'name-desc': list.sort((a, b) => b.fullName.localeCompare(a.fullName)); break;
      default: list.sort((a, b) => a.originalIndex - b.originalIndex); break;
    }

    state.filteredStudents = list;
    updateResultsInfo();
    renderStudents();
  }

  function updateResultsInfo() {
    const count = state.filteredStudents.length;
    const total = state.students.length;
    if (state.searchQuery) {
      elements.resultsInfo.innerHTML = `Found <span class="highlight-match">${count}</span> match${count === 1 ? '' : 'es'} for "${escapeHtml(state.searchQuery)}"`;
    } else {
      elements.resultsInfo.innerHTML = `Showing <span class="highlight-match">${count}</span> of ${total} students`;
    }
  }

  // ==================== RENDER ====================
  function renderStudents() {
    const winners = state.filteredStudents.filter(s => s.status === 's');
    const losers = state.filteredStudents.filter(s => s.status === 'f');

    const showWinners = state.statusFilter === 'all' || state.statusFilter === 's';
    const showLosers = state.statusFilter === 'all' || state.statusFilter === 'f';

    // Winners section
    elements.winnersSection.style.display = (showWinners && winners.length > 0) ? 'block' : 'none';
    if (showWinners && winners.length > 0) {
      elements.winnersCount.textContent = winners.length;
      elements.winnersGrid.innerHTML = winners.map(s => createCardHTML(s)).join('');
    }

    // Losers section
    elements.losersSection.style.display = (showLosers && losers.length > 0) ? 'block' : 'none';
    if (showLosers && losers.length > 0) {
      elements.losersCount.textContent = losers.length;
      elements.losersGrid.innerHTML = losers.map(s => createCardHTML(s)).join('');
    }

    // Empty state
    if (winners.length === 0 && losers.length === 0) {
      elements.winnersSection.style.display = 'block';
      elements.winnersGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-emoji">🔍</div>
          <h3>No students found</h3>
          <p>Try a different search or filter.</p>
          <button id="resetFiltersBtn">Reset All</button>
        </div>`;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) resetBtn.addEventListener('click', resetAll);
    }

    // Attach login-copy handlers
    document.querySelectorAll('.login-tag').forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(tag.getAttribute('data-login'));
      });
    });

    // Avatar fallback
    document.querySelectorAll('.avatar-img').forEach(img => {
      img.addEventListener('error', function () {
        const initials = this.getAttribute('data-initials') || '?';
        const parent = this.parentElement;
        if (parent) parent.innerHTML = `<div class="avatar-fallback">${initials}</div>`;
      });
    });
  }

  function resetAll() {
    elements.searchInput.value = '';
    state.searchQuery = '';
    state.statusFilter = 'all';
    elements.clearSearchBtn.classList.remove('active');
    elements.filterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'all'));
    applyFiltersAndRender();
  }

  // ==================== CARD HTML ====================
  function createCardHTML(student) {
    const profileUrl = `https://profile-v3.intra.42.fr/users/${student.login}`;
    const initials = (student.first_name[0] || '') + (student.last_name[0] || '');
    const isWinner = student.status === 's';
    const tagline = state.taglines.get(student.login) || '';
    const overlayText = state.overlayTexts.get(student.login) || 'View Profile';
    const badgeClass = isWinner ? 'badge-winner' : 'badge-loser';
    const badgeEmoji = isWinner ? '👑 ' : '🤡 ';
    const btnLabel = isWinner ? 'View GOAT Profile' : 'View L Profile';
    const sparkles = isWinner ? createSparklesHTML() : '';

    if (state.viewMode === 'list') {
      return `
        <div class="student-card status-${student.status}" id="student-${student.login}">
          <div class="avatar-wrapper">
            <a href="${profileUrl}" target="_blank" rel="noopener noreferrer" class="avatar-link" title="${overlayText}">
              <img src="${student.profile_picture}" alt="${esc(student.fullName)}" class="avatar-img" loading="lazy" data-initials="${initials}"/>
              <div class="avatar-overlay"><span>${isWinner ? '👑' : '💀'}</span></div>
            </a>
          </div>
          <div class="list-info-primary">
            <h3 class="student-name" title="${esc(student.fullName)}">${esc(student.fullName)}</h3>
            <span class="id-tag">#${student.id}</span>
          </div>
          <div class="login-tag" data-login="${student.login}" title="Copy login">
            <span>@${student.login}</span>
            ${copyIcon}
          </div>
          <div class="card-meta">
            <span class="badge ${badgeClass}">${badgeEmoji}${student.statusLabel}</span>
          </div>
          <span class="meme-tagline">${tagline}</span>
          <a href="${profileUrl}" target="_blank" rel="noopener noreferrer" class="btn-intra">
            <span>${btnLabel}</span>
            ${arrowIcon}
          </a>
        </div>`;
    }

    return `
      <div class="student-card status-${student.status}" id="student-${student.login}">
        ${sparkles}
        <div class="avatar-wrapper">
          <a href="${profileUrl}" target="_blank" rel="noopener noreferrer" class="avatar-link" title="${overlayText}">
            <img src="${student.profile_picture}" alt="${esc(student.fullName)}" class="avatar-img" loading="lazy" data-initials="${initials}"/>
            <div class="avatar-overlay">
              <span>${overlayText}</span>
              ${externalIcon}
            </div>
          </a>
        </div>
        <h3 class="student-name" title="${esc(student.fullName)}">${esc(student.fullName)}</h3>
        <div class="login-tag" data-login="${student.login}" title="Click to copy login">
          <span>@${student.login}</span>
          ${copyIcon}
        </div>
        <div class="card-meta">
          <span class="badge ${badgeClass}">${badgeEmoji}${student.statusLabel}</span>
          <span class="id-tag">#${student.id}</span>
        </div>
        <div class="meme-tagline">${tagline}</div>
        <a href="${profileUrl}" target="_blank" rel="noopener noreferrer" class="btn-intra">
          <span>${btnLabel}</span>
          ${arrowIcon}
        </a>
      </div>`;
  }

  // Mini SVG icon strings
  const copyIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  const arrowIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';
  const externalIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

  function createSparklesHTML() {
    let html = '<div class="sparkle-container">';
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 3;
      const size = 3 + Math.random() * 4;
      html += `<div class="sparkle" style="left:${x}%;top:${y}%;animation-delay:${delay}s;width:${size}px;height:${size}px;"></div>`;
    }
    html += '</div>';
    return html;
  }

  // ==================== RANDOM STUDENT SPOTLIGHT ====================
  function pickRandomStudent() {
    if (state.filteredStudents.length === 0) return;
    const student = state.filteredStudents[Math.floor(Math.random() * state.filteredStudents.length)];
    const profileUrl = `https://profile-v3.intra.42.fr/users/${student.login}`;
    const isWinner = student.status === 's';
    const tagline = state.taglines.get(student.login) || '';
    const badgeClass = isWinner ? 'badge-winner' : 'badge-loser';
    const emoji = isWinner ? '👑 ' : '🤡 ';

    // Style the modal card border based on status
    const modalCard = elements.spotlightModal.querySelector('.modal-card');
    if (modalCard) {
      if (isWinner) {
        modalCard.style.borderColor = 'rgba(255, 215, 0, 0.5)';
        modalCard.style.boxShadow = '0 20px 40px rgba(0,0,0,0.7), 0 0 60px rgba(255,215,0,0.3)';
      } else {
        modalCard.style.borderColor = 'rgba(239, 68, 68, 0.4)';
        modalCard.style.boxShadow = '0 20px 40px rgba(0,0,0,0.7), 0 0 60px rgba(239,68,68,0.2)';
      }
    }

    const verdictBanner = isWinner
      ? `<div style="
            font-size: 3.5rem;
            line-height: 1;
            margin-bottom: 0.3rem;
            filter: drop-shadow(0 0 15px rgba(255,215,0,0.6));
          ">👑</div>
         <div style="
            font-size: 1.4rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            background: linear-gradient(135deg, #ffd700, #ffaa00);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.2rem;
          ">WINNER</div>
         <div style="
            font-size: 0.78rem;
            color: #ffe566;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 1.2rem;
            opacity: 0.8;
          ">✨ This one made it ✨</div>`
      : `<div style="
            font-size: 3.5rem;
            line-height: 1;
            margin-bottom: 0.3rem;
          ">💀</div>
         <div style="
            font-size: 1.4rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: #ef4444;
            margin-bottom: 0.2rem;
          ">LOSER</div>
         <div style="
            font-size: 0.78rem;
            color: #64748b;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 1.2rem;
            font-style: italic;
          ">🤡 Didn't make the cut 🤡</div>`;

    const btnStyle = isWinner
      ? 'background: linear-gradient(135deg, #ffd700, #ffaa00); color: #1a1a0a;'
      : 'background: #374151; color: #94a3b8;';

    elements.modalContent.innerHTML = `
      ${verdictBanner}
      <div class="avatar-wrapper" style="margin-bottom: 1.25rem; display: flex; justify-content: center;">
        <a href="${profileUrl}" target="_blank" rel="noopener noreferrer" class="avatar-link" style="width: 128px; height: 128px; ${isWinner ? 'background: linear-gradient(135deg, #ffd700, #ff8c00, #ffd700); box-shadow: 0 0 30px rgba(255,215,0,0.4);' : 'background: linear-gradient(135deg, #374151, #1f2937);'}">
          <img src="${student.profile_picture}" alt="${esc(student.fullName)}" class="avatar-img" style="${isWinner ? '' : 'filter: grayscale(60%) brightness(0.85);'}"/>
          <div class="avatar-overlay" style="${isWinner ? 'background: rgba(255,215,0,0.88); color: #1a1a0a;' : 'background: rgba(50,50,60,0.9); color: #94a3b8;'}">
            <span>${isWinner ? 'View This King 👑' : 'View This Clown 🤡'}</span>
          </div>
        </a>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.3rem; color: ${isWinner ? '#fff' : '#64748b'};">${esc(student.fullName)}</h2>
      <div class="login-tag" id="modalLoginTag" data-login="${student.login}" style="font-size: 0.95rem; margin-bottom: 0.75rem; ${isWinner ? 'color: #ffe566;' : 'color: #64748b;'}">
        <span>@${student.login}</span>
        ${copyIcon}
      </div>
      <div class="card-meta" style="margin-bottom: 0.75rem;">
        <span class="badge ${badgeClass}" style="font-size: 0.88rem; padding: 0.3rem 0.85rem;">${emoji}${student.statusLabel}</span>
        <span class="id-tag" style="font-size: 0.85rem;">#${student.id}</span>
      </div>
      <div class="meme-tagline" style="font-size: 0.9rem; margin-bottom: 1.25rem; padding: 0.35rem 0.85rem; ${isWinner ? 'background: rgba(255,215,0,0.12); color: #ffe566; border: 1px solid rgba(255,215,0,0.25);' : 'background: rgba(239,68,68,0.08); color: #f87171; border: 1px solid rgba(239,68,68,0.2); font-style: italic;'}">${tagline}</div>
      <a href="${profileUrl}" target="_blank" rel="noopener noreferrer" class="btn-intra" style="${btnStyle} font-weight: 700; padding: 0.7rem 1.3rem; border: none; font-size: 0.9rem;">
        <span>${isWinner ? 'Open GOAT Profile 🐐' : 'Open L Profile 💀'}</span>
        ${arrowIcon}
      </a>
      <button id="modalShuffleBtn" style="
        width: 100%;
        margin-top: 0.75rem;
        padding: 0.65rem 1.3rem;
        border-radius: 12px;
        font-size: 0.9rem;
        font-weight: 700;
        font-family: inherit;
        cursor: pointer;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.06);
        color: #e2e8f0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: all 0.2s ease;
      ">🎲 Shuffle — Next Student</button>`;

    const modalTag = document.getElementById('modalLoginTag');
    if (modalTag) modalTag.addEventListener('click', () => copyToClipboard(student.login));

    const shuffleBtn = document.getElementById('modalShuffleBtn');
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => pickRandomStudent());
      shuffleBtn.addEventListener('mouseenter', () => {
        shuffleBtn.style.background = 'rgba(255,255,255,0.12)';
        shuffleBtn.style.borderColor = 'rgba(255,215,0,0.4)';
        shuffleBtn.style.color = '#ffd700';
      });
      shuffleBtn.addEventListener('mouseleave', () => {
        shuffleBtn.style.background = 'rgba(255,255,255,0.06)';
        shuffleBtn.style.borderColor = 'rgba(255,255,255,0.12)';
        shuffleBtn.style.color = '#e2e8f0';
      });
    }

    elements.spotlightModal.classList.add('active');

    // Highlight in grid
    document.querySelectorAll('.student-card.highlighted').forEach(c => c.classList.remove('highlighted'));
    const card = document.getElementById(`student-${student.login}`);
    if (card) card.classList.add('highlighted');
  }

  function closeModal() {
    if (elements.spotlightModal) elements.spotlightModal.classList.remove('active');
  }

  // ==================== CLIPBOARD ====================
  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => showToast(`Copied @${text} ✅`)).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-999999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); showToast(`Copied @${text} ✅`); }
    catch { showToast(`Login: @${text}`); }
    document.body.removeChild(ta);
  }

  let toastTimeout = null;
  function showToast(msg) {
    if (toastTimeout) clearTimeout(toastTimeout);
    elements.toastText.textContent = msg;
    elements.toast.classList.add('show');
    toastTimeout = setTimeout(() => elements.toast.classList.remove('show'), 2400);
  }

  // ==================== UTILS ====================
  const esc = escapeHtml;
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  }

  // ==================== START ====================
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
