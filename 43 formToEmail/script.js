'use strict';

// Перевірка, що документ вже завантажився:
document.addEventListener('DOMContentLoaded', function () {
   console.log('ДОМ завантажився');

   const form = document.getElementById('form');

   // Подія на відправку форми:
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault(); // відправку за замовчанням прибираємо

      // Робимо валідацію полів:
      let error = formValidate(form); // Записуємо результат функції в змінну

      let formData = new FormData(form); // Отримуємо дані полів форми
      formData.append('image', formImage.files[0]); // Додаємо зображення в змінну, як властивість

      if (error === 0) {
         // Повідомлення користувачу, що йде відправка форми:
         form.classList.add('sending');

         // Асінхронно відправляємо форму за допомогою фетч:
         // await - чекаємо виконання відправки
         let response = await fetch('sendmail.php', {
            method: 'POST', // цим методом
            body: formData, // цих даних в пхп файл sendmail.php
         });

         if (response.ok) {
            let result = await response.json();
            alert(result.message);
            formPreview.innerHTML = ''; // Очищаємо превью фото
            form.reset(); // Очищаємо усі поля форми
            form.classList.remove('sending');
         } else {
            alert('Помилка!');
            form.classList.remove('sending');
         }
      } else {
         alert(`Заповніть обов'язкові поля`);
      }
   }

   function formValidate(form) {
      let error = 0;
      // Adding required fields:
      let formReq = document.querySelectorAll('.req'); // Колекція обов. полей

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];

         // Перед перевіркой прибираємо класи .error
         formRemoveError(input);

         if (input.classList.contains('email')) {
            if (emailTest(input)) {
               // Налаштовано на фолс з !
               formAddError(input);
               error++;
            }
         } else if (
            // Додаємо помилку, якщо обов'язковий чекбокс не обраний:
            input.getAttribute('type') === 'checkbox' &&
            input.checked === false
         ) {
            formAddError(input);
            error++;
         } else {
            // Перевірка чи заповнено поле:
            if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }

   function formAddError(input) {
      input.parentElement.classList.add('error');
      input.classList.add('error');
   }

   function formRemoveError(input) {
      input.parentElement.classList.remove('error');
      input.classList.remove('error');
   }

   // Функция теста email
   function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }

   // ------ Предпросмотр імеджу ------------------------------------------------------

   // Отримуємо в константу об'єкт з зображенням: наш інпут, тип файл:
   const formImage = document.getElementById('formImage');
   // Блок виводу картинки, пустий дів:
   const formPreview = document.getElementById('formPreview');

   // Слухаємо зміни в інпуті файл:
   formImage.addEventListener('change', function (event) {
      uploadFile(formImage.files[0]); // Запускаємо функцію з нашим файлом імеджем
   });

   function uploadFile(file) {
      console.log(file.type); // в такому вигляді записує тип image/jpeg
      // jpg записує jpeg

      // Перевіряємо тип файлів:
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
         alert('Дозволені тільки зображення!');
         formImage.value = ''; // Очищуємо поле
         return;
      }
      // Перевіряємо розмір файла:
      console.log(file.size); // розмір в байтах наче
      if (file.size > 2 * 1024 * 1024) {
         alert('Файл має бути меньш 2мб');
         formImage.value = ''; // Очищуємо поле
         return;
      }
      // Об'єкт FileReader дозволяє веб-додаткам асінхронно читати вміст файлів
      var reader = new FileReader();
      reader.onload = function (e) {
         // Вставляємо отриманий результат від завантаження файла:
         formPreview.innerHTML = `<img src="${e.target.result}" alt="Photo">`;
      };
      reader.onerror = function () {
         alert('Помилка');
      };
      // readAsDataURL() - метод об'єкту FileReader який читає файл і
      // записує результат у властивість FileReader.result у вигляді Data URL,
      // який представляє дані файлу як рядкок в Base64 кодуванні.
      reader.readAsDataURL(file);
   }
});

// console test:

// CodeWars - Перевірити чи краще твоя оцінка екзамену за [середню в класі]:
function betterThanAverage(classPoints, yourPoints) {
   return (
      classPoints.reduce((sum, item) => sum + item, 0) / classPoints.length <
      yourPoints
   );
}
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
