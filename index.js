function initTheme() {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (isDark) document.body.classList.add("dark");
  }

function toggleTheme() {
  console.log(`toggle theme`);
  document.body.classList.toggle("dark");
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newColorScheme = e.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
      document.body.classList.add("dark");
      return;
    }
    document.body.classList.remove("dark");
  });

initTheme();
