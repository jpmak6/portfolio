// Assurez-vous d'avoir inclus la bibliothèque Typed.js dans votre projet
// Vous pouvez la télécharger depuis https://github.com/mattboldt/typed.js/

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["First sentence.", "Second sentence."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    };

    var typed = new Typed(".element", options);
});