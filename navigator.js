// navigator.js
document.addEventListener('DOMContentLoaded', () => {
  // Elemente
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const hamburger = document.getElementById('hamburger-btn');

  // 1) Hamburger: .show toggeln (CSS muss nav.show { display:block } setzen)
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // 2) Headerhöhe messen und als CSS-Variable setzen
  const getHeaderOffset = () => (header?.offsetHeight ?? 0);

  const setHeaderVar = () => {
    document.documentElement.style.setProperty('--header-h', `${getHeaderOffset()}px`);
  };

  // Direkt setzen und bei Resize nachführen
  setHeaderVar();
  window.addEventListener('resize', setHeaderVar);

  // 3) Scroll-Restoration kontrollieren (wir steuern die Scroll-Position selbst)
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // 4) Helfer: zu einem Element mit Offset scrollen
  const scrollToElWithOffset = (el, behavior = 'auto') => {
    const y = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top: y, behavior });
  };

  // 5) Initial-Load mit vorhandenem Hash korrigieren
  const jumpToHashWithOffset = () => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (!el) return;
    // ohne Animation beim Initial-Load
    scrollToElWithOffset(el, 'auto');
  };

  // Nach DOM bereit
  jumpToHashWithOffset();

  // Zur Sicherheit auch nach vollständigem Laden (z.B. wenn sich Layout noch ändert)
  window.addEventListener('load', () => {
    setHeaderVar();
    jumpToHashWithOffset();
  });

  // 6) Bei Hash-Änderungen (auch Browser-Zurück)
  window.addEventListener('hashchange', () => {
    jumpToHashWithOffset();
  });

  // 7) Smooth-Scroll für Menü-Links (mit Offset), Hash sauber setzen
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const targetId = a.getAttribute('href');
      // leere oder reine # Links ignorieren
      if (!targetId || targetId === '#' || !targetId.startsWith('#')) return;

      const el = document.querySelector(targetId);
      if (!el) return;

      e.preventDefault();

      // weich scrollen (oder sofort bei reduced motion)
      scrollToElWithOffset(el, prefersReduced ? 'auto' : 'smooth');

      // Hash aktualisieren ohne zusätzlichen Sprung
      history.pushState(null, '', targetId);

      // Mobiles Menü schliessen
      nav?.classList.remove('show');
    });
  });
});
