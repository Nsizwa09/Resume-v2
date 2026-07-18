// ==========================================
// 1. Mobile Menu Functionality
// ==========================================
const mobileMenu = document.getElementById('mobile-menu');
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close-menu');

function toggleMenu() {
  mobileMenu.classList.toggle('show');
}

if (hamburger) hamburger.addEventListener('click', toggleMenu);
if (closeMenu) closeMenu.addEventListener('click', toggleMenu);


// ==========================================
// 2. Slider / Scroll Functionality
// ==========================================
function setupSlider(sectionSelector, itemSelector) {
  const section = document.querySelector(sectionSelector);
  if (!section) return;

  const scrollContainer = section.querySelector(itemSelector);
  const leftBtn = section.querySelector('.scroll-btn.left');
  const rightBtn = section.querySelector('.scroll-btn.right');

  if (!scrollContainer || !leftBtn || !rightBtn) return;

  // Define how far to scroll on each button click (width of one item + gap)
  const scrollAmount = 320; 

  // Right Button Click
  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Left Button Click
  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
}

// Initialize sliders independently once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupSlider('.projects', '.projects-item');
  setupSlider('.certificates', '.certificates-item');
});
