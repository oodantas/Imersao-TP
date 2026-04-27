// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.dataset.visible = 'true';
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.08 }
);

document.querySelectorAll('.pilar, .projeto, .hero__inner').forEach(el => {
  el.style.cssText = 'opacity:0;transform:translateY(24px);transition:opacity 0.5s ease,transform 0.5s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = '[data-visible="true"]{opacity:1!important;transform:none!important}';
  document.head.appendChild(style);
});

// Contact form
const form = document.getElementById('contact-form');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button');
  btn.textContent = '[ ENVIADO ✓ ]';
  btn.style.opacity = '0.6';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'ENVIAR MENSAGEM';
    btn.style.opacity = '';
    btn.disabled = false;
    form.reset();
  }, 3000);
});
