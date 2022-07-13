// Задачкі кодВарс: ---------------------------------------------------------------------------

const reverseSeq = (n) => {
   let arr5 = [0];
   if (n > 0) {
      arr5 = [];
      for (let i = 1; i <= n; i++) {
         arr5.unshift(i);
      }
   }
   return arr5;
};
console.log(reverseSeq(8));

// --------------------------------------------------------
function countPositivesSumNegatives(input) {
   let arr = [];
   if (!Array.isArray(input) || input.length === 0) {
      return arr;
   } else {
      arr = [0, 0];
      input.forEach(function (item, index, array) {
         if (item > 0) {
            arr[0] += 1;
         }
         if (item < 0) {
            arr[1] += item;
         }
      });
      return arr;
   }
}
console.log(countPositivesSumNegatives());
// --------------------------------------------------------

function isIsogram(str) {
   for (i = 0; i < str.length; i++) {
      if (str.toLowerCase().split(str[i].toLowerCase()).length - 1 > 1) {
         return false;
      }
   }
   return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));

// --------------------------------------------------------

function reverseWords(str) {
   return str
      .split(' ')
      .map((item, index, array) => item.split('').reverse().join(''))
      .join(' ');
}
console.log(reverseWords('This is an example!'));

// --------------------------------------------------------

function summation(num) {
   if (num > 0) {
      let arr = [];
      arr.length = num;
      for (let index = 0; index < num; index++) {
         arr[index] = 0;
      }

      let result = arr.reduce(function (sum, item, index, array) {
         item = index + 1;

         return item + sum;
      }, 0);

      return result;
   }
}
console.log(summation(4)); // Сума чисел от 1 до введеного

// --------------------------------------------------------

// Повернути 1 або 2 середніх сімвола слова:
const midCh = (str) => {
   const arr = str.split('');

   if (arr.length % 2 == 0) {
      return arr[arr.length / 2 - 1] + arr[arr.length / 2];
   } else {
      return arr[Math.floor(arr.length / 2)];
   }
};

console.log(midCh('middle'));
// --------------------------------------------------------

function sum(arr) {
   return arr.reduce(function (sum, item, index, array) {
      sum += item;

      return sum;
   }, 0);
}
console.log(sum([-2.398]));

// --------------------------------------------------------

function SeriesSum(n) {
   let sum = 1;
   let x = 4;

   if (n === 0) {
      sum = 0;
   } else {
      for (let i = 1; i < n; i++) {
         sum += 1 / x;
         x += 3;
      }
   }
   return sum.toFixed(2);
}

console.log(SeriesSum(2));
// --------------------------------------------------------

// задача співбесіди:
const a = {
   a: 10,
};
const b = {
   a: 10,
   b: {
      a: 10,
      b: 15,
      c: [1, 2],
   },
};

// як зробити копію об'єкта?
let newObject = Object.assign({}, b); // Дублікат робить тільки зовнішнього об'єкта
newObject.a = 200;
newObject.b.a = 250;
b.b.c = 11;

console.log(b);
console.log(newObject);

// --------------------------------------------------------
// Дають два числа, якщо обидва числа парні, тоді вивести добуток чисекл
// якщо непарні обидва, вивести суму чисел
// якщо одне непарне, вивести це непарне число

function getNum(a, b) {
   if (a % 2 && b % 2) {
      return a + b;
   } else if (a % 2 === 0 && b % 2 === 0) {
      return a * b;
   }
   return a % 2 ? a : b;
}
console.log(getNum(11, 14));

// --------------------------------------------------------
// Знайти вагу усіх речей, ціна яких більше 80, та кількість меньше 7
const food = [
   { name: 'паста "Болонезье"', weight: 350, price: 68, quantity: 10 },
   { name: 'спагетті з овочами', weight: 350, price: 56, quantity: 8 },
   { name: 'пене з куріним феле', weight: 400, price: 68, quantity: 16 },
   { name: 'піца з ананасами', weight: 675, price: 139, quantity: 30 },
   { name: 'піца 4 сира', weight: 1600, price: 339, quantity: 8 },
   { name: 'піца "Італьяні"', weight: 740, price: 159, quantity: 5 },
   { name: 'салат з сьомгой', weight: 230, price: 87, quantity: 4 },
   { name: 'салат з креветкою', weight: 230, price: 69, quantity: 5 },
];

function getWeight(arr) {
   let filterFood = arr.filter((a) => a.price > 80 && a.quantity < 7);
   console.log(filterFood);
   return filterFood.reduce(
      (acc, item) => (acc += item.weight * item.quantity),
      0
   );
} // Щоб був один цикл замість двох, можна якось циклом for перебрати

console.log(getWeight(food));
// ------------------------------------------------------------------------------------------------------------------------

// Вивести (Кількість символів після діапазону a-m)/(загальну кількість символів)
function printer_error(s) {
   return `${s
      .split('')
      .reduce((acc, item) => (/[^a-m]/i.test(item) ? (acc += 1) : acc), 0)}\/${
      s.split('').length
   }`;
}

console.log(printer_error('aaaxbbbbyyhwawiwjjjWwm'));

// ------------------------------------------------------------------------------------------------------------------------
// Повторити строку n раз:
function repeatStr(n, str) {
   return str.repeat(n);
}
console.log(repeatStr(4, 'Go '));
// ------------------------------------------------------------------------------------------------------------------------
// true якщо перший аргумент закінчується другим:
function solution(str, end) {
   return str.endsWith(end);
}

console.log(solution('abcde', 'cde'));
// ------------------------------------------------------------------------------------------------------------------------
// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.
function sumBinary(a, b) {
   return (a + b).toString(2);
}
console.log(sumBinary(5, 9));

// ------------------------------------------------------------------------------------------------------------------------
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.\
// The parseInt function converts strings to numbers, and it takes a second argument specifying
// the base in which the string representation is:
function arrToDec(arr) {
   return parseInt(arr.join(''), 2);
}
console.log(arrToDec([1, 1, 1, 1]));
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);

// ------------------------------------------------------------------------------------------------------------------------
// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

const filter_list = (arr) => {
   return arr.filter(function (item, index, array) {
      return typeof item !== 'string';
   });
};
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

// ------------------------------------------------------------------------------------------------------------------------
function vowelsCount(str) {
   const vowels = 'aeiou';
   let res = 0;
   for (let index = 0; index < str.length; index++) {
      if (vowels.indexOf(str[index]) > -1) {
         res += 1;
      }
   }
   return res;
}
console.log();

// ------------------------------------------------------------------------------------------------------------------------
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7:
function category(arr) {
   return arr.map((item, index, array) =>
      item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open'
   );
}
console.log(
   category([
      [18, 20],
      [45, 2],
      [61, 12],
      [37, 6],
      [21, 21],
      [78, 9],
   ])
);

// ------------------------------------------------------------------------------------------------------------------------
// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
function sumN(n) {
   let arr = [];
   let start = 1;
   for (let index = 0; index < n; index++) {
      arr[index] = [];
      arr[index].length = index + 1;
      for (let i = 0; i < arr[index].length; i++) {
         arr[index][i] = start;
         start += 2;
      }
   }
   return arr[n - 1].reduce((a, b) => a + b);
}
// return n**3
console.log(sumN(2));

// ------------------------------------------------------------------------------------------------------------------------
// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing distinct letters - each taken
// only once - coming from s1 or s2.

// lastIndexOf() позволяет возвратить последний индекс искомого элемента в массиве при первом совпадении,
// или -1 если элемент не найден.
function longest(a, b) {
   let arr = (a + b).split('').sort();

   return arr
      .filter(function (item, index, array) {
         return array.lastIndexOf(item) === index; // вернём уникальные элементы
      })
      .join('');
}
console.log(longest('axyaabbbccccdefww', 'babcdefklmopqwxy'));
// ------------------------------------------------------------------------------------------------------------------------

function XO(str) {
   return (
      str.split('').filter((item) => {
         return item.toLowerCase() === 'x';
      }).length ===
      str.split('').filter((item) => {
         return item.toLowerCase() === 'o';
      }).length
   );
}
console.log(XO('xo'));

// ------------------------------------------------------------------------------------------------------------------------

function sumRange(a, b) {
   let max;
   let min;
   a > b && b < a ? ((max = a), (min = b)) : ((min = a), (max = b));
   let res = 0;
   for (let i = min; i <= max; i++) {
      res += i;
   }

   return res;
   //  max = Math.max(a, b); - є таке, не знав
}
console.log(sumRange(2, 2));

// ------------------------------------------------------------------------------------------------------------------------
// Кожна сторона трикутника менша за суму двох інших сторін.
function triangle(a, b, c) {
   return a < b + c && b < a + c && c < a + b;
}

// ------------------------------------------------------------------------------------------------------------------------

// Оператор спред ... дозволяє розкласти масив на окремі значення.
var min = function (list) {
   return Math.min(...list);
};

var max = function (list) {
   return Math.max(...list);
};
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

// ------------------------------------------------------------------------------------------------------------------------
// Перевірка що пін-код скдадаєтся з 4 або 6 цифр, та не включає нічого крім цифр
function isNan(n) {
   return /^[0-9]{4}$/.test(n) || /^[0-9]{6}$/.test(n);
}
console.log(isNan('00000'));

// ------------------------------------------------------------------------------------------------------------------------
// Примножувати кожну цифку числа, поки не буде одинарним:

function persistence(num) {
   if (String(num).split('').length === 1) {
      return 0;
   } else {
      let result = 1;

      return (result += persistence(
         String(num)
            .split('')
            .reduce((sum, item) => sum * item)
      ));
   }
}
console.log(persistence(999));

// ------------------------------------------------------------------------------------------------------------------------
// Сортування по числу в словах?
function sortNum(str) {
   return str
      .split(' ')
      .sort((a, b) => {
         return Number(a.match(/(\d+)/g)[0]) - Number(b.match(/(\d+)/g)[0]);
      })
      .join(' ');
}
console.log(sortNum('4of Fo1r pe6ople g3ood th5e the2'));
// Метод .match робить пошук у рядку по рег.виразу, та повертає масив з результатами. (глобальний об'єкт RegExp)
// Метод сортування масиву чисел - arr.sort((a, b) => a - b})

// ------------------------------------------------------------------------------------------------------------------------
// Write a function to split a string and convert it into an array of words.
function strToArray(str) {
   return str.split(' ').map((item) => `"${item}"`);
}

// ------------------------------------------------------------------------------------------------------------------------
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
function nameIn(name) {
   return name
      .split(' ')
      .map((item) => `${item[0].toUpperCase}.`)
      .join('.');
}

// ------------------------------------------------------------------------------------------------------------------------
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
   return array.map((item) => item * -1);
}

// ------------------------------------------------------------------------------------------------------------------------
// Перевірка на pangram - це коли в реченні є усі букви алфавиту
function isPangram(str) {
   return (string.toLowerCase().match(/([a-z])(?!.*\1)/g) || []).length === 26;
}

// ------------------------------------------------------------------------------------------------------------------------
// Дано два масива чи об'єкта а & b, перевірити чи усі елементи масива b є квадратами елементів а, незалежно від порядку:
function comp(a, b) {
   if (a && b) {
      let arr = a.map((item) => item * item).sort((a, b) => a - b);
      let arr2 = b.sort((a, b) => a - b);
      if (
         arr.length == arr2.length &&
         arr.every((item, index) => arr2[index] == item)
      ) {
         return true;
      }
   }
   return false;
}
console.log(
   comp([10, 2, 0, 5, 8, 4, 9, 7, 3, 1], [1, 100, 9, 25, 64, 49, 81, 1, 16, 4])
);

// ------------------------------------------------------------------------------------------------------------------------
// You are given an array(list) strarr of strings and an integer k.
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.
function longestN(strarr, k) {
   let arr = [];

   for (let i = 0; i < strarr.length; i++) {
      arr.push(strarr.slice([i], [i + k]).join(''));
   }
   return strarr.length === 0 || k > strarr.length || k <= 0
      ? ''
      : arr.reduce((max, n) => (max.length >= n.length ? max : n), '');
}
console.log(
   longestN(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)
);

// ------------------------------------------------------------------------------------------------------------------------
// Дають рядок, вивести номери кожної букви по алфавіту.
function symbPos(str) {
   return str.toLowerCase().match(/[a-z]/g) // Якщо в рядку були букви
      ? str
           .toLowerCase()
           .match(/[a-z]/g)
           .map((item) => item.charCodeAt(0) - 96)
           .join(' ')
      : '';
}
console.log(symbPos("The sunset sets at twelve o' clock."));

// ------------------------------------------------------------------------------------------------------------------------
// Повернути число - скільки сімволив мають дублікат в рядку:
function dublicateCount(str) {
   const sums = {};
   str.toLowerCase()
      .split('')
      .map(function (e) {
         sums[e] = !sums[e] ? 1 : sums[e] + 1;
      });
   let res = 0;
   for (let key in sums) {
      if (sums[key] > 1) {
         res++;
      }
   }
   return res;
}
console.log(dublicateCount('indivisibility'));

// ------------------------------------------------------------------------------------------------------------------------
// Розрахувати скільки часу треба черзі в супермаркеті, знаючи час людей та кількість кас:
function queueTime(arr, n) {
   const tills = new Array(n).fill(0); // Створили масив та заповнили його нулями

   // goes through the queue of customer waitTimes
   for (let waitTime of arr) {
      // finds the till with the least wait time on it, adds the next customer's time to it
      // Знаходимо касу з найменшим часом очікування, додає до неї час наступного клієнта
      // Метод Math шукає у рядку, та повертає масив з результатом, тому розвертаемо спредом:
      const lowestWaitTill = tills.indexOf(Math.min(...tills));
      tills[lowestWaitTill] += waitTime;
   }
   // end result is that the waitTimes (load) on the tills are distributed optimally.
   // The waitTime of the till with the heaviest load represents the total time taken
   return Math.max(...tills);
}
console.log(queueTime([10, 2, 3, 3], 2)); // 10

// ------------------------------------------------------------------------------------------------------------------------
// Видалити з масива а елементи рівні масиву b, та повернути масив а без видалених елементів.
const arrayDiff = (a, b) => {
   let arr = a;
   for (let item of b) {
      arr = arr.filter((i) => {
         return i !== item;
      });
   }
   return arr;
};
console.log(arrayDiff([1, 2, 3], [1, 2]));
// ------------------------------------------------------------------------------------------------------------------------
// Зроби з числа найбільше - відсортувати від більшого
function sortMax(number) {
   return String(number).split('').sort().reverse().join('');
}
console.log(sortMax(0));
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
