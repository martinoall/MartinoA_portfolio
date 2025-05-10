document.addEventListener("DOMContentLoaded", () => {
    const hero = document.getElementById("category-hero");
  
    document.querySelectorAll(".work-item").forEach(item => {
      const cover = item.dataset.cover;
      const gallery = JSON.parse(item.dataset.gallery || "[]");
  
      // Hover: swap hero background
      item.addEventListener("mouseenter", () => {
        hero.style.backgroundImage = cover
          ? `url(${cover})`
          : "";
      });
      item.addEventListener("mouseleave", () => {
        hero.style.backgroundImage = "";
      });
  
      // Click: open lightbox
      item.addEventListener("click", e => {
        e.preventDefault();
        if (!gallery.length) return;
        const lightbox = GLightbox({
          elements: gallery.map(src => ({ href: src, type: "image" }))
        });
        lightbox.open();
      });
    });
  });