import './style.css';
import { domains, formulas, flashcards, quizBank, EXAM_META } from './data.js';

// ─── Register Service Worker ───────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// ─── State ─────────────────────────────────────────────────────────────────
const S = {
  page: 'home',
  domain: null,
  task: null,
  fc: { idx: 0, flipped: false, filter: 'All' },
  quiz: { active: false, idx: 0, score: 0, answered: null, answers: [], filter: 'All' },
  mm: {},
  progress: JSON.parse(localStorage.getItem('pmp_prog') || '{}'),
  mobileNav: false,
};

function save() { localStorage.setItem('pmp_prog', JSON.stringify(S.progress)); }

// ─── Router ────────────────────────────────────────────────────────────────
function go(page, opts = {}) {
  S.page = page;
  if (opts.domain !== undefined) S.domain = opts.domain;
  if (opts.task !== undefined) S.task = opts.task;
  S.mobileNav = false;
  render();
}

// ─── Main render ───────────────────────────────────────────────────────────
function render() {
  document.getElementById('app').innerHTML = layout();
  bind();
}

function layout() {
  const nav = [
    { id: 'home', icon: '⬡', label: 'Dashboard' },
    { id: 'domains', icon: '◈', label: 'Domains' },
    { id: 'mindmap', icon: '◎', label: 'Mind Map' },
    { id: 'flashcards', icon: '▣', label: 'Flashcards' },
    { id: 'formulas', icon: 'Σ', label: 'Formulas' },
    { id: 'quiz', icon: '◉', label: 'Quiz' },
  ];
  const progress = getProgress();

  return `
  <div class="app ${S.mobileNav ? 'nav-open' : ''}">
    <!-- Mobile Header -->
    <header class="mobile-header">
      <button class="hamburger" data-hamburger>
        <span></span><span></span><span></span>
      </button>
      <span class="mobile-brand">PMP Prep</span>
      <div class="mobile-progress-ring">
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#1e2d4a" stroke-width="3"/>
          <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" stroke-width="3"
            stroke-dasharray="${2*Math.PI*14}" stroke-dashoffset="${2*Math.PI*14*(1-progress/100)}"
            transform="rotate(-90 18 18)" stroke-linecap="round"/>
          <text x="18" y="22" text-anchor="middle" fill="#e2e8f0" font-size="9" font-weight="700">${progress}%</text>
        </svg>
      </div>
    </header>

    <!-- Nav Overlay -->
    <div class="nav-overlay" data-close-nav></div>

    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-top">
        <div class="sidebar-brand">
          <div class="brand-hex">⬡</div>
          <div>
            <div class="brand-name">PMP PREP</div>
            <div class="brand-sub">Exam Master v2</div>
          </div>
        </div>
        <nav class="sidebar-nav">
          ${nav.map(n => `
            <button class="nav-btn ${S.page === n.id ? 'active' : ''}" data-page="${n.id}">
              <span class="nav-icon">${n.icon}</span>
              <span>${n.label}</span>
            </button>
          `).join('')}
        </nav>
      </div>
      <div class="sidebar-bottom">
        <div class="prog-label">Study Progress</div>
        <div class="prog-track"><div class="prog-fill" style="width:${progress}%"></div></div>
        <div class="prog-detail">${Object.values(S.progress).filter(v=>v).length} / ${domains.reduce((a,d)=>a+d.tasks.length,0)} tasks reviewed</div>
        <div class="exam-pills">
          ${EXAM_META.domains.map(d=>`<span class="epill" style="--c:${d.color}">${d.name} ${d.pct}%</span>`).join('')}
        </div>
      </div>
    </aside>

    <!-- Main -->
    <main class="main">${pageContent()}</main>
  </div>`;
}

function getProgress() {
  const total = domains.reduce((a, d) => a + d.tasks.length, 0);
  const done = Object.values(S.progress).filter(Boolean).length;
  return total ? Math.round((done / total) * 100) : 0;
}

function pageContent() {
  switch (S.page) {
    case 'home': return homePage();
    case 'domains': return S.task ? taskPage() : S.domain ? domainPage() : domainsPage();
    case 'mindmap': return mindmapPage();
    case 'flashcards': return flashcardsPage();
    case 'formulas': return formulasPage();
    case 'quiz': return S.quiz.active ? quizPlayPage() : quizStartPage();
    default: return homePage();
  }
}

// ─── HOME ──────────────────────────────────────────────────────────────────
function homePage() {
  const total = domains.reduce((a,d)=>a+d.tasks.length,0);
  return `
  <div class="page home-page">
    <div class="home-hero">
      <div class="hero-badge">PMI Certified Prep</div>
      <h1 class="hero-title">Pass Your PMP <span class="hero-accent">Exam</span></h1>
      <p class="hero-sub">Complete preparation for all 3 domains, ${total} tasks, formulas, flashcards & realistic practice questions</p>
      <div class="hero-meta">
        <span>180 Questions</span><span class="dot">·</span>
        <span>230 Minutes</span><span class="dot">·</span>
        <span>~50% Agile</span>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat-chip" data-page="domains">
        <div class="sc-val">${total}</div>
        <div class="sc-lbl">Tasks covered</div>
      </div>
      <div class="stat-chip" data-page="flashcards">
        <div class="sc-val">${flashcards.length}</div>
        <div class="sc-lbl">Flashcards</div>
      </div>
      <div class="stat-chip" data-page="formulas">
        <div class="sc-val">${formulas.reduce((a,s)=>a+s.items.length,0)}</div>
        <div class="sc-lbl">Formulas</div>
      </div>
      <div class="stat-chip" data-page="quiz">
        <div class="sc-val">${quizBank.length}</div>
        <div class="sc-lbl">Practice Qs</div>
      </div>
    </div>

    <div class="domain-cards-row">
      ${domains.map(d => `
        <div class="domain-card-home" data-go-domain="${d.id}" style="--dc:${d.color}">
          <div class="dch-top">
            <span class="dch-icon">${d.icon}</span>
            <span class="dch-weight">${d.weight}</span>
          </div>
          <div class="dch-name">${d.name}</div>
          <div class="dch-tag">${d.tagline}</div>
          <div class="dch-meta">${d.tasks.length} tasks · ${d.tasks.filter(t=>S.progress[t.id]).length} reviewed</div>
        </div>
      `).join('')}
    </div>

    <div class="home-section">
      <div class="hs-title">Quick Study Tools</div>
      <div class="quick-tools">
        <button class="qt" data-page="flashcards">
          <div class="qt-icon">▣</div>
          <div class="qt-text">
            <div class="qt-name">Flashcards</div>
            <div class="qt-sub">${flashcards.length} cards across all domains</div>
          </div>
        </button>
        <button class="qt" data-page="formulas">
          <div class="qt-icon">Σ</div>
          <div class="qt-text">
            <div class="qt-name">Formulas</div>
            <div class="qt-sub">EVM, PERT, CPM, ROI with examples</div>
          </div>
        </button>
        <button class="qt" data-page="quiz">
          <div class="qt-icon">◉</div>
          <div class="qt-text">
            <div class="qt-name">Practice Quiz</div>
            <div class="qt-sub">${quizBank.length} realistic PMP questions</div>
          </div>
        </button>
        <button class="qt" data-page="mindmap">
          <div class="qt-icon">◎</div>
          <div class="qt-text">
            <div class="qt-name">Mind Maps</div>
            <div class="qt-sub">Visual overview of all domains</div>
          </div>
        </button>
      </div>
    </div>

    <div class="home-section">
      <div class="hs-title">⚡ Critical Exam Tips</div>
      <div class="tips-list">
        ${[
          ['Agile mindset', '~50% of questions. Think iterative, collaborative, servant leadership.'],
          ['Best answer rule', 'Choose the most proactive, collaborative, stakeholder-aware option.'],
          ['EVM mastery', 'Know all 13 EVM formulas cold. Expect 3-6 calculation questions.'],
          ['Change control', 'ALL changes go through ICC — even beneficial ones.'],
          ['Conflict resolution', 'Collaborating = always best unless emergency or safety issue.'],
          ['Risk proactivity', 'Always assess risk before acting. Proactive always beats reactive.'],
          ['People first', 'Before taking action on a performance issue: understand root cause first.'],
          ['Quality philosophy', 'Prevention > appraisal > inspection. Quality is planned in, not inspected in.'],
        ].map(([t,d])=>`
          <div class="tip-row">
            <div class="tip-title">${t}</div>
            <div class="tip-desc">${d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>`;
}

// ─── DOMAINS LIST ─────────────────────────────────────────────────────────
function domainsPage() {
  return `
  <div class="page">
    <div class="page-head">
      <h1>Domains & Tasks</h1>
      <p>Complete PMP Exam Content Outline — 3 domains, ${domains.reduce((a,d)=>a+d.tasks.length,0)} tasks</p>
    </div>
    <div class="domain-list">
      ${domains.map(d => {
        const reviewed = d.tasks.filter(t=>S.progress[t.id]).length;
        return `
        <div class="domain-row" data-go-domain="${d.id}" style="--dc:${d.color}">
          <div class="dr-left">
            <div class="dr-icon">${d.icon}</div>
            <div class="dr-info">
              <div class="dr-name">${d.name} Domain</div>
              <div class="dr-meta">${d.weight} of exam · ${d.tasks.length} tasks · ${reviewed} reviewed</div>
              <div class="dr-prog-bar"><div style="width:${Math.round(reviewed/d.tasks.length*100)}%;background:${d.color};height:100%;border-radius:4px"></div></div>
            </div>
          </div>
          <div class="dr-arrow">→</div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

// ─── DOMAIN DETAIL ────────────────────────────────────────────────────────
function domainPage() {
  const d = domains.find(x => x.id === S.domain);
  return `
  <div class="page">
    <div class="breadcrumb">
      <button class="bc" data-page="domains">← Domains</button>
      <span>›</span><span class="bc-cur">${d.name}</span>
    </div>

    <div class="domain-hero" style="--dc:${d.color}">
      <div class="dh-icon">${d.icon}</div>
      <div class="dh-info">
        <div class="dh-tag">${d.weight} of exam</div>
        <h1>${d.name} Domain</h1>
        <p>${d.tagline}</p>
      </div>
    </div>

    <div class="domain-overview-box">
      <h2>Domain Overview</h2>
      <div class="overview-content">${mdToHtml(d.overview)}</div>
    </div>

    <h2 class="tasks-heading">Tasks (${d.tasks.length})</h2>
    <div class="task-list">
      ${d.tasks.map((t, i) => {
        const done = S.progress[t.id];
        return `
        <div class="task-row" data-open-task="${t.id}" style="--dc:${d.color}">
          <div class="tr-left">
            <div class="tr-num" style="background:${d.color}22;color:${d.color}">T${String(i+1).padStart(2,'0')}</div>
            <div class="tr-info">
              <div class="tr-title">${t.title}</div>
              <div class="tr-desc">${t.description}</div>
              <div class="tr-chips">
                <span class="chip weight-${t.examWeight.toLowerCase()}">${t.examWeight} priority</span>
                <span class="chip">${t.enablers.length} enablers</span>
              </div>
            </div>
          </div>
          <div class="tr-right">
            <button class="mark-done-btn ${done?'done':''}" data-mark="${t.id}" data-d="${d.id}">
              ${done ? '✓' : '+'}
            </button>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

// ─── TASK DETAIL ──────────────────────────────────────────────────────────
function taskPage() {
  const d = domains.find(x => x.id === S.domain);
  const t = d?.tasks.find(x => x.id === S.task);
  const idx = d.tasks.indexOf(t);
  const prev = d.tasks[idx - 1];
  const next = d.tasks[idx + 1];
  const done = S.progress[t.id];

  return `
  <div class="page task-detail-page">
    <div class="breadcrumb">
      <button class="bc" data-page="domains">← Domains</button>
      <span>›</span>
      <button class="bc" data-go-domain="${d.id}">${d.name}</button>
      <span>›</span><span class="bc-cur">${t.title}</span>
    </div>

    <div class="task-hero" style="--dc:${d.color}">
      <div class="th-badge">${d.icon} ${d.name} · <span class="weight-badge weight-${t.examWeight.toLowerCase()}">${t.examWeight} Priority</span></div>
      <h1>${t.title}</h1>
      <p>${t.description}</p>
      <button class="mark-done-lg ${done?'done':''}" data-mark="${t.id}" data-d="${d.id}">
        ${done ? '✓ Marked as Reviewed' : 'Mark as Reviewed'}
      </button>
    </div>

    <!-- Tab navigation -->
    <div class="task-tabs" id="task-tabs">
      <button class="ttab active" data-tab="theory">📖 Theory</button>
      <button class="ttab" data-tab="techniques">🛠 Techniques</button>
      <button class="ttab" data-tab="enablers">✅ Enablers</button>
      <button class="ttab" data-tab="tips">💡 Exam Tips</button>
    </div>

    <div class="task-tab-content" id="tab-theory">
      <div class="rich-content">${mdToHtml(t.theory)}</div>
    </div>
    <div class="task-tab-content hidden" id="tab-techniques">
      <div class="rich-content">${mdToHtml(t.techniques)}</div>
    </div>
    <div class="task-tab-content hidden" id="tab-enablers">
      <div class="enablers-section">
        <p class="en-intro">These are the specific activities that demonstrate competency in this task:</p>
        <ul class="enabler-ul">
          ${t.enablers.map(e => `<li>${e}</li>`).join('')}
        </ul>
        ${t.keyTerms ? `
          <div class="key-terms">
            <div class="kt-title">Key Terms & Concepts</div>
            <div class="kt-chips">${t.keyTerms.map(k=>`<span class="kt-chip">${k}</span>`).join('')}</div>
          </div>
        ` : ''}
      </div>
    </div>
    <div class="task-tab-content hidden" id="tab-tips">
      <div class="exam-tips-section">
        ${t.examTips ? t.examTips.map(tip => `
          <div class="etip">
            <div class="etip-icon">💡</div>
            <div class="etip-text">${tip}</div>
          </div>
        `).join('') : '<p>Review the theory and techniques sections for exam guidance.</p>'}
      </div>
    </div>

    <div class="task-nav-row">
      ${prev ? `<button class="tnav-btn" data-open-task="${prev.id}">← ${prev.title}</button>` : '<div></div>'}
      ${next ? `<button class="tnav-btn right" data-open-task="${next.id}">${next.title} →</button>` : '<div></div>'}
    </div>
  </div>`;
}

// ─── MIND MAP ─────────────────────────────────────────────────────────────
function mindmapPage() {
  if (S.mm.selectedTask) {
    const domain = domains.find(d => d.id === S.mm.selectedDomain);
    const task = domain?.tasks.find(t => t.id === S.mm.selectedTask);
    if (task) return mindmapTaskOverlay(domain, task);
  }
  const activeDomain = S.mm.activeDomain ? domains.find(d => d.id === S.mm.activeDomain) : null;
  return `
  <div class="page mm-page">
    <div class="page-head"><h1>◎ Interactive Mind Map</h1><p>Click a domain → see tasks · Click a task → deep explanation</p></div>
    <div class="mm-canvas-wrap">
      <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" class="mm-svg">
        <defs>
          <radialGradient id="cg"><stop offset="0%" stop-color="#1e3a6e"/><stop offset="100%" stop-color="#0f1a2e"/></radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <!-- connecting lines -->
        <line x1="400" y1="250" x2="130" y2="110" stroke="#818cf8" stroke-width="2" opacity="0.5" stroke-dasharray="6,4"/>
        <line x1="400" y1="250" x2="680" y2="250" stroke="#34d399" stroke-width="2" opacity="0.5" stroke-dasharray="6,4"/>
        <line x1="400" y1="250" x2="130" y2="390" stroke="#fbbf24" stroke-width="2" opacity="0.5" stroke-dasharray="6,4"/>
        <!-- Center PMP node -->
        <circle cx="400" cy="250" r="65" fill="url(#cg)" stroke="#3b82f6" stroke-width="3" filter="url(#glow)"/>
        <text x="400" y="238" text-anchor="middle" fill="white" font-size="16" font-weight="800" font-family="Syne,sans-serif">PMP</text>
        <text x="400" y="258" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter,sans-serif">EXAM PREP</text>
        <text x="400" y="275" text-anchor="middle" fill="#3b82f6" font-size="9" font-family="Inter,sans-serif">← Click a domain</text>
        <!-- People domain -->
        <g class="mm-d-node" data-mm-domain="people" style="cursor:pointer">
          <circle cx="130" cy="110" r="52" fill="${S.mm.activeDomain==='people'?'#2a2860':'#141d2e'}" stroke="#818cf8" stroke-width="${S.mm.activeDomain==='people'?3:2}"/>
          <text x="130" y="98" text-anchor="middle" font-size="20">👥</text>
          <text x="130" y="116" text-anchor="middle" fill="white" font-size="12" font-weight="700" font-family="Syne,sans-serif">People</text>
          <text x="130" y="132" text-anchor="middle" fill="#818cf8" font-size="9">42% · 14 tasks</text>
        </g>
        <!-- Process domain -->
        <g class="mm-d-node" data-mm-domain="process" style="cursor:pointer">
          <circle cx="680" cy="250" r="52" fill="${S.mm.activeDomain==='process'?'#0d3320':'#141d2e'}" stroke="#34d399" stroke-width="${S.mm.activeDomain==='process'?3:2}"/>
          <text x="680" y="238" text-anchor="middle" font-size="20">⚙️</text>
          <text x="680" y="256" text-anchor="middle" fill="white" font-size="12" font-weight="700" font-family="Syne,sans-serif">Process</text>
          <text x="680" y="272" text-anchor="middle" fill="#34d399" font-size="9">50% · 19 tasks</text>
        </g>
        <!-- Business domain -->
        <g class="mm-d-node" data-mm-domain="business" style="cursor:pointer">
          <circle cx="130" cy="390" r="52" fill="${S.mm.activeDomain==='business'?'#332200':'#141d2e'}" stroke="#fbbf24" stroke-width="${S.mm.activeDomain==='business'?3:2}"/>
          <text x="130" y="378" text-anchor="middle" font-size="20">🌐</text>
          <text x="130" y="396" text-anchor="middle" fill="white" font-size="12" font-weight="700" font-family="Syne,sans-serif">Business</text>
          <text x="130" y="412" text-anchor="middle" fill="#fbbf24" font-size="9">8% · 4 tasks</text>
        </g>
      </svg>
      ${activeDomain ? `
        <div class="mm-task-panel" style="--dc:${activeDomain.color}">
          <div class="mm-panel-hdr">
            <span class="mm-panel-icon">${activeDomain.icon}</span>
            <div><div class="mm-panel-name">${activeDomain.name} Domain</div><div class="mm-panel-sub">${activeDomain.weight} · ${activeDomain.tasks.length} tasks · click any task</div></div>
            <button class="mm-close-btn" data-mm-close>✕</button>
          </div>
          <div class="mm-task-chips">
            ${activeDomain.tasks.map((t,i)=>`
              <div class="mm-chip ${S.progress[t.id]?'done':''}" data-mm-task="${t.id}" data-mm-taskdomain="${activeDomain.id}">
                <span class="mm-chip-n" style="color:${activeDomain.color}">T${String(i+1).padStart(2,'0')}</span>
                <span class="mm-chip-t">${t.title}</span>
                ${S.progress[t.id]?'<span class="mm-chip-done">✓</span>':''}
              </div>
            `).join('')}
          </div>
        </div>
      ` : `
        <div class="mm-key-concepts">
          <div class="mkc-title">Key Concept Flows</div>
          ${[
            {l:'Conflict (Best→Worst)',items:['Collaborating','Compromising','Smoothing','Forcing','Withdrawing'],c:'#818cf8'},
            {l:'Threat Responses',items:['Avoid','Transfer','Mitigate','Accept','Escalate'],c:'#34d399'},
            {l:'Team Stages',items:['Forming','Storming','Norming','Performing','Adjourning'],c:'#f472b6'},
            {l:'Contract Risk (Buyer↑)',items:['Fixed Price','T&M','Cost Plus'],c:'#fbbf24'},
          ].map(r=>`
            <div class="mkc-row">
              <div class="mkc-lbl" style="color:${r.c}">${r.l}</div>
              <div class="mkc-items">${r.items.map((it,i)=>`<span class="mkc-item">${it}</span>${i<r.items.length-1?'<span class="mkc-arr">→</span>':''}`).join('')}</div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  </div>`;
}

function mindmapTaskOverlay(domain, task) {
  return `
  <div class="page">
    <div class="breadcrumb">
      <button class="bc" data-mm-back-map>← Mind Map</button>
      <span>›</span><button class="bc" data-mm-back-domain="${domain.id}">${domain.name}</button>
      <span>›</span><span class="bc-cur">${task.title}</span>
    </div>
    <div class="task-hero" style="--dc:${domain.color}">
      <div class="th-badge">${domain.icon} ${domain.name} · <span class="weight-badge weight-${task.examWeight.toLowerCase()}">${task.examWeight} Priority</span></div>
      <h1>${task.title}</h1><p>${task.description}</p>
      <button class="mark-done-lg ${S.progress[task.id]?'done':''}" data-mark="${task.id}">${S.progress[task.id]?'✓ Reviewed':'Mark as Reviewed'}</button>
    </div>
    <div class="task-tabs" id="task-tabs">
      <button class="ttab active" data-tab="theory">📖 Theory</button>
      <button class="ttab" data-tab="techniques">🛠 Techniques</button>
      <button class="ttab" data-tab="enablers">✅ Enablers</button>
      <button class="ttab" data-tab="tips">💡 Exam Tips</button>
    </div>
    <div class="task-tab-content" id="tab-theory"><div class="rich-content">${mdToHtml(task.theory)}</div></div>
    <div class="task-tab-content hidden" id="tab-techniques"><div class="rich-content">${mdToHtml(task.techniques)}</div></div>
    <div class="task-tab-content hidden" id="tab-enablers">
      <div class="enablers-section">
        <p class="en-intro">Specific activities that demonstrate competency:</p>
        <ul class="enabler-ul">${task.enablers.map(e=>`<li>${e}</li>`).join('')}</ul>
        ${task.keyTerms?`<div class="key-terms"><div class="kt-title">Key Terms</div><div class="kt-chips">${task.keyTerms.map(k=>`<span class="kt-chip">${k}</span>`).join('')}</div></div>`:''}
      </div>
    </div>
    <div class="task-tab-content hidden" id="tab-tips">
      <div class="exam-tips-section">${task.examTips?task.examTips.map(t=>`<div class="etip"><div class="etip-icon">💡</div><div class="etip-text">${t}</div></div>`).join(''):''}</div>
    </div>
  </div>`;
}

// ─── FLASHCARDS ───────────────────────────────────────────────────────────
// ─── FLASHCARDS ───────────────────────────────────────────────────────────
function flashcardsPage() {
  const cats = ['All', ...new Set(flashcards.map(f=>f.cat))];
  const filtered = S.fc.filter === 'All' ? flashcards : flashcards.filter(f=>f.cat===S.fc.filter);
  const card = filtered[S.fc.idx % filtered.length];
  const pos = (S.fc.idx % filtered.length) + 1;

  return `
  <div class="page fc-page">
    <div class="page-head">
      <h1>▣ Flashcards</h1>
      <p>${filtered.length} cards · ${S.fc.filter} category</p>
    </div>

    <div class="fc-cats">
      ${cats.map(c=>`<button class="fc-cat-btn ${S.fc.filter===c?'active':''}" data-fc-cat="${c}">${c}</button>`).join('')}
    </div>

    <div class="fc-progress-row">
      <span>${pos} / ${filtered.length}</span>
      <div class="fc-pbar"><div class="fc-pfill" style="width:${(pos/filtered.length)*100}%"></div></div>
    </div>

    <div class="fc-area">
      <div class="fc-card ${S.fc.flipped?'flipped':''}" id="fc-card" data-fc-flip>
        <div class="fc-front">
          <div class="fc-cat-tag">${card.cat}</div>
          <div class="fc-q">${card.q}</div>
          <div class="fc-flip-hint">Tap to reveal</div>
        </div>
        <div class="fc-back">
          <div class="fc-cat-tag">${card.cat}</div>
          <div class="fc-a">${card.a.replace(/\n/g,'<br>')}</div>
        </div>
      </div>
    </div>

    <div class="fc-btns">
      <button class="fc-btn-nav" data-fc-prev>← Prev</button>
      <button class="fc-btn-flip" data-fc-flip>${S.fc.flipped?'↺ Question':'↻ Answer'}</button>
      <button class="fc-btn-nav" data-fc-next>Next →</button>
    </div>

    <div class="fc-list-section">
      <div class="fc-list-title">All Cards</div>
      <div class="fc-list">
        ${filtered.map((f,i)=>`
          <div class="fc-list-item ${i===S.fc.idx%filtered.length?'cur':''}" data-fc-jump="${i}">
            <span class="fli-num">${i+1}</span>
            <span class="fli-q">${f.q.substring(0,70)}${f.q.length>70?'...':''}</span>
          </div>
        `).join('')}
      </div>
    </div>
  </div>`;
}

// ─── FORMULAS ─────────────────────────────────────────────────────────────
function formulasPage() {
  return `
  <div class="page formulas-page">
    <div class="page-head">
      <h1>Σ Formulas</h1>
      <p>Every formula you need — with meaning, context, and worked examples</p>
    </div>

    ${formulas.map(sec => `
      <div class="formula-section" style="--fc:${sec.color}">
        <div class="fs-header">
          <h2>${sec.category}</h2>
        </div>
        <div class="formula-grid">
          ${sec.items.map(f => `
            <div class="formula-card">
              <div class="f-name">${f.name}</div>
              <div class="f-eq">${f.formula}</div>
              <div class="f-meaning">${f.meaning}</div>
              <div class="f-example">
                <span class="fe-label">Example:</span> ${f.example}
              </div>
              <div class="f-memoric">💡 ${f.memoric}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}

    <div class="evm-cheat">
      <h2>EVM Quick Reference</h2>
      <div class="evm-table-wrap">
        <table class="evm-table">
          <thead>
            <tr><th>Metric</th><th>Formula</th><th>< 1 or Negative</th><th>> 1 or Positive</th></tr>
          </thead>
          <tbody>
            <tr><td>CV (Cost Variance)</td><td class="mono">EV − AC</td><td class="bad">⚠ Over Budget</td><td class="good">✓ Under Budget</td></tr>
            <tr><td>SV (Schedule Variance)</td><td class="mono">EV − PV</td><td class="bad">⚠ Behind Schedule</td><td class="good">✓ Ahead</td></tr>
            <tr><td>CPI (Cost Index)</td><td class="mono">EV ÷ AC</td><td class="bad">⚠ Over Budget</td><td class="good">✓ Under Budget</td></tr>
            <tr><td>SPI (Schedule Index)</td><td class="mono">EV ÷ PV</td><td class="bad">⚠ Behind</td><td class="good">✓ Ahead</td></tr>
            <tr><td>TCPI</td><td class="mono">(BAC−EV)÷(BAC−AC)</td><td class="good">✓ Easier to achieve</td><td class="bad">⚠ Need more efficiency</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>`;
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────
function quizStartPage() {
  const cats = ['All', ...new Set(quizBank.map(q=>q.domain))];
  const filtered = S.quiz.filter === 'All' ? quizBank : quizBank.filter(q=>q.domain===S.quiz.filter);
  return `
  <div class="page quiz-start-page">
    <div class="page-head">
      <h1>◉ Practice Quiz</h1>
      <p>Realistic PMP-style questions with detailed answer explanations</p>
    </div>

    <div class="quiz-setup-grid">
      <div class="qs-card">
        <h2>Configure Quiz</h2>
        <div class="qs-section">
          <label>Filter by domain:</label>
          <div class="qs-cats">
            ${cats.map(c=>`<button class="qs-cat ${S.quiz.filter===c?'active':''}" data-quiz-cat="${c}">${c}</button>`).join('')}
          </div>
        </div>
        <div class="qs-info">
          <div class="qi-row"><span>Questions:</span><strong>${filtered.length}</strong></div>
          <div class="qi-row"><span>Format:</span><strong>Multiple choice</strong></div>
          <div class="qi-row"><span>Explanations:</span><strong>Every question</strong></div>
          <div class="qi-row"><span>Difficulty:</span><strong>Easy + Medium + Hard</strong></div>
        </div>
        <button class="start-btn" data-quiz-start>Start Quiz →</button>
      </div>

      <div class="qs-preview">
        <h3>Sample Questions</h3>
        ${quizBank.slice(0,4).map(q=>`
          <div class="qprev-item">
            <div class="qprev-meta"><span class="domain-tag">${q.domain}</span> <span class="diff-tag diff-${q.difficulty.toLowerCase()}">${q.difficulty}</span></div>
            <div class="qprev-q">${q.q.substring(0,90)}...</div>
          </div>
        `).join('')}
        <div class="qprev-more">+ ${quizBank.length - 4} more questions</div>
      </div>
    </div>
  </div>`;
}

function quizPlayPage() {
  const filtered = S.quiz.filter === 'All' ? quizBank : quizBank.filter(q=>q.domain===S.quiz.filter);

  if (S.quiz.idx >= filtered.length) {
    return quizResultsPage(filtered);
  }

  const q = filtered[S.quiz.idx];
  const answered = S.quiz.answered !== null;

  return `
  <div class="page quiz-play-page">
    <div class="qp-header">
      <div class="qph-progress">
        <span>${S.quiz.idx + 1} / ${filtered.length}</span>
        <div class="qph-bar"><div class="qph-fill" style="width:${(S.quiz.idx/filtered.length)*100}%"></div></div>
      </div>
      <div class="qph-score">Score: ${S.quiz.score}/${S.quiz.idx}</div>
      <button class="quit-btn" data-quiz-quit>End</button>
    </div>

    <div class="q-card">
      <div class="q-meta">
        <span class="domain-tag">${q.domain}</span>
        <span class="diff-tag diff-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
      </div>
      <div class="q-text">${q.q}</div>

      <div class="q-opts">
        ${q.opts.map((opt, i) => {
          let cls = 'q-opt';
          if (answered) {
            if (i === q.correct) cls += ' correct';
            else if (i === S.quiz.answered && i !== q.correct) cls += ' wrong';
            else cls += ' neutral';
          }
          return `
          <button class="${cls}" ${answered?'disabled':''} data-answer="${i}">
            <span class="opt-letter">${'ABCD'[i]}</span>
            <span class="opt-text">${opt}</span>
          </button>`;
        }).join('')}
      </div>

      ${answered ? `
        <div class="q-explanation">
          <div class="exp-verdict ${S.quiz.answered === q.correct ? 'correct' : 'wrong'}">
            ${S.quiz.answered === q.correct ? '✅ Correct!' : '❌ Incorrect'}
          </div>
          <div class="exp-text">${q.explanation}</div>
        </div>
        <button class="next-q-btn" data-quiz-next>
          ${S.quiz.idx + 1 >= filtered.length ? 'See Results →' : 'Next Question →'}
        </button>
      ` : ''}
    </div>
  </div>`;
}

function quizResultsPage(filtered) {
  const pct = Math.round((S.quiz.score / filtered.length) * 100);
  const pass = pct >= 61;
  return `
  <div class="page quiz-results-page">
    <div class="results-hero">
      <div class="rh-label">Quiz Complete</div>
      <div class="rh-score ${pass?'pass':'fail'}">${S.quiz.score} / ${filtered.length}</div>
      <div class="rh-pct">${pct}%</div>
      <div class="rh-verdict ${pass?'pass':'fail'}">${pass ? '✅ Passing Range' : '📚 Keep Studying'}</div>
      <p class="rh-note">PMP target: aim for 70%+ in practice</p>
    </div>

    <div class="results-list">
      ${filtered.map((q,i) => {
        const ans = S.quiz.answers[i];
        const ok = ans?.answered === q.correct;
        return `
        <div class="rl-item ${ok?'ok':'bad'}">
          <div class="rli-head">
            <span class="rli-num">Q${i+1}</span>
            <span class="domain-tag">${q.domain}</span>
            <span>${ok?'✅':'❌'}</span>
          </div>
          <div class="rli-q">${q.q.substring(0,100)}...</div>
          ${!ok?`<div class="rli-correct">Correct: ${q.opts[q.correct]}</div>`:''}
        </div>`;
      }).join('')}
    </div>

    <div class="results-btns">
      <button class="start-btn" data-quiz-start>Retake Quiz</button>
      <button class="sec-btn" data-page="home">Dashboard</button>
    </div>
  </div>`;
}

// ─── Helpers ───────────────────────────────────────────────────────────────
function mdToHtml(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^#{1,3} (.+)$/gm, '<h3>$1</h3>')
    .replace(/^• (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    .replace(/\|(.+)\|\n/g, row => {
      const cells = row.split('|').filter(c=>c.trim());
      return '<tr>' + cells.map(c=>`<td>${c.trim()}</td>`).join('') + '</tr>';
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, m => `<div class="table-wrap"><table>${m}</table></div>`)
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[a-z])/gm, '<p>')
    .replace(/(?<![>])$/gm, '</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/\n/g, '<br>');
}

// ─── Event Binding ─────────────────────────────────────────────────────────
function bind() {
  on('[data-hamburger]', 'click', () => { S.mobileNav = !S.mobileNav; render(); });
  on('[data-close-nav]', 'click', () => { S.mobileNav = false; render(); });
  on('[data-page]', 'click', e => go(e.currentTarget.dataset.page));
  on('[data-go-domain]', 'click', e => { S.domain = e.currentTarget.dataset.goDomain; go('domains'); });
  on('[data-open-task]', 'click', e => {
    const el = e.currentTarget;
    if (e.target.closest('[data-mark]')) return;
    const domainId = el.dataset.domain || S.domain;
    S.domain = domainId;
    S.task = el.dataset.openTask;
    go('domains');
  });
  on('[data-page="domains"]', 'click', () => { S.task = null; go('domains'); });
  on('.bc', 'click', e => {
    if (e.currentTarget.dataset.page) go(e.currentTarget.dataset.page);
    else if (e.currentTarget.dataset.goDomain) { S.domain = e.currentTarget.dataset.goDomain; S.task = null; go('domains'); }
  });
  on('[data-go-domain]', 'click', e => { S.domain = e.currentTarget.dataset.goDomain; S.task = null; go('domains'); });

  // Mark done
  on('[data-mark]', 'click', e => {
    e.stopPropagation();
    const id = e.currentTarget.dataset.mark;
    S.progress[id] = !S.progress[id];
    save();
    render();
  });
  on('[data-mark-lg]', 'click', e => {
    e.stopPropagation();
    const id = e.currentTarget.dataset.markLg;
    S.progress[id] = !S.progress[id];
    save();
    render();
  });

  // Task tabs
  on('.ttab', 'click', e => {
    document.querySelectorAll('.ttab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.task-tab-content').forEach(c=>c.classList.add('hidden'));
    e.currentTarget.classList.add('active');
    const tab = document.getElementById('tab-' + e.currentTarget.dataset.tab);
    if (tab) tab.classList.remove('hidden');
  });

  // mark-done-lg button
  on('.mark-done-lg', 'click', e => {
    e.stopPropagation();
    const id = e.currentTarget.dataset.mark;
    S.progress[id] = !S.progress[id];
    save();
    render();
  });

  // Mind map interactive
  on('[data-mm-domain]', 'click', e => {
    const d = e.currentTarget.dataset.mmDomain;
    S.mm.activeDomain = S.mm.activeDomain === d ? null : d;
    S.mm.selectedTask = null;
    render();
  });
  on('[data-mm-close]', 'click', () => { S.mm.activeDomain = null; S.mm.selectedTask = null; render(); });
  on('[data-mm-task]', 'click', e => {
    S.mm.selectedTask = e.currentTarget.dataset.mmTask;
    S.mm.selectedDomain = e.currentTarget.dataset.mmTaskdomain;
    render();
  });
  on('[data-mm-back-map]', 'click', () => { S.mm.selectedTask = null; S.mm.selectedDomain = null; render(); });
  on('[data-mm-back-domain]', 'click', e => { S.mm.activeDomain = e.currentTarget.dataset.mmBackDomain; S.mm.selectedTask = null; render(); });

  // Flashcards
  on('[data-fc-cat]', 'click', e => { S.fc.filter = e.currentTarget.dataset.fcCat; S.fc.idx = 0; S.fc.flipped = false; render(); });
  on('[data-fc-flip]', 'click', () => { S.fc.flipped = !S.fc.flipped; render(); });
  on('[data-fc-prev]', 'click', () => {
    const filtered = S.fc.filter === 'All' ? flashcards : flashcards.filter(f=>f.cat===S.fc.filter);
    S.fc.idx = (S.fc.idx - 1 + filtered.length) % filtered.length;
    S.fc.flipped = false; render();
  });
  on('[data-fc-next]', 'click', () => {
    const filtered = S.fc.filter === 'All' ? flashcards : flashcards.filter(f=>f.cat===S.fc.filter);
    S.fc.idx = (S.fc.idx + 1) % filtered.length;
    S.fc.flipped = false; render();
  });
  on('[data-fc-jump]', 'click', e => { S.fc.idx = parseInt(e.currentTarget.dataset.fcJump); S.fc.flipped = false; render(); });

  // Quiz
  on('[data-quiz-cat]', 'click', e => { S.quiz.filter = e.currentTarget.dataset.quizCat; render(); });
  on('[data-quiz-start]', 'click', () => {
    S.quiz.active = true; S.quiz.idx = 0; S.quiz.score = 0;
    S.quiz.answered = null; S.quiz.answers = [];
    render();
  });
  on('[data-quiz-quit]', 'click', () => { S.quiz.active = false; render(); });
  on('[data-answer]', 'click', e => {
    if (S.quiz.answered !== null) return;
    const ans = parseInt(e.currentTarget.dataset.answer);
    const filtered = S.quiz.filter === 'All' ? quizBank : quizBank.filter(q=>q.domain===S.quiz.filter);
    const q = filtered[S.quiz.idx];
    S.quiz.answered = ans;
    if (ans === q.correct) S.quiz.score++;
    S.quiz.answers.push({ answered: ans, correct: q.correct });
    render();
  });
  on('[data-quiz-next]', 'click', () => { S.quiz.idx++; S.quiz.answered = null; render(); });
}

function on(sel, evt, fn) {
  document.querySelectorAll(sel).forEach(el => el.addEventListener(evt, fn));
}

render();
