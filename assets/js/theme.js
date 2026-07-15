// theme.js — Dark/Light mode toggle
(function () {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const html = document.documentElement;
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function setTheme(isLight) {
    if (isLight) {
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    } else {
      html.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    }
  }

  // Initialize icons
  const isLight = html.classList.contains('light');
  if (isLight) {
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
  }

  toggle.addEventListener('click', () => {
    const currentlyLight = html.classList.contains('light');
    setTheme(!currentlyLight);
  });
})();
