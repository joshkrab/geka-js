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
   console.log(feline.name);
}
swap(cat);
console.log(cat.name);

let aa1 = 4;
function wery(arg) {
   arg = 6;
   aa1 = arg;
}
wery(aa1);
console.log(aa1);

const a = { x: 1 };
const b = { x: 1 };

function deepEqual(obj1, obj2) {
   return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(deepEqual(a, b));

// Задачка від Ромки, по кліку на батон текст з інпуту передається в ol:
document.querySelector('.push').onclick = () =>
   document
      .querySelector('ol')
      .insertAdjacentHTML(
         'beforeend',
         `<li>${document.querySelector('input').value}</li>`
      );

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

// Спливання та занурення _______________________________________________________________
const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');

block1.addEventListener('click', function (event) {
   console.log(event.target);
});
block2.addEventListener(
   'click',
   function (event) {
      console.log('.block2');
   },
   { capture: true } // Спрацює першим, перехопиться при зануренні
);
block3.addEventListener('click', function (event) {
   console.log('.block3');
   // Заборона спливання, тільки поточний обробник:
   // event.stopPropagation();
});

// Занурення - щоб щось спливло, воно повинно з початку зануритися :)

// Делегування подій _______________________________________________________________
const but = document.querySelectorAll('.but');
function showForBut() {
   console.log('COOL');
}

// but.forEach((buttonItem) => {
//    buttonItem.addEventListener('click', showForBut);
// });

// Щоб не загружати купою обробників браузер, напишемо обробник батькові
const lesson = document.querySelector('.lesson');
lesson.addEventListener('click', function (event) {
   // Якщо найблищий батьківський елемент по селектору:
   if (event.target.closest('.but')) {
      showForBut();
   }
});

// Приклад обробника на весь документ:
const menuBody = document.querySelector('.menu');

document.addEventListener('click', menu);

function menu(event) {
   if (event.target.closest('.menu__button')) {
      menuBody.classList.toggle('_active');
   }
   if (!event.target.closest('.menu')) {
      menuBody.classList.remove('_active');
   }
}
// Допрацьовуємо меню на клавішу Esc
document.addEventListener('keyup', function (event) {
   if (event.code === 'Escape') {
      menuBody.classList.remove('_active');
   }
});

// Дії браузера за замовчуванням: ____________________________________________________________
const link = document.querySelector('.google-link');
link.addEventListener('click', function (event) {
   console.log('Не переходимо нікуди, відміняємо дію за умовчанням');
   event.preventDefault(); // Відмінити дію за умовченням, не перейде по лінку
});

// Те саме через онклік:
// link.onclick = function () {
//    console.log('Our actions');
//    return false;
// };

// Подиї миші - прости та комплексні _______________________________________________________________

// Прості:
// mousedown/mouseup - кнопка нажата/віджата над елементом
// mouseover/mouseout - курсор з'являється/зникає над елементом
// mousemove - рух миші над елементом
// contextmenu - при спробі відкрити контекст меню, правою клавішою або на клаві

// Комплексні: складаються з простих
// ckick - визивається з допомоги mousedown/mouseup
// dblclick - подвійний клік на елементі

const eventBut = document.querySelector('.event-but');

eventBut.addEventListener('mousedown', function (event) {
   console.log(`Нажата кнопка ${event.which}`); // поверне номер кнопки миші
});
eventBut.addEventListener('click', function (event) {
   console.log(`Нажата основна кнопка миші`);
});
eventBut.addEventListener('contextmenu', function (event) {
   console.log(`Нажата не основна кнопка, контекст меню`);
});

// Координати миші:
const blockCoord = document.querySelector('.block-coord');
blockCoord.addEventListener('mousemove', function (event) {
   blockCoord.innerHTML = `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});

// blockCoord.addEventListener('mouseover', function (event) {
//    blockCoord.innerHTML = `<br> Курсор над елементом`;
// });
// blockCoord.addEventListener('mouseout', function (event) {
//    blockCoord.innerHTML += `<br> Курсор пішов`;
// });

// Можна уловити з якого елемента на який перейшов курсор:
// blockCoord.addEventListener('mouseover', function (event) {
//    console.log(event.target); // поточний елемент
//    console.log(event.relatedTarget); // з якого перейшов
// });
// blockCoord.addEventListener('mouseout', function (event) {
//    console.log(event.target);
//    console.log(event.relatedTarget);
// });

// Теж саме, але не реагує на дочерні елементи:
blockCoord.addEventListener('mouseenter', function (event) {
   console.log(event.target); // поточний елемент
   console.log(event.relatedTarget); // з якого перейшов
   console.log('прийшов');
});
blockCoord.addEventListener('mouseleave', function (event) {
   console.log(event.target);
   console.log(event.relatedTarget);
   console.log('пішов');
});

// Делегування подій наведення миші:
const blockCoord2 = document.querySelector('.block-coord2');
blockCoord2.addEventListener('mouseover', function (event) {
   let target = event.target.closest('span');
   if (!target) return;
   target.style.cssText = 'background-color: rgb(219, 214, 214)';
});
blockCoord2.addEventListener('mouseout', function (event) {
   let target = event.target.closest('span');
   if (!target) return;
   target.style.cssText = '';
});

// Події клавіатури __________________________________________________________________
// Keydown/keyup - зажати/віджати клавішу
// event.code - не змінюється при капслокі, та зміні мови
// event.key - змінюється

// document.addEventListener('keydown', function (event) {
//    console.log(`Нажата клавіша ${event.code}(${event.key})`);
// });
// document.addEventListener('keyup', function (event) {
//    console.log(`Віджата клавіша ${event.code}(${event.key})`);
// });

// Перевірка на відміну дії, на будь якій мові - ctrl+z
document.addEventListener('keydown', function (event) {
   if (event.code == 'KeyZ' && (event.ctrlKey || event.meteKey)) {
      console.log('Нажато Ctrl+z');
   }
});

// Перевірка на довге зажаття клавіши, повтор виведення сімволу
// document.addEventListener('keydown', function (event) {
//    console.log(`Нажата клавіша ${event.code}(${event.key})`);
//    console.log(event.repeat);
// });

document.addEventListener('keyup', function (event) {
   console.log(`віджата клавіша ${event.code}(${event.key})`);
});

// Перевірка на залишок вводимих символів:
const tA = document.querySelector('.textarea');
const textLimit = tA.getAttribute('maxlength'); // Значення атрібуту
const textCounter = document.querySelector('.counter');
textCounter.innerHTML = `Залишилось сімволів: ` + textLimit;
tA.addEventListener('keyup', setCounter);
// При зажатому символі теж запускаємо функцію лічильника:
tA.addEventListener('keydown', function (event) {
   if (event.repeat) setCounter();
});

function setCounter() {
   const txtResult = textLimit - tA.value.length;
   textCounter.innerHTML = `Залишилось сімволів: ` + txtResult;
}

// Події при скролі _____________________________________________________________________________
// Глобальний об'єкт window

window.addEventListener('scroll', function (event) {
   console.log(`${scrollY}px`); // Поверне кількість прокручених пікселів по вертікалі
});

// Є ще IntersectionObserver - події перетинання лінії, буде в іншому уроці

// Події завантаження сторінки _______________________________________________________________________

// DOMContentLoaded - браузер повністю завантажил хтмл, але зображення чи стилі можуть ще не загрузитись
// load - завантажено хтмл та усі зовнішні ресурси
// beforeunload / unload - користувач покидає сторінку

window.addEventListener('scroll', function (event) {
   console.log(document.readyState); // Стан завантаження
});

document.addEventListener('DOMContentLoaded', readyDom);
window.addEventListener('load', readyLoad);

function readyDom() {
   console.log(document.readyState);
   console.log('DOM Loaded');
}

function readyLoad() {
   console.log(document.readyState);
   console.log('Page Loaded');
}

// Функції відходу зі сторінки - наприклад попередження закриття
window.addEventListener('beforeunload', function (event) {
   // Відміняємо дію за умовчанням:
   event.preventDefault();
   // Хром потребує повертання значення:
   event.returnValue = '';
});

// unload - вже після уходу зі сторінки в фоновому режимі, наприклад відправка чогось, статистикі тощо

// HomeWork ---------------------------------------------------------------------------------------------------------
let searchField = document.querySelector('.search');
let searchCounter = document.querySelector('.search-counter');
const searchLimit = searchField.getAttribute('maxlength'); // Значення атрібуту

document
   .querySelector('.show-search')
   .addEventListener('click', function (event) {
      event.preventDefault();
      searchField.classList.toggle('active'); // Показуємо/приховуємо текстарею по кліку
      searchCounter.innerHTML = `Залишилось сімволів: ` + searchLimit;
   });

document.addEventListener('click', function (event) {
   if (
      !event.target.closest('.search') &&
      !event.target.closest('.show-search')
   ) {
      searchField.classList.remove('active'); // Приховуємо при кліку будь де, крім поля
      searchCounter.innerHTML = '';
   }
});

document.addEventListener('keyup', function (event) {
   if (event.code === 'Escape') {
      searchField.classList.remove('active'); // Закриваємо пошук натисканням Esc
      searchCounter.innerHTML = '';
   }
});

// Лічільник символів пошуку:
searchField.addEventListener('keyup', searchCount);
searchField.addEventListener('keydown', function (event) {
   if (event.repeat) {
      searchCount();
   }
});

function searchCount() {
   const txtResult = searchLimit - searchField.value.length;
   searchCounter.innerHTML = `Залишилось сімволів: ` + txtResult;
}
