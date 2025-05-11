document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("nav-toggle");
    const nav    = document.getElementById("site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.classList.toggle("open");
    });
  });