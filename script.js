const themeStorageKey = "portfolio-theme";

function getPreferredTheme() {
    const savedTheme = localStorage.getItem(themeStorageKey);
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeButtons() {
    const isDark = document.documentElement.classList.contains("dark-mode") || 
                   (document.body && document.body.classList.contains("dark-mode"));
    const buttons = document.querySelectorAll(".theme-toggle");
    buttons.forEach(btn => {
        btn.textContent = isDark ? "light mode" : "dark mode";
    });
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    if (isDark) {
        document.documentElement.classList.add("dark-mode");
        if (document.body) document.body.classList.add("dark-mode");
    } else {
        document.documentElement.classList.remove("dark-mode");
        if (document.body) document.body.classList.remove("dark-mode");
    }
    updateThemeButtons();
}

function initTheme() {
    const theme = getPreferredTheme();
    applyTheme(theme);
}

function toggleThemeClass() {
    const currentTheme = (document.documentElement.classList.contains("dark-mode") ||
                         (document.body && document.body.classList.contains("dark-mode"))) ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    localStorage.setItem(themeStorageKey, newTheme);
    applyTheme(newTheme);
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

// Make themeFunction globally accessible for inline onclick handlers
window.themeFunction = themeFunction;

// Listen for system theme changes if user hasn't explicitly set a preference
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(themeStorageKey)) {
        applyTheme(e.matches ? "dark" : "light");
    }
});

// Run immediately for fast theme initialization without flash
initTheme();

// Re-run on DOM ready and Turbo page navigation events
document.addEventListener("DOMContentLoaded", initTheme);
document.addEventListener("turbo:load", initTheme);
document.addEventListener("turbo:render", initTheme);