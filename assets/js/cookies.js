/* Popup de cookies (solo técnica para recordar aceptación) */
const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('cookie-accept');

function showBanner(){
  if (!banner) return;
  const ok = localStorage.getItem('cookieAccepted');
  if (!ok){ banner.classList.add('show'); }
}

function acceptCookies(){
  localStorage.setItem('cookieAccepted', 'true');
  banner.classList.remove('show');
}

if (acceptBtn){ acceptBtn.addEventListener('click', acceptCookies); }
document.addEventListener('DOMContentLoaded', showBanner);
