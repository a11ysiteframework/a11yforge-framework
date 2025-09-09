
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('accessibility-toggle');
  const menu = document.getElementById('accessibility-menu');
  if (toggle && menu) {
    const setExpanded = (open) => toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
      setExpanded(menu.classList.contains('show'));
      if (menu.classList.contains('show')) {
        const first = menu.querySelector('button'); first && first.focus();
      }
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { menu.classList.remove('show'); setExpanded(false); } });
    document.addEventListener('click', (e) => { if (!menu.contains(e.target) && e.target !== toggle) { menu.classList.remove('show'); setExpanded(false); }});
  }

  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const themeBtn = document.getElementById('dark-mode-toggle');
  const updateThemeBtn = () => themeBtn && (themeBtn.textContent = (document.documentElement.getAttribute('data-theme') === 'dark') ? '☀️ Light' : '🌙 Dark');
  updateThemeBtn();
  themeBtn && themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeBtn();
  });

  const inc = document.getElementById('increase-font');
  const dec = document.getElementById('decrease-font');
  let base = parseInt(localStorage.getItem('font-base') || '16', 10);
  const applySize = () => document.body.style.fontSize = base + 'px';
  applySize();
  inc && inc.addEventListener('click', () => { base = Math.min(22, base + 2); localStorage.setItem('font-base', base); applySize(); });
  dec && dec.addEventListener('click', () => { base = Math.max(12, base - 2); localStorage.setItem('font-base', base); applySize(); });
});
