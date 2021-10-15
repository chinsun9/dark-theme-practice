const DARK = 'dark';
const LIGHT = 'light';
const THEME_KEY = 'theme';

function updateTheme(theme) {
  console.trace(theme);

  localStorage.setItem(THEME_KEY, theme);
  document.body.classList[theme === DARK ? 'add' : 'remove'](DARK);
  document.documentElement.setAttribute('data-color-scheme', theme);
}

function initTheme() {
  console.trace();

  // check local storage
  const theme =
    localStorage.getItem(THEME_KEY) ||
    (window.matchMedia('(prefers-color-scheme: dark)') ? DARK : LIGHT);

  updateTheme(theme);
}

function toggleTheme() {
  console.trace();

  document.body.classList.toggle(DARK);
  const theme = document.body.classList.contains(DARK) ? DARK : LIGHT;
  updateTheme(theme);
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    const theme = e.matches ? DARK : LIGHT;
    updateTheme(theme);
  });
