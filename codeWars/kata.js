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
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
