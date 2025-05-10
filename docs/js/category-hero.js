document.addEventListener("DOMContentLoaded", () => {
  const hero         = document.getElementById("category-hero");
  const defaultCover = hero.dataset.defaultCover || "";

  // 1) On load, show the default cover (if any)
  if (defaultCover) {
    hero.style.backgroundImage = `url(${defaultCover})`;
  }

  document.querySelectorAll(".project-entry").forEach(entry => {
    const cover = entry.dataset.cover;
    const url   = entry.dataset.url;

    entry.addEventListener("mouseenter", () => {
      if (cover) {
        hero.style.backgroundImage = `url(${cover})`;
      }
    });

    entry.addEventListener("mouseleave", () => {
      // 2) On mouse‐leave, revert to the default cover
      if (defaultCover) {
        hero.style.backgroundImage = `url(${defaultCover})`;
      } else {
        hero.style.backgroundImage = ``;
      }
    });

    entry.addEventListener("click", () => {
      window.location.href = url;
    });
  });
});