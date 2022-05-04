// Отримати усі форми в документі:
//console.log(document.forms); // HTMLCollection

// Отримати конкретную форму, як з масиву:
const firstForm = document.forms[0];

// Атрібут name є ключем масиву/об'єкту:
console.log(document.forms.main);

// Різниця колекцій:
console.log(document.querySelectorAll('form')); // NodeList
console.log(document.forms); // HTMLCollection - жива

// Додавання форми на сторінку:
document.body.insertAdjacentHTML(
   'beforeend',
   `<form name="some" action="#">
      Додана форма в js
   </form>`
);

// Отримати елементи форми:
console.log(firstForm.elements);

// Отримати елемент форми по атрібуту(ключ) name:
console.log(firstForm.nameinput);

// Якщо у нас два елемента з однаковим name наприклад радіо інпут
console.log(firstForm.nameRadio); // RadioNodeList

// Отримати батьківський об'єкт - форму елемента:
const someInput = firstForm.nameInput;
console.log(someInput.form); // Виведе форму

// Отримати значення інпуту чи тексареї:
const someTextArea = firstForm.nameTextarea;
someTextArea.value; // Поверне значення атрібуту value в інпуті, чи введене значеня між тегів textarea

// Можно привласнити інше значення:
// someTextArea.value = 'New value from js';
// someInput.value = 'New value added';

// Отримати значення елементів колекції, таких як радіо або чекбокс:
console.log(firstForm.nameRadio[1].value);
console.log(firstForm.nameRadio[1].checked);

// Інпуту типу файл ми не можемо зазначити значення, буде помилка
// Але миможемо очистити поле - задати порожню строку:
const someFileInput = firstForm.nameFile;
someFileInput.value = '';

// Робота з елементами select/option ______________________________________________________________________________________
const someSelect = firstForm.nameSelect;

// Отримати усі option:
console.log(someSelect.options); // HTMLOptionsCollection

// Отримати індекс вибраного option
console.log(someSelect.selectedIndex); // 0

// Отримати значення вибраного option
console.log(firstForm.nameSelect.value); // 1

// Текст обраного option
console.log(firstForm.nameSelect.options[someSelect.selectedIndex].text);

// Елементи option мають властивості:
// Чи обрана опція:
console.log(firstForm.nameSelect.options[1].selected); // false
console.log(firstForm.nameSelect.options[1].index); // 1 - індекс
console.log(firstForm.nameSelect.options[1].text); // 30 - текст

// Привласнити значення:
// firstForm.nameSelect.options[1].selected = 'true';
// firstForm.nameSelect.options[1].index = 0; // Неспрацювало, але має працювати :)
firstForm.nameSelect.options[1].text = 'mamba';

// Додати нову опцію:
// option = new Option(text, value, defaultSelected(add html atribut selected), selected);
let newOption = new Option('newText', 'newValue', true, true);
someSelect.append(newOption);

// Отримати усі вибрані значення, у випадку мультиплай:
let selectedOptions = Array.from(firstForm.nameSelect.options)
   .filter((option) => option.selected)
   .map((option) => option.value);
console.log(selectedOptions);

// Події форм та їх елементів _____________________________________________________________________________________
// Фокусування focus/blur

// focus - при кліку миші, або натисканням клавіши Tab, або html атрібут autofocus
// blur - момент втрати фокуса, при переході кудись, в цей момент зручно перевірити введені дані

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const somePlaceholder = mainFormInput.placeholder;

// В момент фокусу приберемо плейсхолдер:

mainFormInput.addEventListener('focus', function (event) {
   mainFormInput.placeholder = '';
});

mainFormInput.addEventListener('blur', function (event) {
   mainFormInput.placeholder = somePlaceholder;
});

// Методи focus/blur
mainFormInput.focus(); // Буде автофокус елемента
setTimeout(() => {
   mainFormInput.blur();
}, 3000); // Фокус зникне за 3 секунди

// focus/blur - працюють для кнопок, селектів та інпутів, для звичайних блоків div, header... за умовчанням не працює
// але можна додати за допомогою tabindex

// За умовчанням tabindex - задає порядок перехіду між елементами клавішею Tab
//  tabindex="0" - поставить елемент в один ряд з елементами, без вказаного  tabindex, наприклад щоб отримати фокус

//  tabindex="-1" - фокусування тільки програмно, при переході клавішею Tab цей елемент ігноруватиметься

// Приклад:
const divLesson = document.querySelector('.lesson');

divLesson.addEventListener('focus', function (event) {
   divLesson.classList.add('_focus');
   console.log('Наш дів в фокусі, ура! :)');
});

divLesson.addEventListener('blur', function (event) {
   divLesson.classList.remove('_focus');
   console.log('Фокус кудись пішов :(');
});

// Отримати поточний активний документ:
console.log(document.activeElement);

// Події focusin/focusout - працюють так само, але вспливають
mainForm.addEventListener('focusin', function (event) {
   mainForm.classList.add('_active');
});
mainForm.addEventListener('focusout', function (event) {
   mainForm.classList.remove('_active');
});

// 22min
