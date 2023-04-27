// Checking the library
$(document).ready(function () {
   // jQuery code here
});

// Звертаємся до елементу, будь який селектор
// Та швидко додаємо, прибираємо або тогл клас:
$('.root').addClass('_add');

// Обробник подій: просто пишемо подію через крапку
$('.root').click(function (event) {
   console.log(event.target);
});

// AJAX запрос: ------------------------------------------------------------------------------
// $.ajax({
//    type: 'method',
//    url: 'url',
//    data: 'data',
//    datatype: 'datatype',
//    success: function (response) {
//       // Обробляємо відповідь
//    },
// });

// Анімовано показати блоки: -----------------------------------------------------------------
$('.root').slideUp(4000, function () {
   // Код по завершенню дії
   console.log('Текст показаний!');
});
