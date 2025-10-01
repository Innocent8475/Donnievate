
    // Mobile nav toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      menuIcon.classList.toggle('ri-menu-3-line');
      menuIcon.classList.toggle('ri-close-line');
    });

    // Active underline for desktop + mobile
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    function setActive(linkArray, clickedLink) {
      linkArray.forEach(l => l.classList.remove('active'));
      clickedLink.classList.add('active');
    }

    navLinks.forEach(link => link.addEventListener('click', () => setActive(navLinks, link)));
    mobileLinks.forEach(link => link.addEventListener('click', () => setActive(mobileLinks, link)));
  