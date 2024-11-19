document.addEventListener('DOMContentLoaded', function () {
	const testimonialContainer = document.querySelector('.testimonial-container')

	// Изначально скрываем контейнер с акциями
	testimonialContainer.style.opacity = '0'
	testimonialContainer.style.transform = 'translateY(20px)'
	testimonialContainer.style.filter = 'blur(10px)' // Эффект размытия до появления

	// Показываем секцию с акциями через 500 мс после загрузки страницы
	requestAnimationFrame(function () {
		testimonialContainer.style.transition =
			'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out'
		testimonialContainer.style.opacity = '1'
		testimonialContainer.style.transform = 'translateY(0)'
		testimonialContainer.style.filter = 'blur(0)' // Убираем размытие
	})

	// Эффекты наведения для каждого элемента акции
	document.querySelectorAll('.testimonial-item').forEach(item => {
		const rectangle = document.createElement('div')
		rectangle.className = 'rectangle-animation'
		item.appendChild(rectangle)

		// Изначально скрываем элементы
		item.style.opacity = '0'
		item.style.transform = 'translateY(20px)'
		item.style.filter = 'blur(10px)' // Размытие до появления

		requestAnimationFrame(function () {
			item.style.transition =
				'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out'
			item.style.opacity = '1'
			item.style.transform = 'translateY(0)'
			item.style.filter = 'blur(0)' // Убираем размытие
		})

		// Анимация прямоугольника при наведении
		item.addEventListener('mouseenter', function () {
			rectangle.style.transform = 'scale(1)'
			rectangle.style.opacity = '1'
			item.style.transform = 'translateZ(0) scale(1.05)'
		})

		item.addEventListener('mouseleave', function () {
			rectangle.style.transform = 'scale(0)'
			rectangle.style.opacity = '0'
			item.style.transform = 'translateZ(0) scale(1)'
		})
	})

	// Анимация для всего testimonial-container при наведении
	testimonialContainer.addEventListener('mouseenter', function () {
		testimonialContainer.style.transition = 'transform 0.5s ease-in-out'
		testimonialContainer.style.transform = 'translateZ(0) scale(1.05)'
	})

	testimonialContainer.addEventListener('mouseleave', function () {
		testimonialContainer.style.transform = 'translateZ(0) scale(1)'
	})
})
