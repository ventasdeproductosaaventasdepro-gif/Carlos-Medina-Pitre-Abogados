// Carlos Medina Pitre & Abogados — interacciones del sitio
document.addEventListener('DOMContentLoaded', () => {

  // Año dinámico en el pie de página
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sombra del encabezado al desplazarse
  const header = document.getElementById('siteHeader');
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  if (navToggle && navList) {
    const setOpen = (open) => {
      navList.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };

    navToggle.addEventListener('click', () => setOpen(!navList.classList.contains('open')));
    navList.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navList.classList.contains('open')) {
        setOpen(false);
        navToggle.focus();
      }
    });
    document.addEventListener('click', (e) => {
      if (navList.classList.contains('open') && !navList.contains(e.target) && !navToggle.contains(e.target)) {
        setOpen(false);
      }
    });
  }

  // Aparición suave de elementos marcados con .reveal al entrar en pantalla
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25, rootMargin: '0px 0px -60px 0px' });

      revealEls.forEach((el) => revealObserver.observe(el));
    }
  }

  // Copiar correo al portapapeles
  const copyBtn = document.getElementById('copyEmailBtn');
  const status = document.getElementById('copyStatus');

  if (copyBtn) {
    const originalLabel = copyBtn.textContent;

    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
      } catch (err) {
        // Respaldo para navegadores sin Clipboard API
        const temp = document.createElement('textarea');
        temp.value = email;
        temp.setAttribute('readonly', '');
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      copyBtn.textContent = 'Correo copiado';
      if (status) status.textContent = 'Correo copiado al portapapeles';
      setTimeout(() => {
        copyBtn.textContent = originalLabel;
        if (status) status.textContent = '';
      }, 2200);
    });
  }
});
