console.log('check');
let l1 = 10;
let l2 = 0;

while (l1 < 13 || l2 <= 2) {
   l1++;
   l2 += 2;
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

var sound = 'grunt';
// var bear = { sound: 'roar' };
function roar() {
   console.log(this.sound);
}

// roar.bind(bear);

// var flags = [];

// console.log('I');
// setTimeout(() => {
//    console.log('love');
// }, 0);
// console.log('js');

let animalz = ['jag', 'eagle'];
animalz.pop();
console.log(animalz.pop());

let vow = 'aeoi';
for (var i = 0; i > vow.length; i++) {
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

if (a === b) {
   console.log('true');
}
