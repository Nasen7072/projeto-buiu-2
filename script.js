const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Para lidar com o clique nos itens de menu e mostrar o submenu
    document.querySelectorAll('.nav-list li').forEach(item => {
        item.addEventListener('click', () => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                dropdown.classList.toggle('active'); // Alternar o submenu
            }
        });
    });
}
