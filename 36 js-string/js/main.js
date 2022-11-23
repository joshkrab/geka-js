// Табуляция - отступ
let text = 'Привет\n\t вы на канале\n\t\t фрилансер';
console.log(text);

// Символы, иконки:
let icons = '\u00A9 \u{1F60D}';
console.log(icons);

// Выводит длину строки:
let textLengs = 'Привет!';
console.log(textLengs.length);
// First symbol
console.log(textLengs[0]);
// Last symbol
console.log(textLengs[textLengs.length - 1]);

// Вывести все символи - перебрать по одному
for (const char of textLengs) {
   console.log(char);
}

// Меняем регистр к большому и обратно
console.log(textLengs.toUpperCase());
console.log(textLengs.toLowerCase());

// Поиск подстроки:
console.log(textLengs.indexOf('рив'));
// Индекс найденого начиная с заданного 3, выведет -1 - не найдено
console.log(textLengs.indexOf('рив', 3));

// Современные методы:
let textUA = 'Привіт!';
console.log(textUA.includes('рив')); // true
console.log(textUA.includes('рив', 3)); // false

console.log(textUA.startsWith('рив')); // false
console.log(textUA.endsWith('!')); // true

// Регистр имеет значение:
let searchText = 'пР';
console.log(textUA.toLowerCase().includes(searchText.toLowerCase()));

// Получение части строки(подстроки): str.slice(start, end)
console.log(textUA.slice(1, 2));
console.log(textUA.slice(-2, -1)); // отсчет с конца строки
console.log(textUA.slice(1)); // от 1 до конца

// Сравнение строк, алфавитный порядок и тд
console.log('A' > 'B'); // false
console.log('a' > 'B'); // true

// Домашка
// Задача 1. Верна ли запись - нет, небыло обратных ковычек для функционала
let fls = 'freelancer';
let res1 = `Hello, i'm ${fls}`;
console.log(res1);

// Задача 2. Получить символ н строки
console.log(fls.slice(-4, -3));

// Задача 3. Верно? Нужно получить 579
console.log(123 + '456'); // нет, строка

// Задача 4. Получить строку в верхнем регистре
let upPER = 'guitar';
console.log(upPER.toUpperCase());

// Задача 5. Получить lan
console.log(fls.slice(4, 7));

// Задача 6. true or false? false, true - if 3
let text6 = 'фрилансер';
console.log(text6.includes('лан', 4));

// Дістати хост нейм з повного урл
function domainName(url){
   let result;
    if (url.includes('www.')){
      result = url.split('www.')[1]
   }  else if (url.includes('//')) {
      result = url.split('//')[1]
   } else {
     result = url;
   }
   return result.split('.')[0]
}
console.log(domainName("http://google.com"));