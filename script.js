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
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Alterar o texto do botão dependendo do modo atual
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Modo Claro';
    } else {
        toggleThemeButton.textContent = 'Modo Escuro';
    }
});

// Salvar a preferência do tema no localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleThemeButton.textContent = 'Modo Claro';
}

// Salvar a preferência do usuário
toggleThemeButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
