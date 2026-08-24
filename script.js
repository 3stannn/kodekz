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

const username = '3stannn';

async function fetchContributions() {
   const countElement = document.getElementById('contribution-count');

   if (!countElement) {
      return;
   }

   try {
      const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);

      if (!response.ok) {
         throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      let totalContributions = data?.total?.lastYear;
      if (typeof totalContributions !== 'number' && Array.isArray(data?.contributions)) {
         totalContributions = data.contributions.reduce((sum, day) => sum + (Number(day?.count) || 0), 0);
      }

      if (typeof totalContributions === 'number') {
         countElement.textContent = totalContributions.toLocaleString();
      }
   } catch (error) {
      console.error('Error fetching contributions:', error);
   }
}

function initPage() {
   initTheme();
   fetchContributions();
}

initPage();
document.addEventListener("DOMContentLoaded", initPage);
document.addEventListener("turbo:load", initPage);
document.addEventListener("turbo:render", initPage);