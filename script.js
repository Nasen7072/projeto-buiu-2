const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Alterna a exibição do menu em dispositivos móveis
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Adiciona lógica para mostrar o submenu ao clicar
    document.querySelectorAll('.nav-list li').forEach(item => {
        item.addEventListener('click', (e) => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                e.stopPropagation(); // Impede a propagação do clique
                item.classList.toggle('active'); // Alterna a classe para mostrar/ocultar o submenu
            }
        });
    });
}
