// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const show = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(show));
  });
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal,.card,.pricing-box,.schedule-card,.stat,.quote,.contact-form-box,.contact-info-box');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Form submit (demo)
function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());

  // Basic validation
  if(!data.name || !data.phone || !data.language || !data.batch){
    setStatus('Please fill in all required fields.', 'error');
    return false;
  }

  // Simulate success
  setStatus('Enrollment received! We will contact you within 24 hours.', 'success');
  form.reset();
  return false;
}

function setStatus(text, type){
  const el = document.getElementById('form-status');
  el.textContent = text;
  el.style.color = type === 'success' ? '#38d39f' : '#ff7a59';
}
