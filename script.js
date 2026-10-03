const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');
const yearSpan = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const applyTheme = (isDark) => {
  body.classList.toggle('dark-theme', isDark);
  if (toggleIcon) {
    toggleIcon.textContent = isDark ? '🌙' : '☀️';
  }
};

const savedTheme = localStorage.getItem('nova-theme');
if (savedTheme === 'dark') {
  applyTheme(true);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-theme');
    applyTheme(isDark);
    localStorage.setItem('nova-theme', isDark ? 'dark' : 'light');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = contactForm.querySelector('input[name="name"]');
    const name = nameField?.value.trim() || 'there';

    formMessage.textContent = `Thanks, ${name}! We’ll be in touch soon.`;
    contactForm.reset();
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    projectCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !matches);
    });
  });
});
