document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.hero-header');

    // Fonction pour fermer le menu
    const closeMenu = () => {
        navLinks.classList.remove('nav-open');
        navToggle.classList.remove('active');
    };

    // Toggle navigation
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Empêche la propagation du clic
        navLinks.classList.toggle('nav-open');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('nav-open');
            navToggle.classList.remove('active');
        }
    });

    // Gérer le redimensionnement de l'écran
    let resizeTimer;
    window.addEventListener('resize', () => {
        // Debounce pour éviter trop d'appels
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        }, 250);
    });

    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInside = navToggle.contains(e.target) || navLinks.contains(e.target);
        if (!isClickInside && navLinks.classList.contains('nav-open')) {
            closeMenu();
        }
    });

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
});