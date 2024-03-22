"use strict"

const buttons = document.querySelectorAll('.btns-finish');
const todayDate = document.getElementById('inputData');
const nameOne = document.querySelector('.inputName');
const formBlock = document.querySelector('.form-block')


let date = new Date();
todayDate.innerHTML = `Дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

const kitchenTable = `
  <div class="form-row about">
      <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Изделие</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Столешница кухня 1</option>
      <option>Столешница кухня 2</option>
      <option>Столешница кухня 3</option>
      <option>Столешница кухня 4</option>
      <option>Столешница кухня 5</option>
    </select>
  </div>
    <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Материал</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Камень</option>
      <option>Кварц</option>
    </select>
  </div>
    <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Бренд</label>
    <select class="form-control id="exampleFormControlSelect1">
      <option>Бренд 1</option>
      <option>Бренд 2</option>
      <option>Бренд 3</option>
      <option>Бренд 4</option>
      <option>Бренд 5</option>
    </select>
  </div>
  <div class="form-group col-md-3">
      <label for="inputState">Артикул</label>
      <select id="inputState" class="form-control">
        <option selected>Артикул 1</option>
        <option>Артикул 2</option>
        <option>Артикул 3</option>
      </select>
    </div>
  </div>

  <div class="size">
    <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputCity">Длина</label>
      <input type="number" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Ширина</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md-2">
      <label for="inputCity">Общая площадь</label>
      <input type="number" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Кол-во Материала</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Стоимость</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
  </div>
  <button type="button" class="btn btn-danger size-btn">Добавить размеры</button>


  </div>


   <div class="form-row cooking">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Варка</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Накладная</option>
      <option>В уровень</option>
    </select>
  </div>
  <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Количество</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>

   <div class="form-row washing">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Тип мойки</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Вырез под накладную</option>
      <option>Вырез и крепление подстольной</option>
      <option>Интегрированная</option>
    </select>
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Артикул Мойки</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Артикул Мойки 1</option>
      <option>Артикул Мойки 2</option>
      <option>Артикул Мойки 3</option>
      <option>Артикул Мойки 4</option>
      <option>Артикул Мойки 5</option>
    </select>
  </div>
  <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Модель</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Модель Мойки 1</option>
      <option>Модель Мойки 2</option>
      <option>Модель Мойки 3</option>
      <option>Модель Мойки 4</option>
      <option>Модель Мойки 5</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>


   <div class="form-row edge">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Кромки</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Кромка 1</option>
      <option>Кромка 2</option>
      <option>Кромка 3</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>


    <div class="form-row work">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Доп.работы</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Доп.работа 1</option>
      <option>Доп.работа 2</option>
      <option>Доп.работа 3</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>
   <button type="button" class="btn btn-danger">Добавить доп.услугу</button>
   <p class="rest">Общая стоимость изделия:</p>
`
const bathroomTable = `
  <div class="form-row about">
      <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Изделие</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Столешница сан.узел 1</option>
      <option>Столешница сан.узел 2</option>
      <option>Столешница сан.узел 3</option>
      <option>Столешница сан.узел 4</option>
      <option>Столешница сан.узел 5</option>
    </select>
  </div>
    <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Материал</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Камень</option>
      <option>Кварц</option>
    </select>
  </div>
    <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Бренд</label>
    <select class="form-control id="exampleFormControlSelect1">
      <option>Бренд 1</option>
      <option>Бренд 2</option>
      <option>Бренд 3</option>
      <option>Бренд 4</option>
      <option>Бренд 5</option>
    </select>
  </div>
  <div class="form-group col-md-3">
      <label for="inputState">Артикул</label>
      <select id="inputState" class="form-control">
        <option selected>Артикул 1</option>
        <option>Артикул 2</option>
        <option>Артикул 3</option>
      </select>
    </div>
  </div>

  <div class="size">
    <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputCity">Длина</label>
      <input type="number" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Ширина</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md-2">
      <label for="inputCity">Общая площадь</label>
      <input type="number" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Кол-во Материала</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Стоимость</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
  </div>
  <button type="button" class="btn btn-danger size-btn">Добавить размеры</button>
  </div>


   <div class="form-row sink">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Тип мойки</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Вырез под накладную</option>
      <option>Вырез и крепление подстольной</option>
      <option>Интегрированная</option>
    </select>
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Артикул Мойки</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Артикул Мойки 1</option>
      <option>Артикул Мойки 2</option>
      <option>Артикул Мойки 3</option>
      <option>Артикул Мойки 4</option>
      <option>Артикул Мойки 5</option>
    </select>
  </div>
  <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Модель</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Модель Мойки 1</option>
      <option>Модель Мойки 2</option>
      <option>Модель Мойки 3</option>
      <option>Модель Мойки 4</option>
      <option>Модель Мойки 5</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>



   <div class="form-row edge">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Кромки</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Кромка 1</option>
      <option>Кромка 2</option>
      <option>Кромка 3</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>

   <div class="form-row side">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Бортик</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Бортик 1</option>
      <option>Бортик 2</option>
      <option>Бортик 3</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>

    <div class="form-row work">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Доп.работы</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Доп.работа 1</option>
      <option>Доп.работа 2</option>
      <option>Доп.работа 3</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>
   <button type="button" class="btn btn-danger">Добавить доп.услугу</button>
<p class="rest">Общая стоимость изделия:</p>
`
const panel = `
  <div class="form-row about">
      <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Изделие</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Стеновая панель 1</option>
      <option>Стеновая панель 2</option>
      <option>Стеновая панель 3</option>
      <option>Стеновая панель 4</option>
      <option>Стеновая панель 5</option>
    </select>
  </div>
    <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Материал</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Камень</option>
      <option>Кварц</option>
    </select>
  </div>
    <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Бренд</label>
    <select class="form-control id="exampleFormControlSelect1">
      <option>Бренд 1</option>
      <option>Бренд 2</option>
      <option>Бренд 3</option>
      <option>Бренд 4</option>
      <option>Бренд 5</option>
    </select>
  </div>
  <div class="form-group col-md-3">
      <label for="inputState">Артикул</label>
      <select id="inputState" class="form-control">
        <option selected>Артикул 1</option>
        <option>Артикул 2</option>
        <option>Артикул 3</option>
      </select>
    </div>
  </div>

  <div class="size">
    <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputCity">Длина</label>
      <input type="number" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Ширина</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md-2">
      <label for="inputCity">Общая площадь</label>
      <input type="number" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Кол-во Материала</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Стоимость</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
  </div>
  <button type="button" class="btn btn-danger size-btn">Добавить размеры</button>
  </div>



    <div class="form-row work">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Доп.работы</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Доп.работа 1</option>
      <option>Доп.работа 2</option>
      <option>Доп.работа 3</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>
   <button type="button" class="btn btn-danger">Добавить доп.услугу</button>
<p class="rest">Общая стоимость изделия:</p>
`
const windowsill = `
  <div class="form-row about">
      <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Изделие</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Подоконник 1</option>
      <option>Подоконник 2</option>
      <option>Подоконник 3</option>
      <option>Подоконник 4</option>
      <option>Подоконник 5</option>
    </select>
  </div>
    <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Материал</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Камень</option>
      <option>Кварц</option>
    </select>
  </div>
    <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Бренд</label>
    <select class="form-control id="exampleFormControlSelect1">
      <option>Бренд 1</option>
      <option>Бренд 2</option>
      <option>Бренд 3</option>
      <option>Бренд 4</option>
      <option>Бренд 5</option>
    </select>
  </div>
  <div class="form-group col-md-3">
      <label for="inputState">Артикул</label>
      <select id="inputState" class="form-control">
        <option selected>Артикул 1</option>
        <option>Артикул 2</option>
        <option>Артикул 3</option>
      </select>
    </div>
  </div>

  <div class="size">
    <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputCity">Длина</label>
      <input type="number" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Ширина</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md-2">
      <label for="inputCity">Общая площадь</label>
      <input type="number" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Кол-во Материала</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Стоимость</label>
      <input type="number" class="form-control" id="inputZip">
    </div>
  </div>
  <button type="button" class="btn btn-danger size-btn">Добавить размеры</button>

  </div>

 <div class="form-row edge">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Кромки</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Кромка 1</option>
      <option>Кромка 2</option>
      <option>Кромка 3</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>

   <div class="form-row side">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Бортик</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Бортик 1</option>
      <option>Бортик 2</option>
      <option>Бортик 3</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>


    <div class="form-row work">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Доп.работы</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Доп.работа 1</option>
      <option>Доп.работа 2</option>
      <option>Доп.работа 3</option>
    </select>
  </div>
   <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>
   <button type="button" class="btn btn-danger">Добавить доп.услугу</button>
<p class="rest">Общая стоимость изделия:</p>
`
const shelf = `
   <div class="form-row">
    <div class="form-group col-md-2 froze">
      Замер
  </div>
   <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>

   <div class="form-row">
    <div class="form-group col-md-2 froze">
      Доставка
  </div>
   <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>

   <div class="form-row">
    <div class="form-group col-md-2 froze">
      Монтаж
  </div>
   <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Кол-во</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
   </div>
`
const comment = `
  <textarea name="" id="" cols="50" rows="5" maxlength="500" placeholder="Для комментариев"></textarea>
`

const arrPosition = [kitchenTable, bathroomTable, windowsill, panel, comment]

function hai(element) {
  const tableForm = document.createElement('form')
  tableForm.classList.add('form-table')
  tableForm.innerHTML = element
  return tableForm
}


buttons.forEach((num, i) => {
  num.addEventListener('click', () => {
    // formBlock.append(hai(comment))
    arrPosition.forEach((n, a) => {
      if (i == a) {
        formBlock.append(hai(n))
      }
    })

  })
});
