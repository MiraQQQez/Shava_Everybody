document.addEventListener('DOMContentLoaded', function () {
	const aboutUsSection = document.querySelector('.about-us')
	const aboutItems = document.querySelectorAll('.about-us li')

	// Изначально скрываем секцию и элементы
	aboutUsSection.classList.add('hidden')
	aboutItems.forEach(item => item.classList.add('hidden'))

	// Функция для проверки видимости секции "О нас"
	function checkVisibility() {
		const rect = aboutUsSection.getBoundingClientRect()
		const windowHeight = window.innerHeight

		// Если секция видима на экране
		if (rect.top < windowHeight && rect.bottom > 0) {
			aboutItems.forEach((item, index) => {
				setTimeout(() => {
					item.classList.remove('hidden')
				}, index * 200) // Задержка для каждого элемента
			})
			// Удаляем слушателя после того, как анимация выполнена
			window.removeEventListener('scroll', checkVisibility)
		}
	}

	// Показываем секцию с задержкой после загрузки страницы
	setTimeout(() => {
		aboutUsSection.classList.remove('hidden')
		aboutUsSection.style.opacity = 1
		aboutUsSection.style.transform = 'translateY(0)'
	}, 500) // Задержка 500 мс для плавного появления секции

	// Проверка видимости при прокрутке
	window.addEventListener('scroll', checkVisibility)

	// Эффект увеличения при наведении
	aboutUsSection.addEventListener('mouseenter', function () {
		aboutUsSection.style.transform = 'scale(1.05)'
		aboutUsSection.style.transition = 'transform 0.3s ease-in-out'
	})

	aboutUsSection.addEventListener('mouseleave', function () {
		aboutUsSection.style.transform = 'scale(1)'
	})
})
