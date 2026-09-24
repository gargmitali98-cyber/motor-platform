// Motor Insurance Platform shell: renders the module registry and routes to live modules.
(function () {
  const THEME_KEY = 'motor-platform-theme';

  function readTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function saveTheme(value) {
    try { localStorage.setItem(THEME_KEY, value); } catch (e) { /* storage unavailable: theme just won't persist */ }
  }
  function applyTheme(value) {
    document.documentElement.setAttribute('data-theme', value === 'dark' ? 'dark' : 'light');
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function moduleCard(m) {
    const live = m.status === 'live';
    const tag = live ? 'a' : 'div';
    const attrs = live
      ? `href="${escapeHtml(m.entry)}" class="module-card live" data-module="${escapeHtml(m.id)}"`
      : `class="module-card planned" aria-disabled="true" data-module="${escapeHtml(m.id)}"`;
    return `
      <${tag} ${attrs}>
        <div class="module-top">
          <div class="module-icon" aria-hidden="true">${m.icon}</div>
          <span class="module-status ${live ? 'is-live' : 'is-planned'}">${live ? 'Available' : 'Coming soon'}</span>
        </div>
        <h3 class="module-name">${escapeHtml(m.name)}</h3>
        <p class="module-desc">${escapeHtml(m.description)}</p>
        <div class="module-cta">${live ? 'Open module →' : 'Not yet available'}</div>
      </${tag}>`;
  }

  function render() {
    const modules = window.MOTOR_MODULES || [];
    const groups = [];
    modules.forEach(m => {
      let g = groups.find(x => x.name === m.group);
      if (!g) { g = { name: m.group, items: [] }; groups.push(g); }
      g.items.push(m);
    });

    const liveCount = modules.filter(m => m.status === 'live').length;
    document.getElementById('moduleSummary').textContent =
      `${liveCount} of ${modules.length} modules available`;

    document.getElementById('moduleGroups').innerHTML = groups.map(g => `
      <section class="module-group">
        <h2 class="group-title">${escapeHtml(g.name)}</h2>
        <div class="module-grid">${g.items.map(moduleCard).join('')}</div>
      </section>`).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(readTheme());
    render();
    document.getElementById('themeToggle').addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      saveTheme(next);
    });
  });
})();
