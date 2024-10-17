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

// Persistência de Tema com localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleThemeButton.textContent = 'Modo Claro';
}

toggleThemeButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
