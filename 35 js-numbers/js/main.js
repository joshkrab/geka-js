// Десятичные числа:
let someNums = 4.58;

// Сокращение нуле: e + количество нулей
let someBigNum = 1e6; // 1 * 1000000
console.log(someBigNum);

let someLittleNum = 1e-6; // 1 / 1000000
console.log(someLittleNum);

// Пример перекодирования числа в другие системы исчисления
let num = 255;

console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

// Округление в меньшую сторону
let nunOne = Math.floor(5.8);
let nunTwo = Math.floor(2.2);
let nunThree = Math.floor(-2.2);

console.log(nunOne);
console.log(nunTwo);
console.log(nunThree);

// Округление в большую сторону
let nunOne1 = Math.ceil(5.8);
let nunTwo1 = Math.ceil(2.2);
let nunThree1 = Math.ceil(-2.2);

console.log(nunOne1);
console.log(nunTwo1);
console.log(nunThree1);

// Округление до ближайшего целого
let nunOne2 = Math.round(5.8);
let nunTwo2 = Math.round(2.2);
let nunThree2 = Math.round(-2.2);

console.log(nunOne2);
console.log(nunTwo2);
console.log(nunThree2);

// Округление - один или два знака после запятой
let nunOne3 = Math.round(5.845 * 10) / 10; // 58.45 -> 58 -> 5.8
let nunTwo3 = Math.round(5.845 * 100) / 100; // 584.5 -> 585 - > 5.85
let nunThree3 = Math.round(5.8449 * 100) / 100; // 584.49 -> 584 -> 5.84

console.log(nunOne3);
console.log(nunTwo3);
console.log(nunThree3);

// Метод toFixed(n) округляет до n знаков после запятой
let numFour = 5.845;
console.log(numFour.toFixed(2));
console.log(typeof numFour);
// Преобразовать в число: (хз зачем тут это :) )
console.log(+numFour.toFixed(2));
console.log(Number(numFour.toFixed(2)));

// Проблемы и неточности:
let problem = 0.1 + 0.2 === 0.3;
console.log(problem); // false
console.log(0.1 + 0.2); // 0.30000000000000004

// Решение с помощью Number.EPSILON - очень маленькое число
let sourseNum = 1.005 + Number.EPSILON;
let numFive = Math.round(sourseNum * 100) / 100;
console.log(numFive);

// Проверка isNaN, NaN - это ошибка вычисления
console.log(Number(25 + 'Привет'));
console.log(isNaN(25 + 'Привет'));

// Проверка isFinite - преобразует аргумент в число и возвращает
// true если оно является обычным числом
console.log(isFinite('25')); // true
console.log(isFinite('Привет!')); // NaN -> false
console.log(isFinite(10 / 0)); // Infinity -> false
console.log(10 / 0);

// метод parseInt - возвращает целое число до ошибки
let intNum = parseInt('150.34px');
console.log(intNum);
console.log(typeof intNum);

// метод parseFloat - возвращает число с точкой до ошибки
let FloatNum = parseFloat('150.34px');
console.log(FloatNum);
console.log(typeof FloatNum);

// Необязательный второй параметр для разных систем исчисления
console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));

// Псевдослучайное число от 0 до 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Возвращает макс/мин значение из перечисленых аргументов
console.log(Math.max(13, 99, -78));
console.log(Math.min(13, 99, -78));

// Возвращает абсолютное значение число
console.log(Math.abs(-57));

// Возвращает 5 в степени 8
console.log(Math.pow(5, 8));

// Домашка ---------------------------------------------------

// Задача 1. Получить верное значение округления:
let hw1 = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(hw1);

// Задача 2. Получить число из строки
let value = '137.98px';
console.log(parseFloat(value));

// Задача 3. Написать само условие в ()
let hw3 = 38 + 'Hello';
if (isNaN(hw3)) {
   console.log('Результат вычисления NaN');
}

// Задача 4. Вывести максимальное число из введенных
console.log(Math.max(10, 58, 39, -150, 0));

// Задача 5. Округлить до целого число
console.log(parseInt(59.858));
