/*
 * Copyright (c) 2024 Igor Silin
 * All rights reserved.
 * Licensed under the MIT License.
 * Email: igor.silin.03@inbox.ru
 * GitHub: https://github.com/MiraQQQez
 * 
 * Digital Signature: IS-2024-SHA256-h7k9m4n2
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

// Код для работы со скроллом
window.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.progress-bar__fill');
    if (progressBar) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }
}); 