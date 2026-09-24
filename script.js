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

    document.querySelectorAll(".theme-toggle").forEach((button) => {
        button.querySelector(".theme-label").textContent =
            isDark ? "light mode" : "dark mode";
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

// GitHub Contributions Activity Loader
let isFetchingContributions = false;

async function loadGitHubContributions() {
    const grid = document.getElementById("dotGrid");
    if (!grid || isFetchingContributions) return;

    if (grid.children.length > 0) {
        const graphContainer = document.querySelector(".github-graph");
        if (graphContainer) {
            graphContainer.scrollLeft = graphContainer.scrollWidth;
        }
        return;
    }

    isFetchingContributions = true;
    const totalDisplay = document.getElementById("contributionTotal");
    const graphContainer = document.querySelector(".github-graph");

    try {
        const USERNAME = "3stannn";
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();

        if (totalDisplay && data.total && data.total.lastYear !== undefined) {
            totalDisplay.textContent = Number(data.total.lastYear).toLocaleString();
        }

        grid.innerHTML = "";

        data.contributions.forEach((day) => {
            const cell = document.createElement("div");
            cell.className = "dot-cell";
            cell.title = `${day.date}: ${day.count} contributions`;

            const dot = document.createElement("div");
            dot.className = `dot dot-level-${day.level}`;

            cell.appendChild(dot);
            grid.appendChild(cell);
        });

        // Scroll to the end on mobile / narrow viewports so latest activity is in view
        if (graphContainer) {
            graphContainer.scrollLeft = graphContainer.scrollWidth;
        }
    } catch (err) {
        console.error("Failed to load GitHub activity:", err);
        if (totalDisplay && totalDisplay.textContent === "...") {
            totalDisplay.textContent = "500+";
        }
    } finally {
        isFetchingContributions = false;
    }
}

document.addEventListener("DOMContentLoaded", loadGitHubContributions);
document.addEventListener("turbo:load", loadGitHubContributions);