const root = document.documentElement;
const button = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const text = document.getElementById("themeText");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const dark = theme === "dark";
  icon.textContent = dark ? "☀" : "☾";
  text.textContent = dark ? "Tema claro" : "Tema escuro";
  button.setAttribute("aria-pressed", String(dark));
  localStorage.setItem("tratorama-theme", theme);
}

const savedTheme = localStorage.getItem("tratorama-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
applyTheme(savedTheme || preferredTheme);

button.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});
