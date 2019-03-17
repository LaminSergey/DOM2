function builtQuestions () {
    var text = 'Вопрос на ' + this.prize + ' рублей:' + '\n' + '\n' + this.text;
    for(var i = 0; i < this.options.length; i++) {
        text = text + '\n' + (i + 1) + ') ' + this.options[i];
    }
    if(this.fixed) {
        text = text + '\n' + "Вопрос на НЕСГОРАЕМУЮ СУММУ";
    }
    return text
}

var questions = [
    { 
        text: 'Что можно увидеть закрытыми глазами?',
        options: ['Сон','Луна','Снег','Пепел'],
        correct: 0,
        prize: 100,   
        fixed: false, 
        getText: builtQuestions,
    },
    { 
        text: 'Какой конь не ест овса?',
        options: ['Анарексичный','Хищный','Тупой','Шахматный'],
        correct: 3,
        prize: 500,   
        fixed: false,
        getText: builtQuestions,
    },
    { 
        text: 'Какой болезнью не болеют на суше?',
        options: ['Венерической','Морской','Космической','Выдуманной'],
        correct: 1,
        prize: 1000,   
        fixed: false,
        getText: builtQuestions,
    },
    { 
        text: 'Как звали главного хобита?',
        options: ['Сэм','Бильбо','Фродо','Голум'],
        correct: 2,
        prize: 5000,   
        fixed: true,
        getText: builtQuestions,
    },
    { 
        text: 'Спецназ в метро 2033?',
        options: ['Омон','Луна','Спарта','Барс'],
        correct: 2,
        prize: 50000,   
        fixed: false,
        getText: builtQuestions,
    },
    { 
        text: 'Сколько лет Моисей бродил по пустыни?',
        options: ['40','35','45','10'],
        correct: 0,
        prize: 100000,   
        fixed: true,
        getText: builtQuestions,
    },
    { 
        text: 'Сколько белков нужно есть есть на кг веса?',
        options: ['1г','2г','3г','4г'],
        correct: 1,
        prize: 500000,   
        fixed: false,
        getText: builtQuestions,
    },
    { 
        text: 'Название наркотика?',
        options: ['Соль','Сахар','Лаврушка','Корница'],
        correct: 0,
        prize: 1000000,   
        fixed: true,
        getText: builtQuestions,
    }
];

var $history = document.getElementById('history')




var prize = 0;
for (var i = 0; i < questions.length; i++) {
    var questionText = 'Вопрос №' + (i + 1) + ' ' + questions[i].getText()

    if(+prompt(questionText) === (questions[i].correct + 1)) {
        alert('Текущий выгрыш: ' + questions[i].prize);
    } else {
        for(var j = i; j >= 0; j--) {
            if(questions[j].fixed) {
                prize = questions[j].prize;
                
            }
        }
        break;
    }
}
alert('Ваш выигрыш составил: ' + prize);