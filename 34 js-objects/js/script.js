// Создание объекта:

let userInfo = new Object(); // Синтаксис "конструктор объекта"
// or
let userInfo2 = {}; // Синтаксис "литерал объекта"

// Свойство объекта: ключ + значение:
let myObject = {
   name: 'Вася', // - cвойство объекта
   age: 30,
   // Если имя ключа состоит из более одного слова, то записывать так:
   'likes javascript': true,
};

// Выводим объект:
console.log(myObject);
// Выводим значение одного свойства
console.log(myObject.name);
// Выводим значение свойства с многословным именем:
console.log(myObject['likes javascript']);

// Вычисляемое или передаваемое имя свойства/ключа:
let firstPart = 'likes';
let userInfo3 = {
   name: 'Вася',
   age: 30,
   [firstPart + ' javascript']: true,
};
console.log(userInfo3['likes javascript']);

// Просто по имени переменной:
let firstPart2 = 'likes';
let userInfo4 = {
   name: 'Вася',
   age: 30,
   [firstPart2]: true,
};
console.log(userInfo4[firstPart2]);

// Преимущество квадратных скобок []
let key = 'name';
// Указываем переменную как имя ключа объекта
console.log(userInfo4[key]);

// Зарезервированные слова можно использовать в качестве имен/ключей свойств:
let names = {
   let: 'Sergey',
   for: 32,
};
console.log(names.let);
console.log(names.for);

// Если задать имя = 0, то это будет строка:
let nameNumber = {
   0: 'Sasha',
};
// Вызвать можно двумя способами
console.log(nameNumber[0]);
console.log(nameNumber['0']);

// --------------------------------------------------------------------------

//  Тип данных Symbol - уникальный идентификатор
// Создаем символ id с описанием(именем) "id"
let id = Symbol('id');
let userId = {
   name: 'Ihor',
   age: 38,
   [id]: 'Some value',
};
console.log(userId);
console.log(typeof id);

// ---------------------------------------------------------------------------
//getUnique('Test'); // Symbol('Test') задачка від Ромки
function getUnique(value) {
   let id = Symbol(`'${value}'`);
   return id;
}
console.log(getUnique('Test'));

// Вложенность ___________________________________________________________

let userParent = {
   name: 'Serj',
   age: 20,
   address: {
      city: 'Kharkiv',
      street: 'Freedom',
   },
};

console.log(userParent);
console.log(userParent.address.city);

// --------------------------------------------------------------------------

// Свойство из переменной:
function makeUserInfo(name, age) {
   // Возвращаем объект с принятыми параметрами:
   return {
      name: name,
      age: age,
   };
}
let userAddress = makeUserInfo('Vasya', 30);
console.log(userAddress);
let userAddress2 = makeUserInfo('Катя', 26);
console.log(userAddress2);

// ---------------------------------------------------------------------------------

// Изменение объекта ___________________________________________________________________

// Добавление свойств:
let littleInfo = {
   name: 'Boris',
};

// Добавляем свойства:
littleInfo.age = 30;
// Если имя из 2х слов
littleInfo['likes javascript'] = true;
// Добавляем свойство с объектом:
littleInfo.address = {
   city: 'Kharkiv',
   street: 'Moskalevskaya',
};
console.log(littleInfo);
console.log(littleInfo.address);

// Удаление свойств:
delete littleInfo.age;
delete littleInfo['likes javascript'];
console.log(littleInfo);

// Изменение значение свойств
littleInfo.name = 'Olga';
console.log(littleInfo);

// ------------------------------------------------------------------------------

// Копирование объектов:
let newItem = littleInfo;
newItem.name = 'Marina';
// Измениться исходный объект, т.е. неважно каким "ключем" открыли "коробку"
// Объект остается одним и темже
console.log(littleInfo);

// Дублирование объектов Object.assign(куда копируем, что копируем);
let newObject = Object.assign({}, littleInfo);
newObject.age = 18;
console.log(newObject);

// Этим же методом можно добавлять свойства в объект
Object.assign(newObject, { ['like js']: true, city: 'Kiev' });
console.log(newObject);

// -------------------------------------------------------------------------------

// Проверка существования свойства

let userCheck = {
   name: 'Roman',
   age: 34,
   // super: {
   //    person: 'man',
   // },
   nameU: undefined,
};

if (userCheck.age) {
   console.log(userCheck);
}

// Синтаксис "опциональная цепочка" - если такого свойства нет,
// чтобы не выдавало ошибку
console.log(userCheck?.super?.person);

// Оператор "in"
if ('name' in userCheck) {
   console.log(userCheck.name);
}

// Пример отличия, для чего нужен "in"
if (userCheck.nameU) {
   // false
}
if ('nameU' in userCheck) {
   // true
}

// -----------------------------------------------------------------------------

// Цикл "for...in" - для перебора свойств объекта
// Этот цикл отличается от for(;;)

let userFor = {
   name: 'Petr',
   age: 45,
   address: {
      city: 'Poltava',
      street: 'Lopanskaya',
   },
};

for (let key in userFor) {
   // Тело цикла выполняется для каждого свойства объекта
   // ключ:
   console.log(key);
   // значение ключа:
   console.log(userFor[key]);
}

for (let key in userFor.address) {
   // Тело цикла выполняется для каждого свойства объекта
   // ключ:
   console.log(key);
   // значение ключа:
   console.log(userFor.address[key]);
}

// ---------------------------------------------------------------------------------

// Методы объекта:
let userObjectFunc = {
   name: 'Ivan',
   // Далее функция в качестве значения свойства объекта:
   showInfo: function () {
      console.log(`Нашего тромбониста зовут: ${userObjectFunc.name}!!!`);
   },
   // Можно короче:
   showInfo2() {
      console.log(`Нашего тромбониста зовут: ${userObjectFunc.name}!!!`);
   },
};
// Вызов такой функции
userObjectFunc.showInfo2();

// Использование "this" - этим словом можно заменить текущий объект
let userObjectThis = {
   name: 'Ivan',
   showInfo() {
      console.log(`Нашего тромбониста зовут: ${this.name}!!!`);
   },
};
// Вызов такой функции
userObjectThis.showInfo();

// У стрелочной функции нет своего "this" - поэтому обратится к родителю

// ----------------------------------------------------------------------------------------

// Функция конструктор - для создания однотипных объектов
// Для создания таких есть два правила:
// 1. Имя функции с большой буквы
// 2. Функция вызывается с оператора "new"

function UserInfo(name) {
   // Эта функция создает объект this = {}; пустой объект - неявно
   // Далее мы добавляем в этот объект нужные нам свойства:
   this.name = name;
   this.age = 30;

   // return this; - возвращает объект - также неявно, но можно вернуть то,
   // что нам надо
}

// Вызов такой функции: создаем одинаковые объекты с разными параметрами
console.log(new UserInfo('Oleg'));
console.log(new UserInfo('Ura'));

// ------------------------------------------------------------------------------------

// Домашка :)

// Задача 1: Верна ли запись? - no (небыло запятых после свойств)
const userHw1 = {
   name: 'Serg',
   age: 34,
};

// Задача 2: Что будет в консоли? - Some value - редактор убирает ковычки с "58"
let userHw2 = {
   name: 'Fedor',
   age: 30,
   58: 'Some value',
};
console.log(userHw2[58]);

// Задача 3: Что будет в консоли? - 45
let userHw3 = {
   name: 'Vall',
   age: 30,
};

let hw3 = userHw3;
hw3.age = 45;
console.log(userHw3.age);

// Задача 4: Что будет в консоли? - Vall
let userHw4 = {
   name: 'Vall',
   age: 30,
   showInfo() {
      console.log(`${this.name}`);
   },
};
let hw4 = userHw4;
userHw4 = null;
hw4.showInfo();

// Задача 5: Что будет в консоли? vall 30
let userHw5 = {
   name: 'Vall',
   age: 30,
};

for (const key in userHw5) {
   const value = userHw5[key];
   console.log(value);
}

// Задача 6: Что будет в консоли? - Moscow
let userHw6 = {
   name: 'Vall',
   age: 30,
   address: {
      city: 'Moscow',
   },
};

for (const key in userHw6.address) {
   console.log(userHw6.address[key]);
}

// Задача 7: Верна ли запись? - нет, небыло [] при выводе
const userHw7 = {
   name: 'Vall',
   age: 30,
   'lekes js': true,
};

console.log(userHw7['lekes js']);

// Задача 8:
// 8.1 Создайте пустой объект:
let userHw8 = {};
// 8.2 Добавте свойство нейм со значением
userHw8.name = 'Vall';
// 8.3 Добавте возраст
userHw8.age = 30;
console.log(userHw8);
// 8.4 Измените имя на Лена
userHw8.name = 'Lena';
console.log(userHw8);
// 8.5 Удалите свойство нейм
delete userHw8.name;
console.log(userHw8);

// Лекция по ООП ________________________________________________________

// Атрибуты объекта:
// prototype
// class
// extemsible

let dateX = new Date(); // - Создает объект с датой

let arr = new Array(); // - это создание массива из аргументов.
// Например, new Array(1,2,3) - массив из трех элементов: 1,2,3,
// такой же как и[1, 2, 3].

let obj = new Object(); // синтаксис "конструктор объекта"

// Наследует свойства объекта, который в скобках:
let objX = Object.create(Object.prototype);

// При создании объекта создается ссылка на него ref: 0x2ff947
// и адрес в памяти addr: 0x2ff947

let www = {
   x: 'test',
   y: 1234,
};

// При выводе всего объекта мы обращаемся к ref:
console.log(www);

// Пример создания объекта конструктором:
let constrObj = new Object();
constrObj.x = 'test';
constrObj.y = 1234;
constrObj.z = new Object();
constrObj.w = new Object();
constrObj[''] = 'hi';

console.log(constrObj);

// Функция которая не вызвана, а определена внутри объекта
// называется "методом"

let xx = 1,
   yy = 2;
let objXx = { xx, yy };

console.log(objXx);

let objPlus = { ['First' + 'Name']: 'Olga' };
console.log(objPlus);
console.log(objPlus['First' + 'Name']);
console.log(objPlus['FirstName']);

// window это глобальный объект
var vvv = 10; // Если let то не пашет
console.log(vvv, this.vvv, window.vvv);

var calculator = {
   operand1: 1,
   operand2: 2,
   // Функция внутри объекта - наз. метод:
   add: function () {
      this.result = this.operand1 + this.operand2;
   },
};

calculator.add(); // Запуск
console.log(calculator.result);
console.log(calculator);

// Прототип объекта ________________________________________________________________

// Prototype - это механизм, с помощью которого объекты JavaScript
// наследуют свойства друг от друга.

// Как я понял, это глобальный объект - Object.prototype, от которого наследуются
// все объекты которые мы прописываем ниже:
Object.prototype.x = 10;
var aA = {};
console.log(aA['x']); // Сначала ищет в текущем объекте, если не находит то в родителе

function Person(first, last, age, gender) {
   this.name = {
      first: first,
      last: last,
   };
   this.age = age;
   this.gender = gender;
}
var person1 = new Person('Bob', 'Smith', 32, 'male');

// Prototype - это как-бы свойства объекта родителя
// Что-бы задать эти св-ва вручную используют __proto__
let animal = {
   eats: true,
};
let rabbit = {
   jumps: true,
};

rabbit.__proto__ = animal; // - устанавливает animal как прототип для rabbit
console.log(rabbit.eats);
console.log(rabbit);

// Если у нас есть метод в animal, он может быть вызван на rabbit:

let animal2 = {
   eats: true,
   walk() {
      alert('Animal walk');
   },
};

let rabbit2 = {
   jumps: true,
   __proto__: animal2,
};

// walk взят из прототипа
// rabbit2.walk(); // Animal walk

//Цепочка прототипов может быть длиннее:
let animal3 = {
   eats: true,
   walk() {
      alert('Animal3 walk');
   },
};

let rabbit3 = {
   jumps: true,
   __proto__: animal3,
};

let longEar = {
   earLength: 10,
   __proto__: rabbit3,
};
// walk взят из цепочки прототипов
// longEar.walk(); // Animal3 walk
// alert(longEar.jumps); // true (из rabbit3)

let aa = {
   a: 12,
};

let bb = {
   b: 15,
};
// Делаем aa протопипом для bb:
Object.setPrototypeOf(bb, aa);
console.log(bb.a);

// Constructor ____________________________________________________________________
function Foo(y) {
   this.y = y;
}

// Добавляем свойства в прототип:
Foo.prototype.x = 10;
Foo.prototype.calculate = function (z) {
   return this.x + this.y + z;
};

// Создаем объекты функцией конструктором:
var bbb = new Foo(20);
var ccc = new Foo(30);

console.log(bbb.calculate(30));
console.log(ccc.calculate(40));

// Copying by reference - Копирование по ссылке
let x = {
   name: 'John',
};
let y = x;
y.name = 'Sasha';
console.log(x.name); // Sasha
// Изменяется сам объект по ссылке, "ключи от одной коробки"

// Объект в константе можно изменять:
const car = {
   color: 'red',
};
const newCar = car;
delete newCar.color;
newCar.style = 'Sport';
car.game = 'guitar';
console.log(car);

// Object.assign() - копирование объекта, создание новой ссылки и тд
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

// Копирует в первый оргумент второй, во второй из третьего и тд
var objAssign = Object.assign(o1, o2, o3);
console.log(objAssign);
console.log(o1);
console.log(Object.assign(o2, o3));

let cat = {
   name: 'tom',
};
// Вывод описания свойства:
let a = Object.getOwnPropertyDescriptor(cat, 'name');
console.log(a);

// Цикл перебора свойств/значений объекта:
let userMan = {
   name: 'john',
   age: 30,
   isAdmin: true,
};

for (let key in userMan) {
   console.log(key); // Свойство
   console.log(userMan[key]); // Значение свойства
}

// ООП - на основе прототипов/наследования
// Процесс повторного использования существующего объекта

// Использование объектов, которые могут быть клонированы и расширены

function Vehicle(make, model, color) {
   (this.make = make),
      (this.model = model),
      (this.color = color),
      (this.getName = function () {
         return this.make + ' ' + this.model;
      });
}

let carBest = new Vehicle('Mercedes', 'CLK200', 'Black');
console.log(carBest);
console.log(carBest.getName());

// В свойствах мы видем родительский объект, с которого наследуется

// Функция конструктор - старая школа
// Class in ES6 - новая школа

// class Название [extends Родитель]  {
//   constructor
//   методы
// }

// в 'constructor' задаются "ключи: значения" при создании этого объекта
// - вызове этой функции class

// ниже в "методы" пишутся "ключи: значения - только методы(функции)"
// и они присваиваются родителю - прототипу

class UserClient {
   constructor(name) {
      this.name = name;
      this.newKey = 'privet Roma';
   }

   sayHi() {
      alert(this.name);
   }
}
UserClient.prototype.newKey2 = 'privet Roma2'; // Додали в прототип властивість

let userCC = new UserClient('Вася');
console.log(userCC);
userCC.sayHi(); // Вася

// ______________________________________________________________________________
// JSON - JavaScript Object Notation - формат файла для обмена данными
// считается удобным для чтения и сохранения, как замена xml файлам

//YAML - более сложный JSON
