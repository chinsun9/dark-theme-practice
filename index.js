function initTheme() {
  // chk local storage
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    console.log(`load theme`);
    document.body.classList.add("dark");
    return;
  }
  if (theme === "light") {
    console.log(`load theme`);
    return;
  }

  //   visit first time
  const isDark = window.matchMedia("(prefers-color-scheme: dark)");
  if (isDark) document.body.classList.add("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function toggleTheme() {
  console.log(`toggle theme`);
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.className ? "dark" : "light");
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    localStorage.setItem("theme", newColorScheme);

    if (newColorScheme === "dark") {
      document.body.classList.add("dark");
      return;
    }
    document.body.classList.remove("dark");
  });

initTheme();
