// inject.js

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('inject.js загружен');

    // Пример функции для управления бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});
