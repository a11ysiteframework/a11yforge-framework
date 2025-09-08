document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('dark-mode');

  if (saved === 'true' || (saved === null && prefersDark)) {
    document.body.classList.add('dark');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark'));
  });
});
