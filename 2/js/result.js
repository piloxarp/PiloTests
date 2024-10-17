

const urlParams = new URLSearchParams(window.location.search);
const Name = urlParams.get('Name');


document.querySelector("#head_r").innerHTML = `Поздраляю ${Name}, с завершением теста. А теперь напиши своё имя своей любимой Госпоже`;
const copyButton = document.getElementById('copyButton');
const textField = document.getElementById('textField');

textField.innerHTML = Name;

// Функция для копирования текста в буфер обмена
copyButton.addEventListener('click', () => {
    copyButton.style = "color:#88edc9;border-color:#88edc9;"
    textField.style = "color:#88edc9;border-color:#88edc9;"
    const text = textField.innerText; // Получаем текст из div
    navigator.clipboard.writeText(text) // Копируем текст в буфер обмена
        .then(() => {

        })
        .catch(err => {
            console.error('Ошибка при копировании текста: ', err);
        });
});


