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

// Verifica o tema armazenado no localStorage ao carregar a página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleThemeButton.textContent = 'Modo Claro';
}

// Função para alternar o tema
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleThemeButton.textContent = 'Modo Escuro';
        localStorage.setItem('theme', 'light');
    }
});
