let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Função para alternar slides
document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
}

// Alternância de Tema (Claro <-> Escuro)
const toggleThemeButton = document.getElementById('toggle-theme');

// Verifica o tema
