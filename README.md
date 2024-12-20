/*
 * Copyright (c) 2024 Igor Silin
 * All rights reserved.
 * Licensed under the MIT License.
 */

# Shava Everybody - Веб-сайт доставки шаурмы

## Описание проекта
Адаптивный веб-сайт для сервиса доставки шаурмы "Shava Everybody". Сайт включает главную страницу с меню, информацией о компании, отзывами и контактами.

## Структура проекта 
shava-everybody/
├── assets/
│ ├── images/
│ │ ├── backgrounds/
│ │ ├── logos/
│ │ └── products/
├── vendor/
│ ├── css/
│ │ ├── core/
│ │ │ ├── normalize.css
│ │ │ ├── fonts.css
│ │ │ ├── style.css
│ │ │ └── adaptive.css
│ │ └── layouts/
│ │ ├── header.css
│ │ ├── navigation.css
│ │ ├── sections.css
│ │ ├── footer.css
│ │ └── progress-bar.css
├── js/
│ ├── core/
│ │ ├── main.js
│ │ ├── burger-menu.js
│ │ └── cookie_local_storage.js
│ └── utils/
│ ├── redirect.js
│ └── scroll.js
└── index.html


## Технологии
- HTML5
- CSS3 (с использованием Flexbox и Grid)
- JavaScript (ES6+)
- Font Awesome для иконок
- Google Fonts (Ruslan Display)

## Основные компоненты

### HTML структура
- Семантическая разметка
- Адаптивные изображения с lazy loading
- Модульная структура секций

### CSS архитектура
1. **Core стили:**
   - normalize.css - нормализация стилей
   - fonts.css - подключение и настройка шрифтов
   - style.css - базовые стили
   - adaptive.css - адаптивные стили

2. **Layout стили:**
   - header.css - стили шапки сайта
   - navigation.css - стили навигации
   - sections.css - стили секций контента
   - footer.css - стили подвала
   - progress-bar.css - стили прогресс-бара

### JavaScript функционал
1. **Core функционал:**
   - main.js - основной функционал
   - burger-menu.js - логика мобильного меню
   - cookie_local_storage.js - работа с хранилищем

2. **Утилиты:**
   - redirect.js - функции перенаправления
   - scroll.js - обработка прокрутки

## Адаптивность
Сайт адаптирован под следующие разрешения:
- Desktop (1440px+)
- Laptop (1024px)
- Tablet (768px)
- Mobile (320px)

### Брейкпоинты
css
/ Large Desktop /
@media screen and (max-width: 1440px) { ... }
/ Desktop /
@media screen and (max-width: 1024px) { ... }
/ Tablet /
@media screen and (max-width: 768px) { ... }


## Особенности реализации

### Меню продуктов
- Grid-система для расположения карточек
- Адаптивные изображения
- Hover-эффекты
- Градиентные фоны
- Анимации при наведении

### Навигация
- Фиксированная шапка
- Бургер-меню для мобильных устройств
- Плавные анимации переходов
- Активные состояния пунктов меню

### Визуальные эффекты
- Градиентные фоны
- Тени
- Анимации при наведении
- Плавные переходы
- Декоративные элементы

## Установка и запуск
1. Клонировать репозиторий
2. Открыть index.html в браузере

## Рекомендации по доработке
1. Добавить серверную часть
2. Реализовать корзину покупок
3. Добавить систему авторизации
4. Интегрировать систему оплаты
5. Добавить админ-панель
6. Оптимизировать изображения
7. Добавить кэширование

## Авторы
- Frontend Developer: [Игорь Силин]
- Designer: [Игорь Силин]

## Авторские права
© 2024 Igor Silin. Все права защищены.

Этот проект является интеллектуальной собственностью Игоря Силина. 
Несанкционированное использование, копирование или распространение материалов 
без письменного разрешения автора запрещено.

Контакты для связи:
- Email: [igor.silin.03@inbox.ru]
- GitHub: [https://github.com/MiraQQQez]
- Website: [ваш сайт]

## Лицензия
MIT License

Copyright (c) 2024 Igor Silin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Shava Everybody

Современный адаптивный веб-сайт для сервиса доставки шаурмы.

## Лицензирование и использование

### Базовая коммерческая лицензия (50,000₽)
Включает:
- Право использования кода на одном коммерческом проекте
- Техническая поддержка в течение 1 месяца
- Базовая документация по развертыванию
- Возможность вносить изменения для собственных нужд

#### Ограничения базовой лицензии:
- Запрет на перепродажу кода
- Запрет на удаление копирайтов и авторства
- Использование только на одном домене
- Запрет на распространение исходного кода

### Для приобретения:
- Email: igor.silin.03@inbox.ru
- GitHub: https://github.com/MiraQQQez
- Телефон: +7 (968) 801-28-70

## Технологии
- HTML5/CSS3
- JavaScript
- Cypress для тестирования
- Адаптивный дизайн
- Современные анимации

## Функционал
- Главная страница с меню
- Личный кабинет пользователя
- Адаптивная навигация
- Анимированные элементы
- Корзина заказов
- Тестовое покрытие

## Установка и запуск
1. Клонировать репозиторий
2. Установить зависимости: `npm install`
3. Запустить тесты: `npm test`
4. Открыть index.html в браузере

## Автор
Igor Silin
- Email: igor.silin.03@inbox.ru
- GitHub: https://github.com/MiraQQQez

## Защита прав
Проект защищен авторским правом. Все права защищены.
Цифровая подпись: IS-2024-SHA256

