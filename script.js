const themeStorageKey = "portfolio-theme";

function initTheme() {
   if (localStorage.getItem(themeStorageKey) === "dark") {
      document.body.classList.add("dark-mode");
   }
}

function toggleThemeClass() {
   document.body.classList.toggle("dark-mode");
   if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem(themeStorageKey, "dark");
   } else {
      localStorage.removeItem(themeStorageKey);
   }
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