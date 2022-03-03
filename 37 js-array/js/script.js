// Create array - 2 ways:
let arr1 = new Array(); // not often
let arr2 = [];

// Different types 0f value:
let arrTwo = [
   'Kolya',
   { type: 'js', age: 36 },
   true,
   function () {
      console.log("Hello, i'm Ihor");
   },
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
// Вызов функции:
arrTwo[3]();

let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
];

console.log(matrix[0][1]);
console.log(matrix.length);

// Массив это объект, т.е. копируется ссылка и тд:
let arr3 = ['ihor', 'sasha', 'roma'];
let arr3New = arr3;
// Удалит 3й элемент, оставив заданную длину:
arr3New.length = 2;
console.log(arr3);
// Добавить элемент
arr3[4] = 'boris'; // оставит пустыми элементы перед собой 2 и 3
console.log(arr3);

// Методы _____________________________________________________________________________
// Массивы могут работать как очередь и как стек:
// Очередь:
// 1. Добавление элементов в конеч очереди
// 2. Удаление элемента в начале, сдвигая очередь
// Стек:
// 1. Добавление элемента в конец
// 2. Удаление последнего элемента

// Метод Push - добавляет элемент в конеч массива ____________________________________________
let arr4 = ['Olga', 'Alina'];
arr4.push('Ihor');
console.log(arr4);
arr4.push('Nino', 'Alex');
console.log(arr4);

// Метод shift - удаляет элемент в начале, сдвигая индексы
arr4.shift();
console.log(arr4);

// Метод pop удаляет последний элемент в массиве
arr4.pop();
console.log(arr4);

// unshift - добавляет элемент в начало, сдвигая остальные
arr4.unshift('Marina');
console.log(arr4);

delete arr4[2]; // Удалит элемент, без сдвига, оставит undefine
console.log(arr4);

// Splice - добавлять, удалять и заменять элементы ________________________________________________________
// arr.splice(index[,deleteCount, elem1, ..., elemN])

let arr5 = ['first', 'second', 'third'];
// Удалим на 0й позиции один элемент
// arr5.splice(0, 1);
console.log(arr5);

// Удаляем элемент и возвращаем его в переменную:
let arrEl = arr5.splice(0, 1); // получаем массив из одного элемента
console.log(arrEl);

// Заменяем элемент:
arr5.splice(0, 1, 'Joe');
console.log(arr5);

// Добавим элементы во 2ю позицию
arr5.splice(2, 0, 'Joe2', 'josh3');
console.log(arr5);

// Удалим элемент с конца, "-1" это первая позиция с конца, а с начала 0
arr5.splice(-1, 1);
console.log(arr5);

// Slice - создает новый массив, который копируем часть текущего ___________________________________________
// arr.slice([start], [end]) - не включая [end]

let arrTwo2 = arr5.slice([0], [2]);
console.log(arrTwo2);

// Копируем с конца, отрицательными значениями:
let arr6 = arr5.slice([-2], [-1]);
console.log(arr6);

// Копируем весь массив:
let arr7 = arr5.slice();
console.log(arr7);

// Concat, создаст дубль массива и добавит в конец заданное ____________________________________________
let arr8 = arr7.concat('follow', 'the', 'leader');
console.log(arr8);

// Поиск в массиве - методы по аналогии со строками ____________________________________________________
let arr9 = ['follow', 'the', 'leader', 'by', 'korn'];
console.log(arr9.indexOf('korn'));
console.log(arr9.indexOf('kob')); // если не находит, то выводит -1
// Поиск начиная с указаной позиции
console.log(arr9.indexOf('the', 2)); // -1

// Поиск справа на лево
console.log(arr9.lastIndexOf('the', 3)); // 1

// Поиск с указанного индекса, или без указания, возвращает true/false
console.log(arr9.includes('the')); // true
console.log(arr9.includes('the', 2)); // false

// find/findIndex - Поиск в массиве с определенным условием ___________________________________________________________
let arr10 = [
   { name: 'Vas9', age: 20 },
   { name: 'Kol9', age: 18 },
   { name: 'Ol9', age: 'ne skaju' },
];

let resultOne = arr10.find(function (item, index, array) {
   return item.age === 18;
});

console.log(resultOne);
// let resultOne = arr10.find((item) => item.age === 18);

let res2 = arr10.find(function (item, index, array) {
   return item.age <= 20; // до первого true
});

console.log(res2);

// перебирает массив до первого true, если не находит возвращает undefine

// Тоже самое, но вернет индекс:
let resultTwo = arr10.findIndex((item) => item.age === 20);
console.log(resultTwo);

// filter - выведет не первое, а все true _______________________________________________________________________
// Метод ищет все элементы, на которых функция колбек вертет true

let filtArr = arr10.filter(function (item, index, array) {
   return item.age >= 18;
});

console.log(filtArr);

// Методы сортировки массивов _____________________________________________________________________________________
// Sort - сортирует массив на месте, меняя порядок

// Сортировка слов
let arrSort = ['Иштван', 'Ваня', 'Оля'];
console.log(arrSort.sort());

// Сортировка чисел
let arrSort2 = ['8', '22', '1'];
console.log(arrSort2.sort());
console.log('8' > '22'); // true - элементы сортируются как строки

// В метод сорт запишем свою функцию, и посмотрим какие цифры сравниваются
function mySort(a, b) {
   console.log(`Сейчас сравниваются ${a} и ${b}`);

   // Сортирует в зависимости от положительного или отрицательного результата

   // Но этот метод с if не работает у меня и сортирует как строки
   // if (a > b) return 1;
   // if (a == b) return 0;
   // if (a < b) return -1;

   // а так работает:
   return a - b;
}
console.log(arrSort2.sort(mySort));

// Можно записать еще проще стрелочной функцией
console.log(arrSort2.sort((a, b) => a - b));

// В этом методе вшита сортировка в зависимости от знака, перебираемых элементов массива
// В каждой итерации сравниваются два разных элемента

// Обратный порядок массива: _________________________________________________________________________________
console.log(arrSort.reverse());

// Преобразование массивов ___________________________________________________________________________________
// map - выполняет функцию для каждого элемента, создавая новый массив

let arrMap = ['sasha', 'igor', 'roma'];
let arrMap2 = arrMap.map(function (item, index, array) {
   return item[0];
});
console.log(arrMap2);

// Строку в массив по заданному разделителю ___________________________________________________________________
let str = 'Ваня, Коля, Ольга, Лера';
let strArr = str.split(',', 2); // Ограничиваем массив до 2х элементов
console.log(strArr);

// Наоборот - массив в строку, добавляя нужный разделитель:
let arrStr = strArr.join(';');
console.log(arrStr);
// Еще один метод перевода в строку но без указания разделитель, всегда будет ','
console.log(String(strArr));

// Проверка на массив ___________________________________________________________________________________________
let tA = [1, 2, 3];
console.log(typeof tA); // object

// Проверить можно так, на true
if (Array.isArray(tA)) {
   console.log('Да, это же массив :)');
}

// Перебор элементов массива ____________________________________________________________________________________
for (i = 0; i < arrMap.length; i++) {
   console.log(arrMap[i]);
}

for (let item of arrMap) {
   console.log(item);
}

// forEach - Выполняет функцию для каждого элемента массива ________________________________________________________________
let fEar = ['ihor', 'sasha', 'lera', 'katya', 'olga'];
fEar.forEach(function (item, index, array) {
   console.log(`${item} находится на ${index} позиции массива ${array}`);
});

fEar.forEach((item, index, array) => console.log(item, index)); // сам написаль :)
// Или в скобках forEach() можно указывать имя другой функции

// Reduse/reduseRight - перебор массива для вычисления единого значения ___________________________________________
let arrNumbers = [1, 2, 3, 4, 5, 6];
// В данном примере 0 это начальное значение для previousValue
// Результат итерации записывается также в previousValue
let arrNumValue = arrNumbers.reduce(function (
   previousValue,
   item,
   index,
   array
) {
   return item + previousValue;
},
0);
console.log(arrNumValue);

// Если не указать начальное значение, то оно будет равно первому элементу массива
// А работа метода тогда начнется со второго элемента

let arrNames = ['ihor', 'valeriya', 'galina', 'valentina'];
let namesReduce = arrNames.reduce(function (previousValue, item, index, array) {
   console.log(previousValue);
   console.log(item);
   return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${namesReduce}`);

// reduseRight - работает аналогично, но справа на лево

// Массив это объект с числовыми ключами ________________________________________________________________________
let arrAdd = ['ihor', 'valeriya', 'galina'];
// добавление нечислового свойства
arrAdd.name = 'george';
console.log(arrAdd);
arrAdd[0] = 'ihorNew';
console.log(arrAdd);

// Home work ___________________________________________________________________________________________

// 1. Какое число мы получим в результате?
let hw1 = ['ihor', 'valeriya', 'galina'];
let newHw1 = hw1;
newHw1.push('petr');
console.log(hw1.length);

// 2. Создайте массив users с элементами 'Ваня' и 'Иштван'
// Добавьте "Оля" в конец
// Замените значение 'Иштван' на "Петя"
// Код поиска должен работать для массивов любой длины
// Удалите первый элемент массива и покажите его
// Вставте "Маша" и "Паша" в начало массива

let hw2 = ['Ваня', 'Иштван'];
hw2.push('Оля');
console.log(hw2);
// Заменяем элемент:
// hw2.splice(1, 1, 'Петя');

// Заменяем для любой длины
hw2.forEach(function (item, index, array) {
   if (item === 'Иштван') {
      hw2.splice(index, 1, 'Петя');
   }
});
console.log(hw2);

hw2.unshift('Маша', 'Паша');
console.log(hw2);

// 3. Удалить Паша в переменную
let hw3 = hw2.splice(1, 1);
console.log(hw3);

// 4. Сделать из строки массив
let hw4 = 'Катя, Оля, Марина, Лера';
let hw42 = hw4.split(',');
console.log(hw42);

// 5. Чему равен PreviousValue в начале работы медода?
let hw5 = [9, 2, 8, 6];
let hw5V = hw5.reduce(function (pV, item, index, array) {
   console.log(pV);
   return item + pV;
});

console.log(hw5V);
