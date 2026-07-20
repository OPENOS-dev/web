/* =========================================
   NOTHING UI — Shared Scripts
   ========================================= */

(function() {
  /* Enable JS-dependent animations */
  document.documentElement.classList.add('js-ready');

  /* ── Mobile Navigation Toggle ── */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('open');
      });
    });
  }

  /* ── Fade-in Animations ── */
  const isHomePage = document.querySelector('.hero');
  const isContentPage = document.querySelector('.page-content');

  // Home page: fade in hero elements immediately
  if (isHomePage) {
    document.querySelectorAll('.hero .fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 50 + i * 50);
    });
  }

  // Content pages: fade in cards immediately
  if (isContentPage) {
    const cards = document.querySelectorAll('.feature-card, .project-card, .entry-card');
    cards.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 50 + i * 40);
    });
  }
})();
