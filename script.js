let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const toggleThemeButton = document.getElementById('toggle-theme');

// Verifica se os elementos existem antes de adicionar ouvintes de eventos
if (nextButton) {
    nextButton.addEventListener('click', () => {
        changeSlide(1);
    });
}

if (prevButton) {
    prevButton.addEventListener('click', () => {
        changeSlide(-1);
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
}

// Verifica o tema armazenado no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleThemeButton.textContent = 'Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        toggleThemeButton.textContent = 'Modo Escuro';
    }
});

// Função para alternar o tema
if (toggleThemeButton) {
    toggleThemeButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        toggleThemeButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
}

// Código existente...

// Adiciona funcionalidade ao menu hamburguer
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

