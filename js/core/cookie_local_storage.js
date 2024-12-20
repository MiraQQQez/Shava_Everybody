/*
 * Copyright (c) 2024 Igor Silin
 * All rights reserved.
 * Licensed under the MIT License.
 * Email: igor.silin.03@inbox.ru
 * GitHub: https://github.com/MiraQQQez
 * 
 * Digital Signature: IS-2024-SHA256-j4l7n9q2
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

// Оптимизированные функции для работы с cookie и localStorage
const StorageManager = {
    // Cookie функции
    setCookie(name, value, days) {
        const expires = days 
            ? `; expires=${new Date(Date.now() + days * 864e5).toUTCString()}`
            : '';
        document.cookie = `${name}=${value || ''}${expires}; path=/`;
    },

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        return parts.length === 2 ? parts.pop().split(';').shift() : null;
    },

    // LocalStorage функции с проверкой доступности
    isLocalStorageAvailable() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch (e) {
            return false;
        }
    },

    // Сохранение состояния загрузки скриптов
    saveScriptState(scriptName, state) {
        if (this.isLocalStorageAvailable()) {
            localStorage.setItem(`script_${scriptName}`, state);
        } else {
            this.setCookie(`script_${scriptName}`, state, 1);
        }
    },

    // Проверка состояния загрузки скрипта
    getScriptState(scriptName) {
        if (this.isLocalStorageAvailable()) {
            return localStorage.getItem(`script_${scriptName}`);
        }
        return this.getCookie(`script_${scriptName}`);
    }
};

// Экспортируем для использования в других скриптах
window.StorageManager = StorageManager;