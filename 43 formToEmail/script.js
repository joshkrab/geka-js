'use strict';

// Перевірка, що документ вже завантажився:
document.addEventListener('DOMContentLoaded', function () {
   console.log('ДОМ завантажився');

   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();
   }
});
// 31min
