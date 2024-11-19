document.addEventListener('DOMContentLoaded', () => {
	const promotionsSection = document.querySelector('.promotions')
	const promotionContainer = promotionsSection.querySelector(
		'.promotion-container'
	)
	const promotionItems = promotionContainer.querySelectorAll('.promotion-item')

	const checkPromotionsVisibility = () => {
		const rect = promotionsSection.getBoundingClientRect()
		const windowHeight = window.innerHeight

		// Появление контейнера с акциями, только если он виден в окне просмотра
		if (rect.top < windowHeight && rect.bottom > 0) {
			promotionContainer.classList.add('promotion-visible')
			// Удаляем обработчик скролла, так как больше не нужен
			window.removeEventListener('scroll', checkPromotionsVisibility)
		}
	}

	const addHoverClass = (item, add) => {
		item.classList[add ? 'add' : 'remove']('hover')
	}

	// Комбинируем обработчики наведения на элементы через делегирование
	promotionContainer.addEventListener('mouseover', event => {
		if (event.target.classList.contains('promotion-item')) {
			addHoverClass(event.target, true)
		}
	})

	promotionContainer.addEventListener('mouseout', event => {
		if (event.target.classList.contains('promotion-item')) {
			addHoverClass(event.target, false)
		}
	})

	// Обработчик наведения для секции акций
	promotionsSection.addEventListener('mouseenter', () =>
		promotionsSection.classList.add('scale-up')
	)
	promotionsSection.addEventListener('mouseleave', () =>
		promotionsSection.classList.remove('scale-up')
	)

	// Начальная проверка видимости
	checkPromotionsVisibility()
	// Добавляем обработчик скролла
	window.addEventListener('scroll', checkPromotionsVisibility)
})
