var event, ok, question;
var moves = [];

do {//Выводим первый вопрос
    ok = false;
    question = works.a00 + works.a1 + works.a2 + '-1 - Выход из игры';
    event = +prompt(question);
    if (event == -1) {
        moves.push(question);
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
        if (ok) moves.push(question);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2       
        do {
            ok = false;
            question = works.b00 + works.b1 + works.b2 + '-1 - Выход из игры';
            event = +prompt(question);
            if (event == -1) {
                moves.push(question);
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                if (ok) moves.push(question);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    question = works.d00 + works.d1 + works.d2 + '-1 - Выход из игры';
                    event = +prompt(question);
                    if (event == -1) {
                        moves.push(question);
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) moves.push(question);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    question = works.d00 + works.d1 + works.d2 + '-1 - Выход из игры'
                    event = +prompt(question);
                    if (event == -1) {
                        moves.push(question);
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) moves.push(question);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            question = works.c00 + works.c1 + works.c2 + '-1 - Выход из игры'
            event = +prompt(question);
            if (event == -1) {
                moves.push(question);
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
                if (ok) moves.push(question);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    question = works.d00 + works.d1 + works.d2 + '-1 - Выход из игры'
                    event = +prompt(question);
                    if (event == -1) {
                        moves.push(question);
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) moves.push(question);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    question = works.d00 + works.d1 + works.d2 + '-1 - Выход из игры'
                    event = +prompt(question);
                    if (event == -1) {
                        moves.push(question);
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) moves.push(question);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
var userQuestion = +prompt('Введите порядковый номер вопроса, который вы хотите прочитать еще раз');
if (userQuestion > 0 && userQuestion <= moves.length) {
    var questionAgain  = moves[userQuestion-1];
    alert(questionAgain);
} else {
    alert('Такого номера вопроса не было, хитрюга!')
}

alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    else {
        return true;
    }
}
