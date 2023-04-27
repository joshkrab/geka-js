// Типы данных

// Undefined - неопределенный тип
let userName;

// Получаем тип данных:
console.log(typeof userName);
// Получаем значение переменной:
console.log(userName);

// Примеры проверки типа данных переменной:
if (userName === undefined) {
   console.log("Переменная НЕ определена");
} else {
   console.log("Переменная определена");
}

if (typeof userName === "undefined") {
   console.log("Переменная НЕ определена");
} else {
   console.log("Переменная определена");
}

// Null - ничего
let UserName = null;
console.log(UserName);

// Пример: обращаемся к объекту, которого нет:
let block = document.querySelector(".block");
// Получаем null
console.log(block);
// Вернем тип object - ошибка js
console.log(typeof block);

// Boolean - Булевый или логический тип.
// Может иметь два значения true(истина) и false(ложь)

let willYouMarryMe = true;

if (willYouMarryMe) {
   console.log(":)");
} else {
   console.log(":(");
}

// Пример с оператором сравнения:
let trueOrFalse = 58 < 18;
console.log(trueOrFalse);

// Тип Number (число) - значения в виде целых чисел, или с точкой
let userAge = 38;
let userHeight = 1.78;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);

// Значение Infinity - матем. бесконечность, которая больше любого числа
let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);

// Отрицательное значение Infinity:
let GetInfinity = -58 / 0;
console.log(GetInfinity);
console.log(typeof GetInfinity);

// Значение NaN - результат неправильной или неопределенной мат. операции (ошибки)
let getNaN = "Freelancer" / 10;
console.log(getNaN);
console.log(typeof getNaN);

// Тип данных BigInt - для длинных целых чисел
// Тк Number не может содержать число больше 9007199254740991 или меньше -9007199254740991
const bigInteger = 123456789123456789n;
console.log(typeof bigInteger);

// Тип String - строчный
let myName = "Igor";
console.log(typeof myName);

// В обратные ковычки можно вставлять дополнительный функционал:
let userAgeFunction = "38";
let userAgeInfo = `Возраст: ${userAgeFunction}`;
console.log(userAgeInfo);

// Тип Object - более сложная структура данных, в отличии от примитивных значений стринг или намбер
let userInfo = {
   // Объект содержит набор свойств, состоящих из ключ: значение
   name: "Igor",
   age: 38,
};
console.log(userInfo);
console.log(typeof userInfo);

// Тип Symbol - уникальный идентификатор объекта
// Создаются одноименной функцией:

let id = Symbol("id");
console.log(typeof id);

// Тип Function - по сути тотже объект выведеный для удобства отдельно, для функций
let getFunction = function name(parasm) {
   // Код функции
};
console.log(typeof getFunction);

// Преобразование типов:------------------------------------------------------------
let myAge = 38;
console.log(myAge);
console.log(typeof myAge);

myAge = String(myAge);

console.log(myAge);
console.log(typeof myAge);

// Булеан в строку
let userTrue = true;
userTrue = String(userTrue);

console.log(userTrue);
console.log(typeof userTrue);

// Строку в число
let yourAge = "43";
console.log(yourAge);
console.log(typeof yourAge);

yourAge = Number(yourAge);
console.log(yourAge);
console.log(typeof yourAge);

// Логическое преобразование:
let ageNumber = 1;

ageNumber = Boolean(ageNumber);
console.log(ageNumber);
console.log(typeof ageNumber);

// Домашка
let homeWork = "11" / "12";
console.log(homeWork);
console.log(typeof homeWork);
