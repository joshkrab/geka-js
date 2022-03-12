// Получить ширину окна браузера:
console.log('Ширина экрана: ' + window.innerWidth + 'px');

// BOM - Browser Object Model __________________________________________________________________________________________________________

// Navigator - информация о брайзере и ОС

console.log(navigator.userAgent);
// Зачеркнуто значит устарело, но работает пока
console.log(navigator.platform);
console.log(navigator.product);

// Получаем URL
console.log(location.href);

// Меняем URL
// location.href = 'https://google.com';

// alert('Hello');

// confirm('Хочешь научиться верстать?'); // true/false

// const promptResult = prompt('Input your data');
// console.log(promptResult);

// _________________________________________________________________________________________________________

// DOM - html элементы представлены ввиде дерева, теги становятся узлами/объектами
// и формируют структуру документа, текст и коментарии являются частью дерева

// Document - точка входа в дом, все операции начинаются с нее
// Самые верхние элементы дерева доступны как свойства объекта document

// Получить весь документ:
const htmlElem = document.documentElement;
console.log(htmlElem);

const headElem = document.head;
console.log(headElem);

const bodyElem = document.body;
console.log(bodyElem);

// Первый и последний дочерние элементы-узлы:
const bodyFirstChild = bodyElem.firstChild; // Невидимый нам узел перевода строки
const bodyLastChild = bodyElem.lastChild;

console.log(bodyFirstChild);
console.log(bodyLastChild);

// Список всех дочерних узлов:
const childNodes = bodyElem.childNodes;
console.log(childNodes);

// Проверка наличия дочерних узлов:
console.log(bodyElem.hasChildNodes()); // true

// childNodes - похоже на массив, но это коллекция, методы массивов не будут работать
// но можно перебирать с помощью for of

for (let node of childNodes) {
   console.log(node);
}

// После изменения чего-то в ДОМ, в переменной или константе будет
// находится актуальное состояние с изменениями

// Соседние и родительский узлы:
const prevNode = bodyElem.previousSibling;
const prevNode2 = bodyElem.previousElementSibling; // не учитывает #text - не по узлам, а по элементам
console.log(prevNode2);

const nextNode = bodyElem.nextSibling;
console.log(nextNode);

const parentNode = bodyElem.parentNode;
console.log(parentNode);

const childrenElem = bodyElem.children;
console.log(childrenElem); // не узлы, а HTMLCollection

// Поиск произвольного селектора css, возвращает все элементы соотв. указанному селектору

// Поиск по селектору класса:
const elemsOne = document.querySelectorAll('.lesson__list');
console.log(elemsOne);

// Поиск по селектору тега:
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

// Поиск по смешанному селектору тега и класса:
const elemsThree = document.querySelectorAll('li.lesson__sub-item');
console.log(elemsThree);

// Поиск по тегу первого уровня вложенности
const elemsFour = document.querySelectorAll('.lesson__list>li');
console.log(elemsFour);

// Поиск по нескольким классам:
const elemsFive = document.querySelectorAll('.lesson__list, .lesson__sublist');
console.log(elemsFive);

// Поиск по атрибуту:
const elemsSix = document.querySelectorAll('[data-item]');
console.log(elemsSix);

// Поиск по атрибуту с конкретным значением:
const elemsSeven = document.querySelectorAll('[data-item="89"]');
console.log(elemsSeven);

// Получение элемента коллекции:
const elemsLi = document.querySelectorAll('li');
console.log(elemsLi[1]);

// Это не массив но этот метод работает как и for..of
elemsLi.forEach((item) => {
   console.log(item);
});

// Искать можно не только в объекте document
const subItems = elemsLi[2].querySelectorAll('li');
console.log(subItems);

// Поиск по ID ищет только в document, обязательно уникальный ID
const elemID = document.getElementById('title');
console.log(elemID);

// По тегу элементы ищет не только в document
const elemTags = document.getElementsByTagName('li'); // живая коллекция
console.log(elemTags);
// Поиск по имени класса аналогичен

// querySelectorAll - не живая коллекция, сохраняет данные момента поиска
// getElementsBy... - живые коллекции с актуальными изменениями DOM

// Поиск родителя с указанным селектором, поднимается пока не найдет
const subChild = document.querySelector('.lesson__sub-item');
const parentList = subChild.closest('.lesson__list');
console.log(parentList);

// Проверка на селектор:
console.log(subChild.matches('#red')); //true

// Свойства навигации, выведем следующий объект
console.log(subChild.nextElementSibling);

// Изменение документа _______________________________________________________________

const textElement = document.querySelector('.lesson__text');
// Получаем содержимое объекта:
const textContent = textElement.innerHTML;
console.log(textContent);
// Присваиваем содержимое
textElement.innerHTML = 'Пример для селекторов';
// Меняем содержимое обратно, в константе textContent так и лежит первое значение
textElement.innerHTML = `${textContent}`;

// Содержимое элемента целиком: весь тег с атрибутами и тд
const textOutContent = textElement.outerHTML;
console.log(textOutContent);
// Можно заменить содержимое:
// textElement.outerHTML = '<p>LIVE</p>';
// Но почему-то все равно выведет исходное значение:
console.log(textOutContent);

// Управление текстом:
const textContent2 = document.querySelector('#title2');
// Вывод текст контента:
console.log(textContent2.textContent);
// Запись текста безопасным способом:
textContent2.textContent = '<p>Hello DOM :)</p>'; // Запишет теги как строку, в отличии от inner/outer

// Содержимое текстового узла/комментария:
const getElem = document.querySelector('.lesson__text');
// Находим следующий элемент-узел, имея ввиду комментарий:
const getComment = getElem.nextSibling.nextSibling;
console.log(getComment);
console.log(getComment.data); // data - сам контент комментария
// Можно изменить:
getComment.data = 'Hello world';

// Создание элементов и узлов _____________________________________________________________________

// Создание нового элемента - тега:
const newElement = document.createElement('div');
console.log(newElement);
newElement.innerHTML = 'Wellcome - pasted!';
console.log(newElement);

// Создание текстового узла:
const newText = document.createTextNode('Hello - insert text!');
console.log(newText);

// Вставка элемента в документ: ___________________________________________________________________

getElem.before(newElement); // Вставить перед элементом

getElem.after(newText); // Вставить после объекта

getElem.prepend(newText); // Внутрь в начало объекта

getElem.append(newText, 'Go go go'); // Внутрь в конец объекта: можно вставлять несколько объектов через запятую

// insertAdjacentHTML/Text/Element - Метод вставки:
const getInitial = document.querySelector('.insert-element');
// В скобках два параментра: куда вставить, что вставить:
getInitial.insertAdjacentHTML('afterend', '<span>Span text</span>');
/*
beforebegin - перед элементом
afterbegin - внутрь в начало
beforeend - внутрь в конец
afterend - после элемента
*/

// Перенос элемента _________________________________________________________________________________________

// Получаем первый объект:
const getFirst = document.querySelector('.lesson__text');
// Получаем второй объект:
const getSecond = document.querySelector('.lesson');
// Вставим первый элемент после второго:
getSecond.after(getFirst);

// Клон объекта, чтобы не переносить ________________________________________________________________________
const cloneElement = getFirst.cloneNode(true);
// true - клонировать вместе с содержимым, иначе в скобках ничего не надо писать
getSecond.prepend(cloneElement);

// Удаление объекта ________________________________________________________________________________
// getSecond.remove();

// --------------------------------------------------------------------------------------------------------------
// Управление классами CSS ___________________________________________________________________________________
const getClassElement = document.querySelector('.red');
console.log(getClassElement.className);
// Перезапись классов:
getClassElement.className = 'green lesson__sub-item';

// classList - объект с методами добавления/удаления классов:
console.log(getClassElement.classList);

getClassElement.classList.add('active'); // Добавить класс
getClassElement.classList.remove('active'); // Удалить класс
getClassElement.classList.toggle('active'); // Добавить если нет/удалить если есть
getClassElement.classList.contains('active'); // Проверка на наличие класса true/false

// Можно перебирать классы:
for (let classItem of getClassElement.classList) {
   console.log(classItem);
}

// Задать стиль: _____________________________________________________________________________________________________
const styleElem = document.querySelector('h1');
styleElem.style.color = 'blue';
// Для свойств из нескольких слов используется camelCase
styleElem.style.marginBottom = '10px';
styleElem.style.zIndex = '10';
// Получение значения таких свойств:
console.log(styleElem.style.zIndex);
// Сброс стиля - присвоить пустую строку:
styleElem.style.marginBottom = ''; // стиль удалиться из ДОМ

// Полная перезапись стилей:
styleElem.style.cssText = `margin-bottom: 30px; color: red;`;

// Вычисляемое значение стиля, если не указано в атрибуте slyle:
const elementStyle = getComputedStyle(styleElem); // Возвращает вычисленные стили - целую кучу
console.log(elementStyle.fontSize); // Выведет размер шрифта

// Получить значение стиля псевдоэлемента:
const elementBeforeStyle = getComputedStyle(styleElem, '::before');
console.log(elementBeforeStyle.backgroundColor);

// Получить число без единицы измерения - пикселей
console.log(parseInt(elementStyle.fontSize));

// Работа с атрибутами тега, как со свойствами объекта:
const getLink = document.querySelector('.lesson__link');
console.log(getLink.href); // Вывод значения свойства

// Получить список доступных свойств:
console.dir(getLink);

// Проверяем наличие атрибута:
console.log(getLink.hasAttribute('name')); // false
// Получаем значение атрибута:
console.log(getLink.getAttribute('name'));
// Устанавливаем значение атрибута:
getLink.setAttribute('name', 'value');
// Удаляем атрибут:
getLink.removeAttribute('name');

// Получить имя тега:
console.log(getLink.tagName);

// Скрыть/показать элемент:
// getLink.hidden = true;

// Homework ____________________________________________________________________________________________________________
// Task 1. Получить в переменную элемент с атрибутом data-say-hi и прочитать значение атрибута
const hw1 = document.querySelector('[data-say-hi]');
console.log(hw1.dataset.sayHi); // Вместо data пишем dataset, а потом перечисляем имена в camelCase

// Task 2. Получить в переменную элемент с текстом: Sub-item 3
const hw2 = document.querySelectorAll('li');
let hw2Result;
for (let liItem of hw2) {
   if (liItem.innerHTML === 'Sub-item 3') {
      hw2Result = liItem;
   }
}
console.log(hw2Result);
console.log(hw2Result.innerHTML);

// Task 3. Получить в переменную коллекцию с определенным классом:
const hw3 = document.querySelectorAll('.green');
console.log(hw3);

// Task 4. Ответить - куда добавиться элемент:
const getHw4Element = document.querySelector('.lesson__sublist');
getHw4Element.insertAdjacentHTML('beforeend', '<li>Sub-item 4</li>');
// Добавиться внурть в конец
