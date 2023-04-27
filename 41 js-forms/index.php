<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>JS forms</title>
   <link rel="stylesheet" href="./style.css">
</head>

<body>
   <h1>Привіт формочки! :)</h1>
   <div tabindex="-1" class="lesson">
      <form action="#" name="main" class="main-form">
         <div tabindex="-1" class="main-form-column">
            <div class="main-form-item">
               <label for="input_1" class="main-form-label"><span>Поле введення</span></label><br>
               <input tabindex="2" type="text" id="input_1" name="nameInput" placeholder="Input value">
            </div>
            <div class="main-form-item">
               <label for="input_3" class="main-form-label"><span>Поле введення email</span></label><br>
               <input tabindex="0" type="text" id="input_3" name="nameEmail" placeholder="Input email">
            </div>
            <div class="main-form-item">
               <label for="input_2" class="main-form-label"><span>Текстове поле введення</span></label><br>
               <textarea maxlength="30" tabindex="1" type="text" id="input_2" name="nameTextarea" placeholder="Input value"></textarea>
               <div class="export-counter"></div>
            </div>
         </div>
         <div class="main-form-column">
            <div class="main-form-item">
               <label class="main-form-label"><span>Радіокнопки</span></label><br>
               <div class="main-form-radio">
                  <label for="radio_1" class="main-form-label">Кнопка 1</label>
                  <input id="radio_1" checked type="radio" name="nameRadio">
               </div>
               <div class="main-form-radio">
                  <label for="radio_2" class="main-form-label">Кнопка 2</label>
                  <input id="radio_2" type="radio" name="nameRadio">
               </div>
            </div>

            <div class="main-form-item">
               <label for="check_1" class="main-form-label">Checkbox</label>
               <input id="check_1" type="checkbox" name="nameCheck">
            </div>

            <div class="main-form-item">
               <label for="file_1" class="main-form-label"><span>Прикріпити файл</span></label>
               <input id="file_1" type="file" name="nameFile">
            </div>

            <div class="main-form-item">
               <label for="select_1" class="main-form-label">List</label>
               <!-- Атрібут multiple - режим вибору декількох опцій -->
               <select multiple id="select_1" name="nameSelect" class="main-form__select">
                  <option value="1" selected>20</option>
                  <option value="2">30</option>
                  <option value="3">50</option>
               </select>
            </div>

            <div class="main-form-item">
               <button type="submit">Send form</button>
            </div>


         </div>
      </form>
   </div>

   <script src="./script.js"></script>
</body>

</html>