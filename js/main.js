// Simple script to handle mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked (mobile)
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  }
});

// highlight nav link for section in view (main page only)
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

if (sections.length > 0) {
  const observerOptions = {
    root: null,
    threshold: 0.6
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(item => item.classList.remove('active'));
        const id = entry.target.id;
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}