// Alternância de Tema (Claro <-> Escuro)
const toggleThemeButton = document.getElementById('toggle-theme');

// Verifica o tema armazenado no localStorage ao carregar a página
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleThemeButton.textContent = 'Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        toggleThemeButton.textContent = 'Modo Escuro';
    }
}

// Ao carregar a página, define o tema conforme armazenado no localStorage
const storedTheme = localStorage.getItem('theme');
applyTheme(storedTheme);

// Função para alternar o tema
toggleThemeButton.addEventListener('click', () => {
    let theme;
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        theme = 'light';
        toggleThemeButton.textContent = 'Modo Escuro';
    } else {
        document.body.classList.add('dark-mode');
        theme = 'dark';
        toggleThemeButton.textContent = 'Modo Claro';
    }
    localStorage.setItem('theme', theme);  // Armazena o tema no localStorage
});
