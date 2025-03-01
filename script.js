function initStreamlitSlider() {
    let currentSlide = 0;
    const sliderClass = "streamlit-slider";
    const slides = document.querySelectorAll(`.${sliderClass} .slide`);

    function showSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });

        currentSlide = index;
    }

    function moveSlide(direction) {
        showSlide(currentSlide + direction);
    }

    showSlide(0); // Afficher la première slide au chargement

    window.moveStreamlitSlide = moveSlide; // Exposer la fonction moveSlide
}

function initPbiSlider() {
    let currentSlide = 0;
    const sliderClass = "pbi-slider";
    const slides = document.querySelectorAll(`.${sliderClass} .slide`);

    function showSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });

        currentSlide = index;
    }

    function moveSlide(direction) {
        showSlide(currentSlide + direction);
    }

    showSlide(0); // Afficher la première slide au chargement

    window.movePbiSlide = moveSlide; // Exposer la fonction moveSlide
}

document.addEventListener("DOMContentLoaded", () => {
    initStreamlitSlider();
    initPbiSlider();
});