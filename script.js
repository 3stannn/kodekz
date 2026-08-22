const themeStorageKey = "portfolio-theme";

function updateThemeButtons() {
   const buttons = document.querySelectorAll(".theme-toggle");
   buttons.forEach(btn => {
      if (document.body.classList.contains("dark-mode")) {
         btn.textContent = "light mode";
      } else {
         btn.textContent = "dark mode";
      }
   });
}

function initTheme() {
   if (localStorage.getItem(themeStorageKey) === "dark") {
      document.body.classList.add("dark-mode");
   }
   updateThemeButtons();
}

function toggleThemeClass() {
   document.body.classList.toggle("dark-mode");
   if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem(themeStorageKey, "dark");
   } else {
      localStorage.removeItem(themeStorageKey);
   }
   updateThemeButtons();
}

function themeFunction() {
    if (!document.startViewTransition) {
        toggleThemeClass();
        return;
    }
    
    document.startViewTransition(() => {
        toggleThemeClass();
    });
}

initTheme();
document.addEventListener("turbo:load", initTheme);
document.addEventListener("turbo:render", initTheme);