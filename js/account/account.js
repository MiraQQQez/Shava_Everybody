// Утилиты для уведомлений
const notifications = {
    show(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};

// Инициализация страницы аккаунта
const AccountPage = {
    init() {
        // Инициализация основного приложения
        App.init();
        
        // Анимация чисел в статистике
        this.initStatistics();
        
        // Инициализация менеджеров
        this.initManagers();
        
        // Сохраняем состояние загрузки скрипта
        StorageManager.saveScriptState('account', 'loaded');
    },

    initStatistics() {
        const statValues = document.querySelectorAll('.stat-value');
        statValues.forEach(value => {
            const finalNumber = parseInt(value.textContent);
            let currentNumber = 0;
            const duration = 1000;
            const steps = 50;
            const increment = finalNumber / steps;
            
            const counter = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    value.textContent = finalNumber;
                    clearInterval(counter);
                } else {
                    value.textContent = Math.floor(currentNumber);
                }
            }, duration / steps);
        });
    },

    initManagers() {
        // Инициализация всех менеджеров
        [orderManager, addressManager, settingsManager].forEach(manager => {
            if (typeof manager.init === 'function') {
                manager.init();
            }
        });

        // Анимируем элементы через App.utils
        const accountElements = document.querySelectorAll('.section-card');
        accountElements.forEach((element, index) => {
            App.utils.animateElement(element, index * 100);
        });
    }
};


