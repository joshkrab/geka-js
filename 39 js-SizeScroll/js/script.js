// Размеры окна браузера:

const mainElement = document.documentElement;
const mainWidth = mainElement.clientWidth;
const mainHeigth = mainElement.clientHeight; // Доступные размеры окна

console.log('Ширина окна браузера: ' + mainWidth);
console.log('Высота окна браузера: ' + mainHeigth);

// Ширина и высота с полосами прокрутки:
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);

// Размеры документа с прокруткой:
// Используется метод определения максимального значения:

const docWidth = Math.max(
   document.body.scrollWidth,
   document.documentElement.scrollWidth,
   document.body.offsetWidth,
   document.documentElement.offsetWidth,
   document.body.clientWidth,
   document.documentElement.clientWidth
);

const docHeight = Math.max(
   document.body.scrollHeight,
   document.documentElement.scrollHeight,
   document.body.offsetHeight,
   document.documentElement.offsetHeight,
   document.body.clientHeight,
   document.documentElement.clientHeight
);

console.log(docWidth);
console.log(docHeight);

// Количество прокрученых пикселей:
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;
console.log(windowScrollTop); // Обновить после скрола
console.log(windowScrollLeft);

// Управление прокруткой страницы __________________________________________________
function setScrollBy() {
   // Прокручивание (x, y) относительно текущего положения в px:
   window.scrollBy(0, 50);
   const windowScrollTop = window.pageYOffset;
   console.log(windowScrollTop);
}

let but50 = document.querySelectorAll('.scroll50');

// for (let item of but50) {
//    item.addEventListener('click', function () {
//       setScrollBy();
//    });
// }

but50.forEach((item) => {
   item.addEventListener('click', function () {
      setScrollBy();
   });
});

// Прокрутка на абсолютные координаты scroll/scrollTo - идентичны
function setScrollTo() {
   window.scrollTo(0, 50);
   const windowScrollTop = window.pageYOffset;
   console.log(windowScrollTop);
}

const scrollTo50 = document.querySelector('.scroll-to');
scrollTo50.addEventListener('click', function () {
   setScrollTo();
});

// Прокрутка на абс. коонд. с опциями:
function setScrollToOption() {
   // Не работает в сафари
   window.scrollTo({
      top: 500,
      left: 0,
      // smooth, instant, auto(default)
      behavior: 'smooth',
   });
}

const scrollToOp = document.querySelector('.scroll-to-option');
scrollToOp.addEventListener('click', function () {
   setScrollToOption();
});

// Прокрутка до элемента вверху/внизу экрана,
// в зависимости от аргумента true/false
function setScrollIntoView(value) {
   const selectedElemP = document.querySelector('.scroll-p');
   selectedElemP.scrollIntoView(value);
}

document
   .querySelector('.scroll-i-v-false')
   .addEventListener('click', function () {
      setScrollIntoView(false);
   });

// Тоже самое но с опциями: в сафари не работает
function setScrollIntoOption() {
   const selectedElemP = document.querySelector('.scroll-p');
   selectedElemP.scrollIntoView({
      // Позиция по вертикали: start, center(dafault), end, nearest
      block: 'center',
      // По горизонталі
      inline: 'nearest',
      // smooth, instant, auto(default)
      behavior: 'smooth',
   });
}

document
   .querySelector('.scroll-i-v-option')
   .addEventListener('click', function () {
      setScrollIntoOption();
   });

// Стоп/старт прокрутки:
function stopStartScroll() {
   document.body.classList.toggle('scroll-lock');
}

document.querySelector('.stop-scroll').addEventListener('click', function () {
   stopStartScroll();
});

// Метрики элементов на странице _____________________________________________________________________
const block = document.querySelector('.lesson__block');
// Получаем родителя, относительно которого позиционирован наш объект:
const elemOffsetParent = block.offsetParent;
console.log(elemOffsetParent);
// offsetParent вернет null, если элемент скрыт, если это body/html или fixed.

// Позиции относительно родителя:
const elemOffsetLeft = block.offsetLeft;
const elemOffsetTop = block.offsetTop;
console.log(elemOffsetLeft);
console.log(elemOffsetTop);

// Получаем размеры объекта: ширину и высоту:
const elemOffsetWidth = block.offsetWidth;
const elemOffsetHeight = block.offsetHeight;
console.log(elemOffsetWidth);
console.log(elemOffsetHeight);

// Получаем отступы внутренней части от внешней: border+scroll
const elemClientTop = block.clientTop;
const elemClientLeft = block.clientLeft;
console.log(elemClientTop);
console.log(elemClientLeft);

// Размеры без border и scroll:
const elemClientWidth = block.clientWidth;
const elemClientHeight = block.clientHeight;
console.log(elemClientWidth);
console.log(elemClientHeight);

// Размеры включая невидемую прокручеваемую часть:
// Также без border и scroll:
const elemScrollHeight = block.scrollHeight;
const elemScrollWidth = block.scrollWidth;
console.log(elemScrollHeight);
console.log(elemScrollWidth);

// Положение прокрученной части - можно задавать:
// block.scrollTop = 100;
const elemScrollLeft = block.scrollLeft;
const elemScrollTop = block.scrollTop;

console.log(elemScrollLeft);
console.log(elemScrollTop);
console.log(block.scrollTop); // Почему так не пишет хз, наверно не наглядно

// Методы управления прокруткой работают и для блока:
function scrollBlock20() {
   block.scrollBy({
      top: 20,
      left: 0,
      behavior: 'smooth',
   });
}

document.addEventListener('click', function () {
   scrollBlock20();
});

// Координаты _______________________________________________________________________________

// Относительно окна браузера (как позишн фиксед): clientX/clientY

// Относительно документа (как абсолют): pageX/pageY

// Получаем координаты относительно окна браузера:
const getItemCoord = block.getBoundingClientRect(); // Создает объект
console.log(getItemCoord);
// свойство bottom - координата нижнего края объекта, но считается также сверху

// Получаем свойство объекта:
console.log(block.getBoundingClientRect().left);

// Получаем координату относительно документа:
const getBlockTop = block.getBoundingClientRect().top;
const getItemDocCoord = getBlockTop + window.pageYOffset;
console.log(getBlockTop);
console.log(getItemDocCoord);

// Получение объекта по координатам: относительно окна браузера:
const elemByCoord = document.elementsFromPoint(200, 200);
console.log(elemByCoord);

// Home work __________________________________________________________________________________________

// Task 1. What is the scrollbar width?
const hw1Elem = document.querySelector('.lesson__block');
// Из общей ширины вычитаем ширину без бордер+прокрутка и дважды ширину бордера
console.log(hw1Elem.offsetWidth - hw1Elem.clientWidth - hw1Elem.clientLeft * 2);

// Task.2 Scroll broser 100px with delay 1s
function scrollDelay() {
   window.scrollBy(0, 100);
}
setTimeout(scrollDelay, 1000);

// Task.3 Сoordinates of three page elements:
const hw3One = document.querySelector('.scroll-block');
const hw3Two = document.querySelector('.lesson');
const hw3Three = document.querySelector('.stop-scroll');
console.log(hw3One.getBoundingClientRect());
console.log(hw3Two.getBoundingClientRect());
console.log(hw3Three.getBoundingClientRect());
// Координаты относительно документа:
console.log(
   'По оси Х: ' +
      (hw3Two.getBoundingClientRect().left + window.pageXOffset) +
      '  По оси У: ' +
      (hw3Two.getBoundingClientRect().top + window.pageYOffset)
);
