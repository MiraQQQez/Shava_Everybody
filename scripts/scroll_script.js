// Отслеживаем событие прокрутки страницы
window.addEventListener("scroll", function () {
    // Получаем текущее положение прокрутки и высоту документа
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Вычисляем процент прокрутки
    var scrollPercent = (scrollTop / docHeight) * 100;

    // Устанавливаем ширину прогресс-бара
    document.querySelector(".progress-bar__fill").style.width = scrollPercent + "%";
  });