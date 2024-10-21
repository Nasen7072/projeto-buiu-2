// Código existente...

// Adiciona funcionalidade ao menu hamburguer
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Adiciona funcionalidade de hover para submenu (opcional)
const navItems = document.querySelectorAll('.nav-list li');

navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) dropdown.style.display = 'block';
    });
    
    item.addEventListener('mouseout', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) dropdown.style.display = 'none';
    });
});

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}
