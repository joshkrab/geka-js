// LinkedIn tasks _____________________________________________________
let l1 = 10;
let l2 = 0;
while (l1 < 13 || l2 <= 2) {
   l1++; // 10 11 12
   l2 += 2; //2 4 6
}
console.log(l2);

let bear = {
   sound: 'roar',
   roar() {
      console.log(this.sound);
   },
};
bear.sound = 'grunt';
let bearSound = bear.roar;
bearSound();

let animal = ['eagle', 'osprey', 'salmon'];
let key = (animal) => animal === 'salmon';
if (animal.some(key)) {
   console.log('swim');
}

let animalz = ['jag', 'eagle'];
animalz.pop(); // Удаляє останній єлемент
console.log(animalz.pop());

let vow = 'aeoi';
for (var i = 0; i < vow.length; i++) {
   console.log(vow[i]);
}

var cat = { name: 'Athena' };
function swap(feline) {
   feline.name = 'Wild';
   feline = { name: 'Tabby' };
}
swap(cat);
console.log(cat.name);

const a = { x: 1 };
const b = { x: 1 };

function deepEqual(obj1, obj2) {
   return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(deepEqual(a, b));

// ___________________________________________________________________________

// Use the DOM object
const button = document.querySelector('.button');
button.onclick = function () {
   console.log('Click Too');
};

function clickToo() {
   console.log('Click 3');
}

const but3 = document.querySelector('.button3');
but3.onclick = clickToo;

// Недолік цих засобів, яки указані вище, що не можна повісити декілька
// обробників - наступний перезапише попередній

// Тому використовують наступні методи:
document.querySelector('.button4').addEventListener('click', function (e) {
   console.log('addEventListener');
});
document.querySelector('.button4').addEventListener('click', function (e) {
   console.log('addEventListener2');
}); // Two events in console

function showEvent() {
   console.log('function Event');
}
function showEvent2() {
   console.log('function Event');
}

document.querySelector('.button4').addEventListener('click', showEvent);
document.querySelector('.button4').removeEventListener('click', showEvent);

// With options:

const option = {
   'capture': false, // фаза, на яку спрацює обробник
   'once': false, // if true - обробник буде видален після виконання
   'passive': false, // if true - обробник ніколи не визове preventDefault()
};
document.querySelector('.button4').addEventListener('click', showEvent, option);

// Об'єкт опцій можна писати прям у дужках
document.querySelector('.button4').addEventListener('click', showEvent2, {
   'capture': false,
   'once': true,
   'passive': false,
});

// Об'єкт події _____________________________________________________________________
// Коли відбувається подія, браузер створює об'єкт події,
// записує туди деталі, передає в якості аргумента функції обробнику

function showEvObj(event) {
   console.log(event.type); // Тип події
   console.log(event.target); // Об'єкт на якому спрацював обробник
   console.log(event.currentTarget); // Об'єкт якому призначений обробник
   console.log(event.clientX, event.clientY); // Координати курсору

   console.log(event); // Усі деталі
}

document.querySelector('.button5').addEventListener('click', showEvObj);
// При наведенні миші:
// document.querySelector('.button5').addEventListener('mouseenter', showEvObj);

// 12:30
