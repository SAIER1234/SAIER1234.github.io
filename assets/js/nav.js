// nav.js — Scroll-aware navigation highlighting and mobile menu
(function () {
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sidebar = document.getElementById('sidebar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mainContent = document.getElementById('main-content');
  if (!navLinks.length) return;

  // Scroll spy — highlight active nav link
  const sectionIds = Array.from(navLinks).map(link => link.getAttribute('data-section'));
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-section') === id);
        });
      }
    });
  }, observerOptions);

  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  // Mobile menu toggle
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    // Close menu when clicking nav link on mobile
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('open');
        }
      });
    });

    // Close menu when clicking outside
    if (mainContent) {
      mainContent.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('open');
        }
      });
    }
  }
})();
