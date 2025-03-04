// Fonction pour Streamlit Slider
function moveStreamlitSlide(direction) {
    const slider = document.querySelector(".streamlit-slider .slides");
    if (!slider) return; // Vérifie si l'élément existe

    const slides = slider.querySelectorAll(".slide");
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));

    slides[activeIndex].classList.remove("active");
    slides[activeIndex].style.display = "none"; // Cache l'ancienne slide

    activeIndex = (activeIndex + direction + slides.length) % slides.length;

    slides[activeIndex].classList.add("active");
    slides[activeIndex].style.display = "block"; // Affiche la nouvelle slide
}

// Fonction pour Power BI Slider
function movePbiSlide(direction) {
    const slider = document.querySelector(".pbi-slider .slides");
    if (!slider) return; // Vérifie si l'élément existe

    const slides = slider.querySelectorAll(".slide");
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));

    slides[activeIndex].classList.remove("active");
    slides[activeIndex].style.display = "none"; // Cache l'ancienne slide

    activeIndex = (activeIndex + direction + slides.length) % slides.length;

    slides[activeIndex].classList.add("active");
    slides[activeIndex].style.display = "block"; // Affiche la nouvelle slide
}

// Initialisation des sliders au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    // Streamlit slider
    const streamlitSlides = document.querySelectorAll(".streamlit-slider .slide");
    if (streamlitSlides.length > 0) {
        streamlitSlides.forEach((slide, index) => {
            slide.style.display = index === 0 ? "block" : "none";
            if (index === 0) slide.classList.add("active");
        });
    }

    // Power BI slider
    const pbiSlides = document.querySelectorAll(".pbi-slider .slide");
    if (pbiSlides.length > 0) {
        pbiSlides.forEach((slide, index) => {
            slide.style.display = index === 0 ? "block" : "none";
            if (index === 0) slide.classList.add("active");
        });
    }
});

// Cacher ou afficher le menu au clic sur le bouton hamburger
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

