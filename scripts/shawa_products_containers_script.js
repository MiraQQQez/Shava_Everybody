document.addEventListener('DOMContentLoaded', function () {
	const menuContainer = document.querySelector('.menu-container')
	const shaurmaItems = menuContainer.querySelectorAll('.shava_products')

	// Изначально скрываем элементы
	shaurmaItems.forEach(item => {
		item.style.opacity = 0
		item.style.transform = 'translateY(20px)'
		item.style.transition =
			'opacity 0.5s ease-in-out, transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out'
		item.style.boxShadow = 'none'
		item.style.filter = 'blur(5px)'
	})

	// Проверка видимости при прокрутке
	window.addEventListener('scroll', checkVisibility)
	// Первоначальная проверка
	checkVisibility()

	// Эффект увеличения, градиента и изменения фона при наведении на каждый отдельный контейнер
	shaurmaItems.forEach(item => {
		item.addEventListener('mouseenter', function () {
			item.style.transform = 'scale(1.1)'
			item.style.transition =
				'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
			item.style.backgroundImage = 'linear-gradient(135deg, #ffefba, #ffc3a0)'
			item.style.boxShadow = '0 5px 35px rgba(0, 0, 0, 0.3)'
		})

		item.addEventListener('mouseleave', function () {
			item.style.transform = 'scale(1)'
			item.style.backgroundImage = ''
			item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)'
		})
	})

	// Определяем пульсирующую анимацию через CSS
	const style = document.createElement('style')
	style.innerHTML = `
    @keyframes pulse {
      0% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1.15);
      }
      100% {
        transform: scale(1.1);
      }
    }
  `
	document.head.appendChild(style)

	// Функция проверки видимости
	function checkVisibility() {
		const rect = menuContainer.getBoundingClientRect()
		const windowHeight = window.innerHeight

		if (rect.top < windowHeight && rect.bottom > 0) {
			shaurmaItems.forEach((item, index) => {
				requestAnimationFrame(() => {
					item.style.opacity = 1
					item.style.transform = 'translateY(0)'
					item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)'
					item.style.filter = 'blur(0px)'
				})
			})
			window.removeEventListener('scroll', checkVisibility)
		}
	}
})
function initializeContainers() {
	const containers = document.querySelectorAll('.shava_products')

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible')
			}
		})
	})

	containers.forEach(container => {
		observer.observe(container)
	})
}

// Вызываем функцию при загрузке скрипта
initializeContainers()