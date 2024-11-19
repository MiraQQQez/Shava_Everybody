document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm'); // Замените 'loginForm' на id вашей формы входа
    const loginError = document.getElementById('loginError'); // Замените 'loginError' на id элемента для вывода ошибок
  
    if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Предотвращаем стандартную отправку формы
  
        const email = loginForm.email.value; // Получаем email из формы
        const password = loginForm.password.value; // Получаем пароль из формы
  
        try {
          const response = await fetch('/api/login', { // Замените '/api/login' на адрес вашего API для входа
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
  
          if (response.ok) {
            const data = await response.json();
  
            // Обрабатываем успешный вход
            if (data.success) {
              // Сохраняем токен (если есть)
              if (data.token) {
                localStorage.setItem('token', data.token);
              }
  
              // Перенаправляем пользователя на защищенную страницу
              window.location.href = '/profile'; // Замените '/profile' на адрес вашей страницы профиля
            } else {
              // Выводим ошибку, если вход не удался
              loginError.textContent = data.message || 'Неверный логин или пароль.';
            }
          } else {
            // Обрабатываем ошибки сервера
            loginError.textContent = 'Ошибка сервера. Попробуйте позже.';
            console.error('Ошибка сервера:', response.status);
          }
        } catch (error) {
          // Обрабатываем ошибки сети
          loginError.textContent = 'Ошибка сети. Попробуйте позже.';
          console.error('Ошибка сети:', error);
        }
      });
    }
  });
  