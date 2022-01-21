let message = 'Hello, freelancer';

if (2 > 1) {
   // Выполниться, если условие true
   console.log(message);
}

// Если нет else, можно писать без фигурных скобок
if (5 === 5) console.log('Yo!');

// Несколько условий
let number = 3;

if (number > 50) {
   console.log(number + ' > 50');
} else if (number > 30) {
   console.log(number + ' > 30');
} else if (number > 1) {
   console.log(number + ' > 1');
} else {
   console.log('Условие не выполнено :(');
}

let letter = 'Привет';
// Сокращенная запись: "?" это if true, ":" это else
let letterEnd = 5 > 1 ? ', Вася!' : ', Оля';

console.log(letter + letterEnd);

// Несколько соращенных условий:
// Не очень читаемо и реккомендуется только при простых условиях
messageEnd =
   6 > 2 ? 'Александра' : 5 > 20 ? 'Катерина' : 6 > 5 ? 'Ольга' : 'Марина';
console.log(messageEnd);

// ДЗ - какой из вариантов вернет в консоль "Истина"

//Вариант 1 +
if (1 === '1') {
   console.log('Истина');
} else {
   console.log('Ложь');
}

//Вариант 2 +
if (5 == '5') {
   console.log('Истина');
} else {
   console.log('Ложь');
}

//Вариант 3 +
let email = 92 > '11' && 58 < 100 ? 'Истина' : 'Ложь';
console.log(email);

//Вариант 4 +
if (0) {
   console.log('Истина');
} else {
   console.log('Ложь');
}
