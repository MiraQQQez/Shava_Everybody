document.addEventListener('DOMContentLoaded', function () {
    const shaurmaSection = document.querySelector('.menu-container');
    const shaurmaItems = document.querySelectorAll('.shava_products');

    // Проверяем, если секция выбора шаурмы в видимой области
    function checkVisibility() {
        const rect = shaurmaSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Если секция видима на экране
        if (rect.top < windowHeight && rect.bottom > 0) {
            shaurmaItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = 1; // Делаем элемент видимым
                    item.style.transform = 'translateY(0)'; // Сбрасываем смещение
                    item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)'; // Добавляем тень
                    item.style.filter = 'blur(0px)'; // Убираем размытие
                }, index * 200); // Задержка для каждого элемента
            });
            // Удаляем слушателя, если анимация уже выполнена
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    // Изначально скрываем элементы
    shaurmaItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)'; // Сдвигаем вниз
        item.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, filter 0.5s ease-in-out'; // Плавный переход
        item.style.boxShadow = 'none'; // Изначально тени нет
        item.style.filter = 'blur(5px)'; // Добавляем эффект размытия
    });

    // Проверка видимости при прокрутке
    window.addEventListener('scroll', checkVisibility);
    // Первоначальная проверка
    checkVisibility();

    // Эффект увеличения, вращения, градиента и изменения фона при наведении на каждый отдельный контейнер
    shaurmaItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            item.style.transition = 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'; // Плавный переход
            item.style.backgroundImage = 'linear-gradient(135deg, #ffefba, #ffc3a0)'; // Добавляем плавный градиент на фоне
            item.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.3)'; // Увеличиваем тень
        });

        item.addEventListener('mouseleave', function() {
            item.style.transform = 'scale(1) rotate(0)'; // Возвращаем к исходному размеру и убираем вращение
            item.style.backgroundImage = ''; // Возвращаем исходный фон
            item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)'; // Уменьшаем тень

        });
    });

});
