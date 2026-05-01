/**
 * =====================================================
 * PROJET.JS - ANIMATIONS ET INTERACTIONS PRO
 * =====================================================
 * Gestion avancée des animations de cartes de projets
 * Parallax, filtrage, et effects de haut niveau
 */

class ProjectPortfolio {
    constructor() {
        this.cards = document.querySelectorAll('.project-card');
        this.filters = document.querySelectorAll('[data-filter]');
        this.showcaseBtn = document.querySelector('.showcase-btn');
        this.allProjects = Array.from(this.cards);
        this.activeFilter = 'all';
        this.isAnimating = false;

        this.init();
    }

    /**
     * Initialisation du portfolio
     */
    init() {
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.setupParallax();
        this.animateEntrance();
    }

    /**
     * Setup des event listeners
     */
    setupEventListeners() {
        // Filtrage des projets
        this.filters.forEach(filter => {
            filter.addEventListener('click', (e) => this.handleFilterClick(e));
        });

        // Showcase button
        if (this.showcaseBtn) {
            this.showcaseBtn.addEventListener('click', () => this.showShowcase());
            this.setupShowcaseHover();
        }

        // Hover effects sur les cartes
        this.cards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => this.cardHoverEnter(card, index));
            card.addEventListener('mouseleave', () => this.cardHoverLeave(card, index));
        });

        // Prevent smooth scroll conflicts
        document.addEventListener('wheel', (e) => {
            if (this.isAnimating) e.preventDefault();
        }, { passive: false });
    }

    /**
     * Animation d'entrée - Stagger effect
     */
    animateEntrance() {
        this.cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.95)';

            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        });
    }

    /**
     * Intersection Observer pour animations au scroll
     */
    setupIntersectionObserver() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        this.animateCardOnView(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );

        this.cards.forEach(card => observer.observe(card));
    }

    /**
     * Parallax effect au scroll
     */
    setupParallax() {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;

            this.cards.forEach(card => {
                const speed = card.dataset.parallax || 1;
                const moveX = (x - 50) * speed * 0.1;
                const moveY = (y - 50) * speed * 0.1;

                card.style.setProperty('--parallax-x', `${moveX}px`);
                card.style.setProperty('--parallax-y', `${moveY}px`);
            });
        });

        // Parallax au scroll
        window.addEventListener('scroll', () => {
            this.cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const scroll = window.scrollY;
                const offset = rect.top - window.innerHeight / 2;
                const speed = 0.3;

                card.style.setProperty('--scroll-y', `${offset * speed}px`);
            });
        });
    }

    /**
     * Hover enter effect
     */
    cardHoverEnter(card, index) {
        // Blur les autres cartes
        this.cards.forEach((c, i) => {
            if (i !== index) {
                c.style.filter = 'blur(3px)';
                c.style.opacity = '0.6';
            }
        });

        // Highlight la carte actuelle
        card.classList.add('active-hover');
        card.style.filter = 'none';
        card.style.opacity = '1';

        // Animation du contenu
        const content = card.querySelector('.project-content');
        if (content) {
            content.style.opacity = '0';
            setTimeout(() => {
                content.style.transition = 'opacity 0.3s ease';
                content.style.opacity = '1';
            }, 50);
        }
    }

    /**
     * Hover leave effect
     */
    cardHoverLeave(card) {
        // Reset blur
        this.cards.forEach(c => {
            c.style.filter = 'none';
            c.style.opacity = '1';
        });

        card.classList.remove('active-hover');
    }

    /**
     * Animation au scroll dans la view
     */
    animateCardOnView(card) {
        const image = card.querySelector('.project-image img');
        const content = card.querySelector('.project-content');
        const techTags = card.querySelectorAll('.tech-tag');

        if (image) {
            image.style.animation = 'imageSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
        }

        if (content) {
            content.style.animation = 'contentFadeIn 0.6s ease 0.2s forwards';
        }

        // Stagger animation des tech tags
        techTags.forEach((tag, i) => {
            tag.style.animation = `tagBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + i * 0.1}s forwards`;
            tag.style.opacity = '0';
        });
    }

    /**
     * Filtrage des projets
     */
    handleFilterClick(e) {
        const filter = e.target.dataset.filter;
        this.activeFilter = filter;

        // Update active state
        this.filters.forEach(f => f.classList.remove('active'));
        e.target.classList.add('active');

        // Filter animation
        this.filterProjects(filter);
    }

    /**
     * Filtrer et animer les projets
     */
    filterProjects(filter) {
        this.isAnimating = true;

        this.cards.forEach(card => {
            const projectFilter = card.dataset.category;
            const isMatch = filter === 'all' || projectFilter === filter;

            card.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';

            if (isMatch) {
                card.style.opacity = '1';
                card.style.display = 'block';
                card.style.transform = 'scale(1)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    if (card.style.opacity === '0') {
                        card.style.display = 'none';
                    }
                }, 400);
            }
        });

        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    /**
     * Setup du bouton showcase avec effets avancés
     */
    setupShowcaseHover() {
        const container = this.showcaseBtn.parentElement;

        this.showcaseBtn.addEventListener('mouseenter', function () {
            // Créer des particules
            for (let i = 0; i < 8; i++) {
                const particle = document.createElement('div');
                particle.className = 'showcase-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                container.appendChild(particle);

                setTimeout(() => particle.remove(), 800);
            }
        });
    }

    /**
     * Afficher le showcase
     */
    showShowcase() {
        window.open('https://preview--soldier.lovable.app/gift', '_blank');

        // Celebration animation
        this.createConfetti();
    }

    /**
     * Créer des confettis au clic
     */
    createConfetti() {
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.delay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }
    }

    /**
     * Destroy - cleanup
     */
    destroy() {
        this.cards.forEach(card => {
            card.removeEventListener('mouseenter', this.cardHoverEnter);
            card.removeEventListener('mouseleave', this.cardHoverLeave);
        });

        this.filters.forEach(filter => {
            filter.removeEventListener('click', this.handleFilterClick);
        });
    }
}

/**
 * Initialisation au chargement du DOM
 */
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new ProjectPortfolio();

    // Cleanup au unload
    window.addEventListener('beforeunload', () => {
        portfolio.destroy();
    });
});

/**
 * Smooth scroll sur les liens du showcase
 */
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
