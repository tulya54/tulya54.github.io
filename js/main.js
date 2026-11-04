let currentLanguage = 'en';

function renderServices() {
  const grid = document.getElementById('services-grid');
  const t = translations[currentLanguage];
  grid.replaceChildren();

  services.forEach((service, index) => {
    const item = service[currentLanguage];
    const card = document.createElement('article');
    card.className = `service-card${index === 0 ? ' featured' : ''}`;

    const icon = document.createElement('div');
    icon.className = 'service-icon';
    icon.textContent = service.icon;

    const title = document.createElement('h3');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    const details = document.createElement('div');
    details.className = 'service-details';
    details.textContent = item.details;
    details.id = `service-details-${index}`;

    const button = document.createElement('button');
    button.className = 'learn-more';
    button.type = 'button';
    button.textContent = t.learnMore;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', details.id);
    button.addEventListener('click', () => {
      const expanded = card.classList.toggle('expanded');
      button.setAttribute('aria-expanded', String(expanded));
      button.textContent = expanded ? t.showLess : t.learnMore;
    });

    card.append(icon, title, description, button, details);
    grid.append(card);
  });
}

function setLanguage(lang) {
  if (!Object.hasOwn(translations, lang)) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem('portfolioLanguage', lang); } catch (_) {}

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (Object.hasOwn(translations[lang], key)) element.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-lang]').forEach(button => {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  renderServices();
}

document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});
document.getElementById('year').textContent = new Date().getFullYear();
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolioLanguage') || 'en'; } catch (_) {}
setLanguage(savedLanguage);
