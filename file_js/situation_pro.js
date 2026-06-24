document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.situation-card');

    if (!cards.length) {
        return;
    }

    const collapseCard = (card) => {
        card.classList.remove('is-expanded');
        const button = card.querySelector('.situation-toggle');

        if (button) {
            button.textContent = 'Afficher plus';
            button.setAttribute('aria-expanded', 'false');
        }
    };

    const expandCard = (card) => {
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                collapseCard(otherCard);
            }
        });

        card.classList.add('is-expanded');

        const button = card.querySelector('.situation-toggle');
        if (button) {
            button.textContent = 'Afficher moins';
            button.setAttribute('aria-expanded', 'true');
        }

        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    cards.forEach(card => {
        const button = card.querySelector('.situation-toggle');

        if (!button) {
            return;
        }

        button.addEventListener('click', (event) => {
            event.preventDefault();

            if (card.classList.contains('is-expanded')) {
                collapseCard(card);
                return;
            }

            expandCard(card);
        });
    });
});