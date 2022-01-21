// Цикл while

let num = 0;

while (num < 5) {
   console.log(num);
   num++;
}

// Итерация - один круг/проход цикла

let boolean = 5;
while (boolean) console.log(boolean--);

// Когда необходима хотябы одна итерация используем конструкцию
let doDo = 0;
do {
   console.log(doDo++);
} while (doDo < 5);

// For (Начало; Условие; Шаг) {Тело цикла}
// Сначала выполняется тело цикла, а потом шаг
for (let item = 0; item < 5; item++) {
   console.log('item = ' + item);
}

// Можно убрать любую часть цикла
let item2 = 0;
for (; item2 < 5; ) {
   console.log(item2++);
}

// Директива break
// Например, чтобы остановить цикл при опр. условии:
for (let num = 0; num < 5; num++) {
   console.log('num = ' + num);
   if (num == 2) {
      break;
   }
}

console.log(`Работа цикла окончена`);

// Директива continue - перейти на след итерацию
for (let came = 0; came < 5; came++) {
   // Тем самым пропускаем действие при 2
   if (came == 2) continue;
   console.log('came = ' + came);
}

// Метка - чтобы указать куда перейти, например к циклу родителю:
firstFor: for (let josh = 0; josh < 5; josh++) {
   for (let size = 0; size < 4; size++) {
      if (size == 2) {
         // т.е. остановится тот цикл, которого метка:
         break firstFor;
      }
      console.log('size = ' + size);
   }
}

// Домашка:

// Задача 1: вывести цисло от 1 до 5 всеми видами циклов
let task1 = 1;
while (task1 < 6) {
   console.log('task1 = ' + task1);
   task1++;
}

for (let goGo = 1; goGo < 6; goGo++) {
   console.log('goGo = ' + goGo);
}

// Задача 2: Верно ли, что последний вывод в консоль будет 0?
// Ответ нет, 0 это ложь
let task2 = 8;
while (task2) {
   console.log('task2 = ' + task2);
   task2--;
}

// Задача 3: Переписать на while
for (let num = 0; num < 3; num++) {
   console.log(`Число ${num}`);
}

let task3 = 0;
while (task3 < 3) {
   console.log(`Число ${task3}`);
   task3++;
}

// Задача 4: Прекратить работу цикла 1, когда size4 = 1
// Цикл 1
loop1: for (let num = 0; num < 2; num++) {
   // Цикл 2
   for (let size4 = 0; size4 < 3; size4++) {
      console.log(size4);
      if (size4 == 1) break loop1;
   }
}
