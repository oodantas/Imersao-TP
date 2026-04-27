// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form handler
const form = document.getElementById('contact-form');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;

  btn.textContent = 'Enviado! ✓';
  btn.style.background = 'var(--color-green)';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
  }, 3000);
});

// Intersection Observer — fade-in on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.card, .project-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // Add .visible class styles via JS to avoid needing extra CSS
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
  document.head.appendChild(style);
});
