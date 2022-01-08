const STORAGE_THEME_KEY = 'darkTheme';
const HTML_THEME_DATASET_KEY = 'data-color-scheme';
const HTML = document.documentElement;

function getJsonFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function updateTheme(isDark) {
  localStorage.setItem(STORAGE_THEME_KEY, isDark);
  HTML.setAttribute(HTML_THEME_DATASET_KEY, isDark ? 'dark' : 'light');
}

function initTheme() {
  const isDark =
    getJsonFromStorage(STORAGE_THEME_KEY) ??
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  updateTheme(isDark);
}

function toggleTheme() {
  const isDark = getJsonFromStorage(STORAGE_THEME_KEY);
  updateTheme(!isDark);
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    const isDark = e.matches;
    updateTheme(isDark);
  });

initTheme();
