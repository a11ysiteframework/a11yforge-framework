
// Accessibility menu logic
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('accessibility-toggle');
  const menu = document.getElementById('accessibility-menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menu.classList.remove('show');
      }
    });
  }

  // Dark mode toggle
  const darkToggle = document.getElementById('dark-mode-toggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Font size controls
  const increaseFont = document.getElementById('increase-font');
  const decreaseFont = document.getElementById('decrease-font');
  let fontSize = parseInt(localStorage.getItem('fontSize')) || 16;
  document.body.style.fontSize = fontSize + 'px';

  if (increaseFont) {
    increaseFont.addEventListener('click', () => {
      fontSize += 2;
      document.body.style.fontSize = fontSize + 'px';
      localStorage.setItem('fontSize', fontSize);
    });
  }

  if (decreaseFont) {
    decreaseFont.addEventListener('click', () => {
      fontSize = Math.max(12, fontSize - 2);
      document.body.style.fontSize = fontSize + 'px';
      localStorage.setItem('fontSize', fontSize);
    });
  }
});
