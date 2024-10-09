const result_text = [
    {head:"Расист",point:200,text:`
Скажем прямо: если вы набрали меньше **200 баллов**, значит, вы **расист** по отношению к **BNWO**, который думал, что сможет вернуться, думал, что сможет спастись от своей з**ависимости от BBC** или пытался разочаровать бедную женщину. ***Как вам не стыдно!*** Вам нужно немедленно начать работать над основами. Поднимите эти цифры в **вопросах с 1 по 5**, а затем поставьте себе конкретные цели, начиная с **вопроса 6**.
---
[Видео для Перевоспитания]

[Видео для Перевоспитания]: https://drive.google.com/file/d/1VyWaWUkhNq03zurZM2vV4t9-XQgV_lHJ/view?usp=sharing
`},       
    {head:"Новичок",point:500,text:`
## Вероятно, вы относительно новичок или еще не погрузились глубоко в **BNWO** и **pussyfree-dom**. Вам предстоит проделать огромную работу! Но не волнуйтесь, у вас все получится, просто продолжайте углубляться в кроличью нору, ежедневно заходите на соответствующие ресурсы на **Reddit** и **Telegram**, и вы наберете больше ***1000 очков*** раньше, чем думаете. **Разве ты не хочешь выплатить свои репарации, Вайтбой?**
    `},    
    {head:"Раб Чёрных хозяев",point:1000,text:`
## Рабы составляют большую часть белых мальчиков в **BNWO**. Вы забрались довольно глубоко и справляетесь, но могли бы делать это гораздо лучше, и вы это знаете. Вы находитесь в точке невозврата, просто сделайте еще один шаг в наш рай. Станьте навсегда **зависимым от BBC!**
    `},    
    {head:"Истинный верующий",point:1500,text:`
## Ты - главный представитель **BNWO**! Истинный верующий, который занимается этим не только ради собственного сексуального удовлетворения. Вы активно **боретесь за дело**, даже когда не возбуждены. Вы полностью смирились со своей **неполноценностью** и с тем, что пути назад для вас нет. Вопрос в том, счастливы ли вы как **истинный верующий** или хотите пойти дальше и вдохновить других?
    `},    
    {head:"Проповедник",point:2100,text:`
## Вы не просто следуете, у вас есть последователи, и вы вдохновляете других на совершенствование. Ты проповедуешь непросвещенным массам белых парней и показываешь им пути **BNWO**. Смиренный поклонник наших черных богов, который отдает **дань уважения**, **служа им**, **придерживаясь целомудрия**, **полной свободы от кисок** и ритуально наказывая свои **белые грешные яйца.**
    `},
    {head:"Пророк",point:2150,text:`
## Вы стоите на вершине горы и смотрите вниз на всех белых мальчиков, которые еще не нашли свой путь и ищут у вас руководства. Все, что вы чувствуете, - это желание помочь им. Как проводник вдохновенного слова, которым вы являетесь, вы делаете шаг вперед и учите их заповедям **BNWO**:
  1. У тебя не должно быть других господ, кроме **BBC**
  2. Ты должен всегда поклоняться своим **черным хозяинам**.
  3. Ты должен запереть свой белый членик в клетку
  4. Ты должен платить репарации
  5. Ты должен способствовать **вымиранию белых**
  6. Ты не должен заниматься сексом с любой девушкой.
  7. Ты не должен останавливаться в своей зависимости
  8. Ты не должен испытывать ничего, кроме **разрушенных оргазмов**
  9. Ты не должен распространять свои **никчемные белые гены**
    `},
]

const urlParams = new URLSearchParams(window.location.search);
const points = urlParams.get('points');

if (points <= 200) {
    document.querySelector("#result_Points").innerHTML = `Жалкий Вайтбой, ты набрал всего лишь ${points} баллов. Тебя срочно нужно перевоспитать!`;
} else {
    document.querySelector("#result_Points").innerHTML = `Поздравляю Вайтбой ты набрал ${points} баллов!`;
}

// Находим соответствующий элемент
const result = result_text.find(item => points <= item.point);

if (result) {
    console.log(`Заголовок: ${result.head}, Очки: ${result.point}`);
    document.querySelector("#head_r").innerHTML = result.head;
    document.querySelector("#text_r").innerHTML = marked.parse(result.text);;    
} else {
    console.log("Нет соответствующего результата."); 
    document.querySelector("#head_r").innerHTML = result_text[5].head;
    document.querySelector("#text_r").innerHTML = marked.parse(result_text[5].text);;
}




const spreadsheetId = '19UYH3cgE3GWfdsoaR5-n3SBJ6UwGYt8RUA8h_3rkJig'; // Замените на свой ID
const range = 'Ответы на форму (1)!I1:J'; // Замените на нужный диапазон
const apiKey = 'AIzaSyD9jKehKEXmo-fbff2EHEx3hNTbMTjywME'; // Замените на свой API ключ

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const headers = data.values[0];
        const rows = data.values.slice(1);

        // Создаем контейнер для данных
        const container = document.createElement('div');
        container.className = 'table';

        // Заполняем заголовки
        const headerDiv = document.createElement('div');
        headerDiv.className = 'header';
        headers.forEach(header => {
            const headerItem = document.createElement('div');
            headerItem.className = 'header-item';
            headerItem.textContent = header;
            headerDiv.appendChild(headerItem);
        });
        container.appendChild(headerDiv);

        // Заполняем строки данных
        rows.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            row.forEach(cell => {
                const cellDiv = document.createElement('div');
                cellDiv.className = 'cell';
                cellDiv.textContent = cell;
                rowDiv.appendChild(cellDiv);
            });
            container.appendChild(rowDiv);
        });

        // Добавляем контейнер на страницу
        document.body.appendChild(container);
    })
    .catch(error => console.error('Ошибка:', error));

