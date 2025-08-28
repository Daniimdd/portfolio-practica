/* Menú responsive accesible */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (navToggle && nav){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', (!expanded).toString());
    nav.classList.toggle('open');
  });
}

/* Año automático en footer */
const yearEl = document.getElementById('year');
if (yearEl){ yearEl.textContent = new Date().getFullYear(); }
