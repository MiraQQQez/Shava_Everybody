document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const navList = document.querySelector('nav ul');

    // Функция для закрытия меню
    function closeMenu() {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        navList.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Обработчик клика по бургер-меню
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        nav.classList.toggle('active');
        navList.classList.toggle('active');
        
        // Блокируем прокрутку body при открытом меню
        if (this.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Закрываем меню при клике вне его
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
            closeMenu();
        }
    });

    // Закрываем меню при клике на пункт меню
    const navItems = document.querySelectorAll('.nav-item a');
    navItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // Закрываем меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });
});
