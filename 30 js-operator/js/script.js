let myName = 'ihor';

myName = 36;

// "Бинарный" оператор применяется к двум "операндам"
//  В примере к двум числам
myName = 3 + 6;

console.log(myName);
console.log(typeof myName);

// "Унарный" оператор применяется к одному "операнду", пример:
myName = -6;
console.log(myName);

let x;
// Операторы "сложения +", вычитания -, умножения *, деления / ;
x = 5 + 6;
console.log(x);

// Оператор "взятия остатка от деления"
x = 11 % 3;
console.log(`Взятие остатка от деления: ${x}`);

// Оператор "возведения в степень"
x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);

// Сложение строк
let resultOne = 'Фрилансер' + ' ' + 'по' + ' ' + 'жизни';
console.log(resultOne);

// Сложение строки и цифры
let resultTwo = 38 + ' Мой возраст';
console.log(resultTwo);
// Результат будет строчный
console.log(typeof resultTwo);

// Казусы
let resultThree = 2 + '2';
console.log(resultThree);
// Результат будет строчный 22 а не 4 :)
console.log(typeof resultThree);

// Операции до сложения со строкой выполняются
let resultFour = 35 - 22 + ' Вот это результат';
console.log(resultFour);
console.log(typeof resultFour);

// Работа других операторов:
let resOne = '22' - 5;
console.log(resOne);
console.log(typeof resOne);

let resTwo = 10 * '8';
console.log(resTwo);
console.log(typeof resTwo);

let resThree = 3 * 'StringValue';
console.log(resThree);
console.log(typeof resThree);

// Унарный оператор сложения:
resOne = +'22';
console.log(resOne);
console.log(typeof resOne);

let users = '25';
let admins = '10';

console.log(users + admins);
// Добавляем унарный оператор и получаем цифры, тип данных number
console.log(+users + +admins);

// Приоритет операторов:

// Разный приоритет:
resOne = 2 + 4 * 2;
console.log(resOne);

// Скобки
resTwo = (2 + 5) * 3;
console.log(resTwo);

// Одинаковый приоритет:
resThree = 3 + 5 - 6;
console.log(resThree);

// Оператор присвоения:
let a = 1 + 2;
let b = 2;

// Присвоение в присвоении, но лучше так не делать - для читаемость
let result = 8 - (a = b + 3);
console.log(`Результат в скобках: ` + a);
console.log('Результат общий: ' + result);

// Присваивание по цепочке
resOne = resTwo = resThree = 2 + 6;
console.log(resOne);
console.log(resTwo);
console.log(resThree);

// Можно одновременно прибавлять и присваивать:
let hiJs = 5;
hiJs += 3;
console.log(hiJs);

// -------------------------------------------------------------------------------
// Специальные операторы "инкремент/декремент"
// можно использовать только с переменной, со значение будет ошибка

// Инкремент ++ добавляет 1
let addUser = 2;
addUser++;

console.log(addUser);

// Декремент -- отнимает 1

// Бывают предфиксная/постфиксная форма инкремент/декремент
let userCounter = 0;

// Выведет значение до оператора инкремент
console.log(userCounter++);

console.log(userCounter);
// Сразу вывод с инкрементом +1
console.log(++userCounter);

// Оператор "," позволяет выполнять несколько выражений через запятую
let userCounter2 = (5 + 9, 4 - 2);

console.log(userCounter2);

// Операторы сравнения: Больше >, Меньше <, Больше или равно >= (<=)
// Равно ==, Не равно !=, Строгое равно ===, Строгое Не равно !==
// Логический тип данных правда или ложь

console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(8 != 9);

let resus = 11 > 9;
console.log(resus);

// Сравнение строк
// Алфавитный порядок
console.log('B' > 'A');
console.log('Скрипт' > 'Скрипка');
// Количество символов
console.log('Слайдер' > 'Слайд');
// Регистр
console.log('фрилансер' < 'Фрилансер');

// Сравнение разных типов
console.log('58' > 10);
console.log('007' == 7);
// true == 1, false == 0;
console.log(true == 1);
console.log(false == 0);

// Boolean
let itemA = 0;
let itemB = '0';

console.log(Boolean(itemA));
console.log(Boolean(itemB));
console.log(Boolean(itemB == itemA));

console.log(null == undefined);
console.log(null === undefined);

// -------------------------------------------------
// Логические операторы
// Или ||
// Булевые значения

console.log(true || true);
console.log(true || false);

// если все ложь, то возвращает значение последнего
console.log(false || false);

// Если есть тру, возвращает первый true - это 1
console.log(0 || 1);
console.log(true || 'freelancer');
// Первый тру это 58
console.log(null || 58);
// 1st true - freelancer
console.log(null || 'freelancer' || 0);
// true нет совсем, вернется последнее значение - 0
console.log(undefined || '' || null || 0);

// Сокращенное вычисление и условие
let adm = 0;
let usr = 5;

adm > usr || usr++;
console.log(usr);

// -------------------------------------------------------
// Оператор И &&
// Если есть ложь, то возвращается первое ложь, если есть истина, то возвращает последнюю истину

// Булевые значения
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(1 && 2 && null && 3);
console.log('15' && '42');

// Приоритет && больше ||
console.log((1 && 0) || (2 && 1));

// ------------------------------------------------------
// Оператор Не ! перед операндом
// Возвращает противоположное значение
console.log(!true);
console.log(!0);

// У оператора Не ! наивысший приоритет
console.log((!true && 58) || (18 && !1));

// Для преобразования в Boolean
console.log(!!'Freelancer');
// или так
console.log(Boolean('Freelancer'));

// ------------------------------------------------------
// Оператор объединения с  Null ??
let meAndYou;
// Возвращает первый элемент если он Null/Undefined, иначе второй
console.log(meAndYou ?? 'No name');

// HW
let hw = 0;
console.log(hw ?? 'no time');

// тут є зміни, пушимо
