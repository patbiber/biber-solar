<script>
document.addEventListener('DOMContentLoaded', () => {
  // Elemente
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const hamburger = document.getElementById('hamburger-btn');

  // Hamburger: nur Klassen toggeln, keine inline display-Styles
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // Helfer: aktuelle Headerhoehe
  const getHeaderOffset = () => (header?.offsetHeight ?? 0);

  // Smooth Scroll fuer interne Anker
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const targetId = a.getAttribute('href');
      // Leere oder reine # Links unveraendert lassen
      if (!targetId || targetId === '#' || !targetId.startsWith('#')) return;

      const el = document.querySelector(targetId);
      if (!el) return;

      e.preventDefault();

      const y = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
      window.scrollTo({ top: y, behavior: prefersReduced ? 'auto' : 'smooth' });

      // Hash aktualisieren ohne Sprung
      history.pushState(null, '', targetId);

      // Mobiles Menu schliessen
      nav?.classList.remove('show');
    });
  });
});
</script>
