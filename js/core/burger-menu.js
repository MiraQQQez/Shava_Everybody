/*
 * Copyright (c) 2024 Igor Silin
 * All rights reserved.
 * Licensed under the MIT License.
 * Email: igor.silin.03@inbox.ru
 * GitHub: https://github.com/MiraQQQez
*/

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav'); 
    const navList = nav.querySelector('ul'); 
    const body = document.body;

    // Инициализация начального состояния
    if (window.innerWidth <= 768) {
        navList.style.display = 'none';
    }

    if (burger && nav) {
        burger.addEventListener('click', function(e) {
            e.stopPropagation();
            burger.classList.toggle('active');

            // Переключаем видимость меню
            if (burger.classList.contains('active')) {
                navList.style.display = 'flex';
                nav.classList.add('active'); 
                setTimeout(() => {
                    navList.classList.add('active');
                }, 10);
            } else {
                navList.classList.remove('active');
                nav.classList.remove('active'); 
                setTimeout(() => {
                    navList.style.display = 'none';
                }, 300); 
            }

            body.classList.toggle('no-scroll');
        });

        // Закрываем меню при клике на пункт меню
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                navList.classList.remove('active');
                nav.classList.remove('active'); 
                body.classList.remove('no-scroll');
                setTimeout(() => {
                    navList.style.display = 'none';
                }, 300);
            });
        });

        // Закрываем меню при клике вне его
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && nav.classList.contains('active')) {
                burger.classList.remove('active');
                navList.classList.remove('active');
                nav.classList.remove('active'); 
                body.classList.remove('no-scroll');
                setTimeout(() => {
                    navList.style.display = 'none';
                }, 300);
            }
        });

        // Обработка изменения размера окна
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navList.style.display = 'flex';
                nav.classList.remove('active');
                burger.classList.remove('active');
                body.classList.remove('no-scroll');
            } else {
                if (!nav.classList.contains('active')) {
                    navList.style.display = 'none';
                }
            }
        });
    }
}); 