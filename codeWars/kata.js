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
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
