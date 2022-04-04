console.log('check');
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
