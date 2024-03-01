document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const emailInput = document.querySelector('.email-input');
        const errorText = document.querySelector('.error-text');

        // Получение значения из поля ввода
        const email = emailInput.value.trim().toLowerCase();

        // Проверка правильности написания слов
        const isValid = checkSpelling(email);

        if (isValid) {
            // Если написание верное, отправить форму
            this.submit();
            alert('Слово написано правильно');

        } else {
            // Если написание неверное, вывести сообщение об ошибке
            alert('Неправильное написание слова. Пожалуйста, исправьте.');
            emailInput.classList.add('_error');
            errorText.classList.add('_active');
        }
    });
});

function checkSpelling(email) {
    // Список слов для проверки
    const wordsToCheck = ['однофазный', 'трехфазный'];


    // Проверка наличия хотя бы одного из слов в строке
    return wordsToCheck.some(word => email.includes(word));
}
