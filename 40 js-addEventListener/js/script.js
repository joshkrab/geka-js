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

// Дії браузера за замовчуванням: ____________________________________________________________
const link = document.querySelector('.google-link');
link.addEventListener('click', function (event) {
   console.log('Our actions');
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

// 16:20
