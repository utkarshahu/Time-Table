 document.addEventListener("DOMContentLoaded", () => {
      const toggleBtn = document.getElementById("theme-toggle");
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
        document.body.classList.add("dark");
        toggleBtn.textContent = "🌙";
      } else {
        toggleBtn.textContent = "🌞";
      }

      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        toggleBtn.textContent = isDark ? "🌙" : "🌞";
        localStorage.setItem("theme", isDark ? "dark" : "light");
      });
    });