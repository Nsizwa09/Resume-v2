function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      const isOpen = menu.classList.contains('show');

      if (isOpen) {
        menu.classList.remove('show');

      } else {
        menu.classList.add('show');
      }
    }

    document.getElementById('close-menu').addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.remove('show');
    });

  const scrollContainer = document.querySelector('.projects-item');
  const scrollLeftBtn = document.querySelector('.scroll-btn.left');
  const scrollRightBtn = document.querySelector('.scroll-btn.right');

  scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  });

  scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.projects-wrapper');
    const scrollContainer = wrapper.querySelector('.projects-item');
    const scrollLeftBtn = wrapper.querySelector('.scroll-btn.left');
    const scrollRightBtn = wrapper.querySelector('.scroll-btn.right');

    function updateScrollButtons() {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;

      // Show/hide buttons based on scroll position
      if (scrollLeft <= 0) {
        scrollLeftBtn.classList.add('hidden');
      } else {
        scrollLeftBtn.classList.remove('hidden');
      }

      if (scrollLeft + containerWidth >= scrollWidth - 1) {
        scrollRightBtn.classList.add('hidden');
      } else {
        scrollRightBtn.classList.remove('hidden');
      }
    }

    // Initial check
    updateScrollButtons();

    // Scroll event
    scrollContainer.addEventListener('scroll', updateScrollButtons);

    // Button actions
    scrollLeftBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Update on window resize (for responsiveness)
    window.addEventListener('resize', updateScrollButtons);
  });

