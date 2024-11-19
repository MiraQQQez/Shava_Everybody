document.addEventListener('DOMContentLoaded', async () => {
    const scriptsCode = {
        redirect: `
            function redirectTo(url) {
                window.location.href = url;
            }
            
            document.querySelectorAll('[onclick^="redirectTo"]').forEach(element => {
                const url = element.getAttribute('onclick').match(/'([^']+)'/)[1];
                element.onclick = () => redirectTo(url);
            });
        `,
        scroll: `
            window.addEventListener('scroll', function () {
                const progressBar = document.querySelector('.progress-bar__fill');
                if (progressBar) {
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrollPercent = (scrollTop / docHeight) * 100;
                    progressBar.style.width = scrollPercent + '%';
                }
            });
        `,
        products: `
            function initializeProducts() {
                const containers = document.querySelectorAll('.shava_products');
                if (containers.length > 0) {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                entry.target.style.opacity = '1';
                                entry.target.style.transform = 'translateY(0)';
                                entry.target.style.filter = 'blur(0)';
                            }
                        });
                    });

                    containers.forEach(container => {
                        container.style.opacity = '0';
                        container.style.transform = 'translateY(20px)';
                        container.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
                        container.style.filter = 'blur(5px)';
                        observer.observe(container);
                    });
                }
            }
            initializeProducts();
        `,
        testimonial: `
            const testimonialContainer = document.querySelector('.testimonial-container');
            if (testimonialContainer) {
                testimonialContainer.style.opacity = '0';
                testimonialContainer.style.transform = 'translateY(20px)';
                testimonialContainer.style.filter = 'blur(10px)';

                requestAnimationFrame(function () {
                    testimonialContainer.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out';
                    testimonialContainer.style.opacity = '1';
                    testimonialContainer.style.transform = 'translateY(0)';
                    testimonialContainer.style.filter = 'blur(0)';
                });

                document.querySelectorAll('.testimonial-item').forEach(item => {
                    const rectangle = document.createElement('div');
                    rectangle.className = 'rectangle-animation';
                    item.appendChild(rectangle);

                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    item.style.filter = 'blur(10px)';

                    requestAnimationFrame(function () {
                        item.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        item.style.filter = 'blur(0)';
                    });

                    item.addEventListener('mouseenter', function () {
                        rectangle.style.transform = 'scale(1)';
                        rectangle.style.opacity = '1';
                        item.style.transform = 'translateZ(0) scale(1.05)';
                    });

                    item.addEventListener('mouseleave', function () {
                        rectangle.style.transform = 'scale(0)';
                        rectangle.style.opacity = '0';
                        item.style.transform = 'translateZ(0) scale(1)';
                    });
                });
            }
        `,
        promotion: `
            const promotionsSection = document.querySelector('.promotions');
            if (promotionsSection) {
                const promotionContainer = promotionsSection.querySelector('.promotion-container');
                const promotionItems = promotionContainer.querySelectorAll('.promotion-item');

                const checkPromotionsVisibility = () => {
                    const rect = promotionsSection.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    if (rect.top < windowHeight && rect.bottom > 0) {
                        promotionContainer.classList.add('promotion-visible');
                        window.removeEventListener('scroll', checkPromotionsVisibility);
                    }
                };

                promotionContainer.addEventListener('mouseover', event => {
                    if (event.target.classList.contains('promotion-item')) {
                        event.target.classList.add('hover');
                    }
                });

                promotionContainer.addEventListener('mouseout', event => {
                    if (event.target.classList.contains('promotion-item')) {
                        event.target.classList.remove('hover');
                    }
                });

                promotionsSection.addEventListener('mouseenter', () => 
                    promotionsSection.classList.add('scale-up')
                );
                
                promotionsSection.addEventListener('mouseleave', () => 
                    promotionsSection.classList.remove('scale-up')
                );

                checkPromotionsVisibility();
                window.addEventListener('scroll', checkPromotionsVisibility);
            }
        `,
        about: `
            const aboutUsSection = document.querySelector('.about-us');
            if (aboutUsSection) {
                const aboutItems = document.querySelectorAll('.about-us li');

                aboutUsSection.classList.add('hidden');
                aboutItems.forEach(item => item.classList.add('hidden'));

                function checkVisibility() {
                    const rect = aboutUsSection.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    if (rect.top < windowHeight && rect.bottom > 0) {
                        aboutItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.remove('hidden');
                            }, index * 200);
                        });
                        window.removeEventListener('scroll', checkVisibility);
                    }
                }

                setTimeout(() => {
                    aboutUsSection.classList.remove('hidden');
                    aboutUsSection.style.opacity = 1;
                    aboutUsSection.style.transform = 'translateY(0)';
                }, 500);

                window.addEventListener('scroll', checkVisibility);
                checkVisibility();

                aboutUsSection.addEventListener('mouseenter', function () {
                    aboutUsSection.style.transform = 'scale(1.05)';
                    aboutUsSection.style.transition = 'transform 0.3s ease-in-out';
                });

                aboutUsSection.addEventListener('mouseleave', function () {
                    aboutUsSection.style.transform = 'scale(1)';
                });
            }
        `
    };

    const allScripts = [
        'redirect',
        'scroll',
        'products',
        'about',
        'testimonial',
        'promotion'
    ];

    const executeScript = scriptCode => {
        const script = document.createElement('script');
        script.textContent = scriptCode;
        document.body.appendChild(script);
    };

    try {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        console.log('Текущая страница:', currentPage);

        allScripts.forEach(scriptKey => {
            if (scriptsCode[scriptKey]) {
                executeScript(scriptsCode[scriptKey]);
                console.log(`Загружен скрипт: ${scriptKey}`);
            }
        });

        console.log('Все скрипты загружены успешно');
    } catch (error) {
        console.error('Ошибка при загрузке скриптов:', error);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const testimonialContainer = document.querySelector('.testimonial-container');
    if (testimonialContainer) {
        testimonialContainer.style.opacity = '0';
        testimonialContainer.style.transform = 'translateY(20px)';
        testimonialContainer.style.filter = 'blur(10px)';

        requestAnimationFrame(function () {
            testimonialContainer.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out';
            testimonialContainer.style.opacity = '1';
            testimonialContainer.style.transform = 'translateY(0)';
            testimonialContainer.style.filter = 'blur(0)';
        });

        document.querySelectorAll('.testimonial-item').forEach(item => {
            const rectangle = document.createElement('div');
            rectangle.className = 'rectangle-animation';
            item.appendChild(rectangle);

            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.filter = 'blur(10px)';

            requestAnimationFrame(function () {
                item.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.filter = 'blur(0)';
            });

            item.addEventListener('mouseenter', function () {
                rectangle.style.transform = 'scale(1)';
                rectangle.style.opacity = '1';
                item.style.transform = 'translateZ(0) scale(1.05)';
            });

            item.addEventListener('mouseleave', function () {
                rectangle.style.transform = 'scale(0)';
                rectangle.style.opacity = '0';
                item.style.transform = 'translateZ(0) scale(1)';
            });
        });

        testimonialContainer.addEventListener('mouseenter', function () {
            testimonialContainer.style.transition = 'transform 0.5s ease-in-out';
            testimonialContainer.style.transform = 'translateZ(0) scale(1.05)';
        });

        testimonialContainer.addEventListener('mouseleave', function () {
            testimonialContainer.style.transform = 'translateZ(0) scale(1)';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const promotionsSection = document.querySelector('.promotions');
    if (promotionsSection) {
        const promotionContainer = promotionsSection.querySelector('.promotion-container');
        const promotionItems = promotionContainer.querySelectorAll('.promotion-item');

        const checkPromotionsVisibility = () => {
            const rect = promotionsSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                promotionContainer.classList.add('promotion-visible');
                window.removeEventListener('scroll', checkPromotionsVisibility);
            }
        };

        promotionContainer.addEventListener('mouseover', event => {
            if (event.target.classList.contains('promotion-item')) {
                event.target.classList.add('hover');
            }
        });

        promotionContainer.addEventListener('mouseout', event => {
            if (event.target.classList.contains('promotion-item')) {
                event.target.classList.remove('hover');
            }
        });

        promotionsSection.addEventListener('mouseenter', () =>
            promotionsSection.classList.add('scale-up')
        );

        promotionsSection.addEventListener('mouseleave', () =>
            promotionsSection.classList.remove('scale-up')
        );

        checkPromotionsVisibility();
        window.addEventListener('scroll', checkPromotionsVisibility);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutUsSection = document.querySelector('.about-us');
    if (aboutUsSection) {
        const aboutItems = document.querySelectorAll('.about-us li');

        aboutUsSection.classList.add('hidden');
        aboutItems.forEach(item => item.classList.add('hidden'));

        function checkVisibility() {
            const rect = aboutUsSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                aboutItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.remove('hidden');
                    }, index * 200);
                });
                window.removeEventListener('scroll', checkVisibility);
            }
        }

        setTimeout(() => {
            aboutUsSection.classList.remove('hidden');
            aboutUsSection.style.opacity = 1;
            aboutUsSection.style.transform = 'translateY(0)';
        }, 500);

        window.addEventListener('scroll', checkVisibility);
        checkVisibility();

        aboutUsSection.addEventListener('mouseenter', function () {
            aboutUsSection.style.transform = 'scale(1.05)';
            aboutUsSection.style.transition = 'transform 0.3s ease-in-out';
        });

        aboutUsSection.addEventListener('mouseleave', function () {
            aboutUsSection.style.transform = 'scale(1)';
        });
    }
}); 