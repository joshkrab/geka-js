// Функции

// Объявление функции - Function Declaration
function name(parametr) {
   // Function body
}

// Параметры не обязательны, задаются через запятую

// Имя функции показывает ее действие, т.е. скорее всего глагол
// Примеры имен: showMessage, getOptions, calcSum
showMessage();

function showMessage() {
   console.log('Hello Ihor! :)');
}

// Чтобы функция сработала, ее необх. вызвать:
showMessage();
// Можно вызвать несколько раз, а также до самой записи функции.
// Это показывает предназначение - использование кода многократно
showMessage();
showMessage();

// Вложенность и видимость функций
// Функции можно писать внутри другой функции - вкладывать ее

function getSumm() {
   let numOne, numTwo;

   function getNumOne() {
      numOne = 1;
   }

   function getNumTwo() {
      numTwo = 2;
   }

   // Вызываем их тутже:
   getNumOne();
   getNumTwo();

   let numSumm = numOne + numTwo;
   console.log(numSumm);
}

getSumm();
// Если вызвать дочернюю функцию, то будет ошибка:
// getNumTwo();

// В строгом режиме"use strict", если функция записана врнутри блока,
// например внутри if, то за пределами этого блока вызвать ее не получится
// но если объявить переменную во вне блока, а потом ей присвоить функцию (Function Expression),
// то потом ее можно вызвать во вне блока, по имени переменной - name();

// Переменна объявленная внутри функции, также будет не видна
// снаружи, и называется "локальная переменная"

// "Внешняя переменная"
let message;
function showSnow() {
   // Используем внешнюю переменную
   message = 'message';
}

showSnow();
console.log(message);

// "Глобальная переменная" - снаружи всех блоков и функций, исп. редко

// Передаем параметры функции - аргументы
function calcSumm(numOne, numTwo) {
   console.log(`Аргумент 1: ${numOne}`);
   console.log(`Аргумент 2: ${numTwo}`);

   let numSumm = numOne + numTwo;
   console.log(`Сумма аргументов: ${numSumm}`);
}
// Передаем два параметра/аргумента в момент вызова функции
calcSumm(3, 5);
calcSumm(3, 7);
// Если задать не все переменные, то будет undefined вместо незаданного
calcSumm(3);
// Можно задавать значения аргументов по умолчанию:
// function calcSumm(numOne = 1, numTwo = 2)
// они будут использоваться,  если не заданы другие

// Функции-колбэки - передаем в аргументы функции другие функуции
function calcSummy(numOne, numTwo, more, less) {
   let numSumm = numOne + numTwo;

   if (numSumm > 3) {
      more();
   } else {
      less();
   }
}

function showMoreMessage() {
   console.log('Больше чем 3');
}

function showLessMessage() {
   console.log('Меньше чем 3');
}

calcSummy(1, 2, showMoreMessage, showLessMessage);

// Возврат результата функции - директива return
function returnSumm(numOne, numTwo) {
   let numSumm = numOne + numTwo;
   // Возврат:
   return numSumm;
   // Дальше код не выполняется
}

let funcResult = returnSumm(1, 2);
console.log(`Результат функции: ${funcResult}`);

// Можно использовать return без параметров, для прекращения работы функции

// -----------------------------------------------------------------------------
// Рекурсия - функция вызывает сама себя:

// Сначала пример без рекурсии:
function calcForSumm(numOne, numTwo) {
   let result = 1;

   // Умножаем result на numOne, numTwo раз:
   for (let i = 0; i < numTwo; i++) {
      result *= numOne;
   }
   return result;
}
console.log(calcForSumm(2, 3));

// Таже функция с рекурсией:
function calcRecSumm(numOne, numTwo) {
   if (numTwo === 1) {
      return numOne;
   } else {
      // Умножаем на эту же функцию с другими параметрами
      return numOne * calcRecSumm(numOne, numTwo - 1);
   }
}
console.log(calcRecSumm(2, 3));

// --------------------------------------------------------------------------------------------

// Функциональное выражение - Function Expression
let showSnowMessage = function () {
   console.log('Hello');
};
// Вызов твоей функции - ее имя это имя переменной
// Вызов такой функции только после объявления переменной
showSnowMessage();

// Копируем функцию в переменную и вызываем двумя способами
function funcSumm() {
   let summ = 1 + 2;
   console.log(summ);
}

let someVar = funcSumm;

// Вызываем двумя способами:
someVar();
funcSumm();

// -----------------------------------------------------------------------------------------------------

// Стрелочные функции - Arrow functions

// Function Expression:
let nameEx = function (x, y) {
   return exit;
};

// Arrow function:
let nameAr = (x, y) => exit;

// Real example:
let realArrow = (text, name1) => text + ', ' + name1 + '!';
console.log(realArrow('Privet', 'Vasya'));

// Многострочная стрелочная функция:
let manyRows = (text, name1) => {
   let message = text + ', ' + name1 + '!';
   return message;
};

console.log(manyRows('Hello', 'Sasha'));

// -----------------------------------------------------------------------------------------------------
// Планирование вызова функций - два метода:

// setTimeout - вызвать ф-ю один раз, через опр. интервал времени
// setInterval - вызвает регулярно, через опр. интервал времени

function setTout(text, name) {
   console.log(`${text}, ${name}`);
}

// Выполнится через 3 секунды:
// setTimeout(setTout, 3000, 'Hello', 'Lera');

// Рекурсивный подход setTimeout, даст более точную задержку
function recTout(text, name) {
   console.log(`${text}, ${name}`);
   setTimeout(recTout, 500, text, name);
}
// Вызов, и внутри тоже самое для рекурсии, закоментил, т.к. бесконечно:
// setTimeout(recTout, 500, 'Hello', 'Max');

// Выводим число через 1с, увеличивая его на 1
function showNumber(num) {
   console.log(num);
   if (num < 7) {
      setTimeout(showNumber, 1000, ++num);
   }
}
// setTimeout(showNumber, 1000, 1);

// clearTimeout, clearInterval - остановит/очистит этот параметр из переменной:
let star = 0;
function showRec(num) {
   star += num;
   console.log(star);

   if (star === 5) {
      clearInterval(timeId);
   }
}
// let timeId = setInterval(showRec, 500, 1);

// -------------------------------------------------------------------------------------------------

// Пример объединения функций или вызова любой по одной:

// Функция объединения строк:
function createMessage1(text, name) {
   return `${text}, ${name}!!!`;
}

//Функция вывода в консоль:
function showOurMessage(message) {
   console.log(message);
}

// Объединяющая функция, вызывающая обе:
function initMessage(text, name) {
   showOurMessage(createMessage1(text, name));
}

initMessage('Cool', 'Lesson');

// -----------------------------------------------------------------------------------------------------

// Домашка
// Задача 1: Кто попадет в консоль первым: Вася или Коля?
function showName1() {
   console.log('Вася');
}
setTimeout(showName1, 0);
console.log('Коля');

// Задача 2: Верна ли вызвана функция
showOurFunc();
function showOurFunc() {
   console.log('Все верно вызвоно, так как это декларэйшн');
}

// Задача 3: Как решить проблему в строгом режиме 'use strict'?
let showOurMes;
if (2 > 1) {
   showOurMes = function () {
      console.log(
         'В строгом режиме надо объявить переменную во вне блока, и потом ей присвоить функцию (Function Expression)'
      );
   };
}
showOurMes();
// -----------------------------------------------------------------------------------------------------

// Замыкания - даёт вам доступ к Scope внешней функции из внутренней функции.

function init() {
   var name = 'Mozilla'; // name - локальная переменная, созданная в init
   function displayName() {
      // displayName() - внутренняя функция, замыкание
      console.log(name); // displayName() использует переменную, объявленную в родительской функции
   }
   displayName();
}
init();
