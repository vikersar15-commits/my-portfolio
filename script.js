// Находим кнопку по её ID
const themeButton = document.getElementById('theme-btn');

// Навешиваем событие клика
themeButton.addEventListener('click', () => {
    // Переключаем класс dark-theme у тега body
    document.body.classList.toggle('dark-theme');
});
