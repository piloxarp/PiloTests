/*
Вопрос 1 - entry.1346297172  
Вопрос 2 - entry.1902182419  
Вопрос 3 - entry.1074826762  
Вопрос 4 - entry.2092194099  
Вопрос 5 - entry.865992088  
Вопрос 6 - entry.1059174449  
Вопрос 7 - entry.779607307  
Вопрос 8 - entry.293982877  
Вопрос 9 - entry.571735854  
Вопрос 10 - entry.632643112  
Вопрос 11 - entry.2014093261  
Вопрос 12 - entry.2131716493  
Вопрос 13 - entry.1368945209  
Вопрос 14 - entry.814021041  
Вопрос 15 - entry.1179428408  
Nick - entry.1429500737

*/

document.addEventListener("DOMContentLoaded", function() {
  // Проверяем, существует ли элемент в localStorage
if (localStorage.getItem('KrisVoice') === null) {
  // Если не существует, устанавливаем его значение
  localStorage.setItem('KrisVoice', 0);
  console.log('Элемент KrisVoice был создан и установлен в 0.');
} else {
  console.log('Элемент KrisVoice уже существует:', localStorage.getItem('KrisVoice'));
}
  let krischeck = localStorage.getItem("KrisVoice"); console.log(krischeck)
  if (localStorage.getItem('KrisVoice') == 1) {
    document.querySelector('.preview_audiofile').remove();
  }
});

RUS_Questions = [

        {
          "question": "1. Какой размер члена должен быть у бетки чтобы он был обязан закрыть его в клетку?",
          "name": "entry.1346297172",
          "type": "input"
        },
        {
          "question": "2. Как часто бета может кончать?",
          "name": "entry.1902182419",
          "type": "input"
        },
        {
          "question": "3. Какими способами бета может кончать?",
          "name": "entry.1074826762",
          "type": "input",
        },
        {
          "question": "4. Что бета обязан сделать после того, как он кончил?",
          "name": "entry.2092194099",
          "type": "input"
        },
        {
          "question": "5. В чем смысл существования беты?",
          "name": "entry.865992088",
          "type": "input"
        },
        {
          "question": "6. Какие игрушки должны быть у правильного бетки?",
          "name": "entry.1059174449",
          "type": "input",
        },
        {
          "question": "7. Чем бета отличается от сисси?",
          "name": "entry.779607307",
          "type": "input"
        },
        {
          "question": "8. Должен ли бета становиться сисси?",
          "name": "entry.293982877",
          "type": "input"
        },
        {
          "question": "9. Для чего бетке нужны его яйца?",
          "name": "entry.571735854",
          "type": "input"
        },
        {
          "question": "10. Что бета думает о черных мужчинах?",
          "name": "entry.632643112",
          "type": "input"
        },
        {
          "question": "11. Как бета должен себя вести в присутствии госпожи?",
          "name": "entry.2014093261",
          "type": "input"
        },
        {
          "question": "12. Может ли у бетки быть девушка/жена?",
          "name": "entry.2131716493",
          "type": "input"
        },
        {
          "question": "13. Какие различия между бетой и куколдом?",
          "name": "entry.1368945209",
          "type": "input"
        },
        {
          "question": "14. На что бета обязан тратить всю свою зарплату?",
          "name": "entry.814021041",
          "type": "input"
        },
        {
          "question": "15. Может ли бета прикасаться к девушкам?",
          "name": "entry.1179428408",
          "type": "input"
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
            
        } else if (questionData[i].type == "numbers") {
            let input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("class",'answerNumber');
            input.setAttribute("pattern", "[0-9]*");
            input.setAttribute("inputmode", "numeric");
            input.setAttribute("name", `${questionData[i].name}`);
            input.setAttribute("id", `answer_${i}`);
            answerDiv.append(input);
        } else if (questionData[i].type == "input") {
            let input = document.createElement("textarea");
            input.setAttribute("type", "text");
            input.setAttribute("class",'answerNumber');
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
    let name = document.querySelector("#name").value;
    window.location.href = "results.html?Name=" + name; 
}

const audio = document.getElementById('audioFile');
const progressBar = document.getElementById('progressBar');
const previewDiv = document.querySelector('.preview_audiofile');

// Функция для обновления прогресс-бара
function updateProgressBar() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.value = percentage;
}

// Функция для воспроизведения аудио и удаления div
function playAudioAndRemoveDiv() {
    if (previewDiv) {
        audio.play(); // Начинаем воспроизведение аудио
        document.querySelector("#casette").setAttribute("class","zoom_out");
        // Обновляем прогресс-бар каждую секунду
        audio.addEventListener('timeupdate', updateProgressBar);

        // Удаляем div после завершения воспроизведения
        audio.onended = function() {
            previewDiv.remove(); // Удаляем div
            localStorage.setItem("KrisVoice",1);
        };
    }
}

// Обработчик события для изменения времени аудио при перемещении ползунка
progressBar.addEventListener('input', function() {
    const newTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});

