// animate.js — Scroll-triggered fade-in-up animations
(function () {
  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1,
  });

  elements.forEach(el => observer.observe(el));
})();
