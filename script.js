function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;

  const isOpen = menu.classList.contains('show');

  if (isOpen) {
    menu.classList.remove('show');
  } else {
    menu.classList.add('show');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const closeMenuButton = document.getElementById('close-menu');
  if (closeMenuButton) {
    closeMenuButton.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      if (menu) {
        menu.classList.remove('show');
      }
    });
  }

  function setupScrollableSection(wrapperSelector, itemSelector) {
    const wrapper = document.querySelector(wrapperSelector);
    if (!wrapper) return;

    const scrollContainer = wrapper.querySelector(itemSelector);
    const scrollLeftBtn = wrapper.querySelector('.scroll-btn.left');
    const scrollRightBtn = wrapper.querySelector('.scroll-btn.right');

    if (!scrollContainer || !scrollLeftBtn || !scrollRightBtn) return;

    function updateScrollButtons() {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;

      scrollLeftBtn.classList.toggle('hidden', scrollLeft <= 0);
      scrollRightBtn.classList.toggle('hidden', scrollLeft + containerWidth >= scrollWidth - 1);
    }

    updateScrollButtons();
    scrollContainer.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    scrollLeftBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  setupScrollableSection('.projects-wrapper', '.projects-item');
  setupScrollableSection('.certificates-wrapper', '.certificates-item');
});

