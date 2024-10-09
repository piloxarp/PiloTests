/*
entry.424961275  -- иМЯ
entry.285307839  -- 1
entry.1497776537  -- 2
entry.790677504  -- 3
entry.653392676  -- 4
entry.1455238676  -5
entry.486021082  -- 6
entry.1546646250  --7
entry.1753200033 -- баллы

*/

RUS_Questions = [
    {
        question: "1.Как давно вы придерживаетесь движения #pussyfree в месяцах?",
        name:"entry.285307839",
        type: "input",
        points: (months) => {
            if (months < 0) return 0; // Нельзя вводить отрицательные значения
            const years = Math.floor(months / 12);
            return Math.min(years * 20, 200); // Максимум 200 баллов
        }
    },
    {
        question: "2.Как долго вы были в клетке в прошлом году в месяцах?",
        name:"entry.1497776537",
        type: "input",
        points: (months) => {
            if (months < 0) return 0; // Нельзя вводить отрицательные значения
            if (months === 0) return 0; // Совсем нет
            return Math.min(10 + (months * 20), 250); // Максимум 250 баллов
        }
    },
    {
        question: "3.Сколько сеансов просмотра порно BBC или BNWO вы проводите в неделю?",
        name:"entry.790677504",
        type: "input",
        points: (sessions) => {
            if (sessions <= 3) return 0; // 3 или менее сеансов
            return Math.min(50 + (sessions * 10), 300); // Максимум 300 баллов
        }
    },
    {
        question: "4.Как часто вы отбиваете свои белые шарики?",
        name:"entry.653392676",
        type: "radio",
        options: [
            { answer: "реже одного раза в месяц", points: 0 },
            { answer: "раз в месяц / раз в несколько недель", points: 50 },
            { answer: "раз в неделю", points: 100 },
            { answer: "ежедневно / через день", points: 200 }
        ]
    },
    {
        question: "5.Насколько активно вы участвуете в BNWO?",
        name:"entry.1455238676",
        type: "checkbox",
        options: [
            { answer: "только пассивный потребитель", points: 0 },
            { answer: "много комментируете и обсуждаете", points: 50 },
            { answer: "активно распространяете пропаганду", points: 100 },
            { answer: "поддержка моделей и создателей", points: 75 }
        ]
    },
    {
        question: "6.Вы... ",
        name:"entry.486021082",
        type: "checkbox",
        options: [
            { answer: "так сильно били себя по яйцам, что у вас появился синяк или пошла кровь?", points: 75 },
            { answer: "носили татуировку в стиле QoS, JoS или другую временную татуировку, связанную с BBC?", points: 50 },
            { answer: "платили за порно BBC / унижения", points: 25 },
            { answer: "намеренно кончил прямо в унитаз или мусорку, чтобы смыть свою бесполезную белую сперму", points: 75 },
            { answer: "кончали при мысли о вымирании белой расы", points: 50 },
            { answer: "желал, чтобы все женщины рожали черных", points: 50 },
            { answer: "покупал порно с унижением вайтбоев", points: 25 },
            { answer: "видел сон о своей BBC зависимости", points: 25 },
            { answer: "стонал / повторял унизительную антибелую пропаганду во время дрочки", points: 50 },
            { answer: "дрочил на фотографии знакомого человека рядом с фото BBC", points: 75 },
            { answer: "возбуждались при мысли о выплате репараций или о том, что вы принадлежите черным", points: 50 },
            { answer: "представил, что каждая девушка, которую ты встретил в жизни за день, была очернённой", points: 50 },
            { answer: "феминизировал себя для BBC", points: 50 },
            { answer: "сосал или дрочил чёрный дилдо", points: 50 },
            { answer: "трахнул себя чёрным дилдо", points: 50 },
            { answer: "сосала или трахалась с настоящим чёрным членом", points: 50 },
            { answer: "был выебан и смотрел как твоя девушка/жена принимает черный член", points: 150 },
            { answer: "вычистил кончу черного мужчины в роли куколда", points: 50 },
            { answer: "подвергся анальному сексу или получил SPH от BBC девушки в реальной жизни", points: 75 },
            { answer: "когда-либо имел обои BBC на телефоне в течение длительного периода времени", points: 50 },
            { answer: "занимались дрочкой или отбивал свои шарики на работе или на публике", points: 50 },                     
        ]
    },
    {
        question: "Отрицательные баллы",
        name:"entry.1546646250",
        type: "checkbox",
        options: [
            { answer: "пытались заняться сексом или занимались сексом с девушкой в последние 12 месяцев", points: -1000 },
            { answer: "пытались завязать с BNWO  за последние 12 месяцев", points: -500 },
        ]
    }
];

function GenerateQuestion(lang) {
    if (lang == 'ru') {
        var questionData  = RUS_Questions;
    } else {
        var questionData = ENG_Questions;
    }
    console.log(questionData);
    let questionDivs = document.querySelectorAll(".question_con");
    for (var i = 0; i < questionDivs.length; i++) {
        questionDivs[i].querySelector(".question > h2").innerHTML = questionData[i].question;
        let answerDiv = questionDivs[i].querySelector(".question > .Answer");
        if (questionData[i].type == "checkbox") {
            for (var j = 0; j < questionData[i].options.length; j++) {
                let input = document.createElement("input");
                input.setAttribute("type", "checkbox");
                input.setAttribute("class",'answerInput');
                input.setAttribute("name", `${questionData[i].name}`);
                input.setAttribute("id", `answer_${i}_${j}`);
                input.setAttribute("points", questionData[i].options[j].points);
                input.setAttribute("value", questionData[i].options[j].answer);
                answerDiv.append(input);
                let label = document.createElement("label");
                label.setAttribute("for", `answer_${i}_${j}`);
                label.innerHTML = questionData[i].options[j].answer;
                answerDiv.append(label);
            }
        } else if (questionData[i].type == "radio") {
            for (var j = 0; j < questionData[i].options.length; j++) {
                let input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("class",'answerInput');
                input.setAttribute("name", `${questionData[i].name}`);
                input.setAttribute("id", `answer_${j}_${i}`);
                input.setAttribute("points", questionData[i].options[j].points);
                input.setAttribute("value", questionData[i].options[j].answer);
                answerDiv.append(input);
                let label = document.createElement("label");
                label.setAttribute("for", `answer_${j}_${i}`);
                label.innerHTML = questionData[i].options[j].answer;
                answerDiv.append(label);
            }
            
        } else if (questionData[i].type == "input") {
            let input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("class",'answerNumber');
            input.setAttribute("pattern", "[0-9]*");
            input.setAttribute("inputmode", "numeric");
            input.setAttribute("name", `${questionData[i].name}`);
            input.setAttribute("id", `answer_${i}`);
            answerDiv.append(input);
        }
    }
}

GenerateQuestion('ru');




function updateResults() {
    const answersArray = [];

    // Обработка текстовых полей
    const pussyfreeDuration = document.querySelector('input[id="answer_0"]').value;
    if (pussyfreeDuration) {

        function MathPoints(months) {
            if (months < 0) return 0; // Нельзя вводить отрицательные значения
            const years = Math.floor(months / 12);
            return Math.min(years * 20, 200); // Максимум 200 баллов
        }

        let points = MathPoints(pussyfreeDuration);
        answersArray.push(points);
        console.log(document.querySelector("#question_0"));
        document.querySelector("#question_0").classList.add("Complited");
    }

    const cageDuration = document.querySelector('input[id="answer_1"]').value;
    if (cageDuration) {
        function MathPoints(months) {
            if (months < 0) return 0; // Нельзя вводить отрицательные значения
            return Math.min(10 + (months * 20), 250); // Максимум 250 баллов
        }        
        let points = MathPoints(cageDuration);
        answersArray.push(points);
        
    }

    const pornSessions = document.querySelector('input[id="answer_2"]').value;
    if (pornSessions) {
        function MathPoints(sessions) {
            if (sessions <= 3) return 0; // 3 или менее сеансов
            return Math.min(50 + (sessions * 10), 300); // Максимум 300 баллов
        }   
        let points = MathPoints(pornSessions);        
        answersArray.push(points);
    }

    // Обработка радио-кнопок
    const whiteBalls = document.querySelector('input[id="answer_3"]:checked');
    if (whiteBalls) {
        answersArray.push(parseInt(whiteBalls.getAttribute('points')));
    }

    // Обработка чекбоксов
    document.querySelectorAll('input[id^="answer_4_"]:checked').forEach((checkbox) => {
        answersArray.push(parseInt(checkbox.getAttribute('points')));
    });

    document.querySelectorAll('input[id^="answer_5_"]:checked').forEach((checkbox) => {
        answersArray.push(parseInt(checkbox.getAttribute('points')));
    });

    document.querySelectorAll('input[id^="answer_6_"]:checked').forEach((checkbox) => {
        answersArray.push(parseInt(checkbox.getAttribute('points')));
    });

    // Вывод результатов
    console.log(answersArray);
    // Вывод суммы
    const sum = answersArray.reduce((a, b) => a + b, 0);
    console.log(sum);
    document.querySelector("input[id='entry.1753200033']").value = sum;
    document.querySelector(".points").innerHTML = sum;
}

// Добавляем обработчики событий для всех полей ввода
document.querySelectorAll('input[type="number"], input[type="radio"], input[type="checkbox"]').forEach(input => {
    input.addEventListener('input', updateResults);
});


// Обработчик события для кнопки "Отправить"
document.querySelector('input[type="submit"]').addEventListener('click', function() {
    document.querySelector('input[type="submit"]').setAttribute("style","opacity:0;");
    setTimeout(submitAction,1000);

}); 


function submitAction() {
    window.location.href = "results.html?points=" + document.querySelector(".points").innerHTML;
}