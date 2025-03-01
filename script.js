// Fonction pour Streamlit Slider
function moveStreamlitSlide(direction) {
    const slider = document.querySelector(".streamlit-slider .slides");
    const slides = slider.querySelectorAll(".slide");
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));

    slides[activeIndex].classList.remove("active");
    activeIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[activeIndex].classList.add("active");
}

// Fonction pour Power BI Slider
function movePbiSlide(direction) {
    const slider = document.querySelector(".pbi-slider .slides");
    const slides = slider.querySelectorAll(".slide");
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
    
    slides[activeIndex].classList.remove("active");
    activeIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[activeIndex].classList.add("active");
}

// Initialisation des sliders au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    // Streamlit slider
    const streamlitSlides = document.querySelectorAll(".streamlit-slider .slide");
    streamlitSlides.forEach((slide, index) => {
        if (index !== 0) slide.classList.remove("active");
    });

    // Power BI slider
    const pbiSlides = document.querySelectorAll(".pbi-slider .slide");
    pbiSlides.forEach((slide, index) => {
        if (index !== 0) slide.classList.remove("active");
    });
});
