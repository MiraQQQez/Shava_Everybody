/*
 * Copyright (c) 2024 Igor Silin
 * All rights reserved.
 * Licensed under the MIT License.
 * Email: igor.silin.03@inbox.ru
 * GitHub: https://github.com/MiraQQQez
 * 
 * Digital Signature: IS-2024-SHA256-e9f2a8b5
 * Last modified: 2024-03-20
 * Version: 1.0.0
 * 
 * WARNING: This code is protected by copyright and is the intellectual property
 * of Igor Silin. Any unauthorized use, reproduction, or distribution is strictly
 * prohibited and may result in legal action.
 * 
 * NOTICE: This code is protected by copyright law and international treaties.
 * Unauthorized reproduction or distribution of this code, or any portion of it,
 * may result in severe civil and criminal penalties, and will be prosecuted
 * to the maximum extent possible under law.
*/

const App = {
    utils: {
        handleResourceError(event) {
            console.error('Ошибка загрузки ресурса:', event.target);
        },

        setupErrorHandlers() {
            document.querySelectorAll('img').forEach(img => {
                img.addEventListener('error', this.handleResourceError);
            });
        },

        animateElement(element, delay = 0) {
            if (!element) return;
            
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
            
            setTimeout(() => {
                App.observer.observe(element);
            }, delay);
        }
    },

    observer: new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const target = entry.target;
                requestAnimationFrame(() => {
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0)';
                });
                App.observer.unobserve(target);
            });
        },
        { 
            threshold: 0.1,
            rootMargin: '50px'
        }
    ),

    pageHandlers: {
        home() {
            const elements = [
                ...document.querySelectorAll('.shava_products'),
                ...document.querySelectorAll('.promotion-container'),
                ...document.querySelectorAll('.delivery-container'),
                ...document.querySelectorAll('.testimonial-container'),
                document.querySelector('.welcome-container')
            ].filter(Boolean);

            elements.forEach((element, index) => {
                App.utils.animateElement(element, index * 100);
            });
        },

        account() {
            if (typeof AccountPage !== 'undefined') {
                AccountPage.init();
            }
        }
    },

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.utils.setupErrorHandlers();
            
            const currentPage = document.body.dataset.page || 'home';
            if (this.pageHandlers[currentPage]) {
                this.pageHandlers[currentPage]();
            }
        });
    }
};

// Запускаем приложение
App.init(); 