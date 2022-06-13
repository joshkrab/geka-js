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
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
