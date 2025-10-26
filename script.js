// Получаем элементы DOM
const alertButton = document.getElementById('alertButton');
const colorChangeButton = document.getElementById('colorChangeButton');
const dataForm = document.getElementById('dataForm');

// Шаг 3: Функция для вызова alert
alertButton.addEventListener('click', () => {
    alert("Hello js!");
});

// Шаг 4: Изменение цвета фона
colorChangeButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Шаг 6: Отправка данных с формой через Fetch API
dataForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Получаем введённые пользователем данные
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    // Проверка валидности данных (простая проверка)
    if (!username || !email) {
        return alert('Заполните все поля!');
    }

    // Объект данных для отправки
    const data = {
        username,
        email
    };

    try {
        // Отправляем POST-запрос на сервер
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const result = await response.json();
        alert('Данные успешно отправлены!');
        console.log(result); // Для проверки результата в консоли браузера
    } catch (error) {
        console.error('Ошибка:', error.message);
        alert('Возникла ошибка при отправке данных.');
    }
});