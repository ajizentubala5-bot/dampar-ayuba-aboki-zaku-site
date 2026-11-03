const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const eventGallery = [
  'WhatsApp Image 2026-11-03 at 10.48.00.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.02.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.03 (1).jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.03.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.04.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.05 (1).jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.05.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.06.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.07 (1).jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.07.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.08.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.09.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.10.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.11.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.12.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.13.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.14.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.15.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.17.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.18.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.19.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.20.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.21.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.22.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.23.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.25.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.26.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.27.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.29.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.30.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.31.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.32.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.33.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.35.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.36.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.37.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.38.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.39.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.40.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.41.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.43.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.44.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.45.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.46.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.47.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.48.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.49.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.51.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.52.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.53.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.55.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.56.jpeg',
  'WhatsApp Image 2026-11-03 at 10.48.57.jpeg'
];

const galleryContainer = document.getElementById('eventGallery');
if (galleryContainer) {
  galleryContainer.innerHTML = eventGallery
    .map((fileName) => {
      const imageSrc = encodeURI('Event Photos/' + fileName);
      return `<img src="${imageSrc}" alt="Achievement event photo" loading="lazy" />`;
    })
    .join('');
}
