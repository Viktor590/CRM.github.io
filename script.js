"use strict"

const buttons = document.querySelectorAll('.btns-finish');
const todayDate = document.getElementById('inputData');
const formBlock = document.querySelector('.form-block')
const formTable = document.querySelector('.form-table')
const sizeBtn = document.querySelector('.size-btn')
const sizeWrapper = document.querySelector('.size')
const sizeBlock = document.querySelector('.size__wrapper-block')
const sizeSumm = document.querySelector('.size__sum')
const sizeMaterial = document.querySelector('.size__material')
const sizePrice = document.querySelector('.size__price')
const washBtn = document.querySelector('.wash__btn')
const washWrapper = document.querySelector('.washing__wrapper')
const workWrapper = document.querySelector('.work')
const workBtn = document.querySelector('.work__btn')
const resSumm = document.querySelector('.res__summ')
let sizeWrapperInput;
let sizeDeleteButton;



let date = new Date();
todayDate.innerHTML = `Дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

const kitchenTable = `
  <form class="form-table">

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
    <label for="exampleFormControlSelect1">Варочная панель</label>
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

   <div class="form-row cooking">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Вырезы</label>
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
      Мойка Интегрированная
  </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Артикул</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Артикул Мойки 1</option>
      <option>Артикул Мойки 2</option>
      <option>Артикул Мойки 3</option>
      <option>Артикул Мойки 4</option>
      <option>Артикул Мойки 5</option>
    </select>
  </div>
  <div class="form-group col-md-2">
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
  <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Процент</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Цена</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
     <button type="button" class="btn btn-danger">Добавить мойку</button>

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

   <div class="form-row edge">
    <div class="form-group col-md-4">
    <label for="exampleFormControlSelect1">Бортики</label>
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

</form>
`
const bathroomTable = `
  <form class="form-table">

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
      Раковина Интегрированная
    </div>
  <div class="form-group col-md-2">
    <label for="exampleFormControlSelect1">Артикул</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Артикул Мойки 1</option>
      <option>Артикул Мойки 2</option>
      <option>Артикул Мойки 3</option>
      <option>Артикул Мойки 4</option>
      <option>Артикул Мойки 5</option>
    </select>
  </div>
  <div class="form-group col-md-2">
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
  <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Процент</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
  <div class="form-group col-md-1">
    <label for="exampleFormControlSelect1">Стоимость</label>
    <input type="number" class="form-control" id="exampleFormControlSelect1">
  </div>
     <button type="button" class="btn btn-danger">Добавить раковину</button>

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
</form>
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
<div class="form-row about">
      <div class="form-group col-md-3">
    <label for="exampleFormControlSelect1">Изделие</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Полка 1</option>
      <option>Полка 2</option>
      <option>Полка 3</option>
      <option>Полка 4</option>
      <option>Полка 5</option>
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
const comment = `
  <textarea name="" id="" cols="50" rows="5" maxlength="500" placeholder="Для комментариев"></textarea>
`
const addWork = `
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
    <input type="number" class="form-control result" id="exampleFormControlSelect1">
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
    <input type="number" class="form-control result" id="exampleFormControlSelect1">
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
    <input type="number" class="form-control result" id="exampleFormControlSelect1">
  </div>
   </div>
`
const newSize = `
           <div class="form-block" style="display: flex;">
            <div class="form-row form-size__block">
              <div class="form-group col-md-6 size__length-block">
                <label for="#">Длина</label>
                <input type="number" class="form-control size__length">
              </div>
              <div class="form-group col-md-6 size__large-block">
                <label for="#">Ширина</label>
                <input type="number" class="form-control size__large">
              </div>

            </div>
          </div>
`
const addWash = `
          <div class="form-group col-md-4">
            Мойка Интегрированная
          </div>
          <div class="form-group col-md-2">
            <label for="#">Артикул Мойки</label>
            <select class="form-control">
              <option>Артикул Мойки 1</option>
              <option>Артикул Мойки 2</option>
              <option>Артикул Мойки 3</option>
              <option>Артикул Мойки 4</option>
              <option>Артикул Мойки 5</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="#">Модель</label>
            <select class="form-control">
              <option>Модель Мойки 1</option>
              <option>Модель Мойки 2</option>
              <option>Модель Мойки 3</option>
              <option>Модель Мойки 4</option>
              <option>Модель Мойки 5</option>
            </select>
          </div>
          <div class="form-group col-md-1">
            <label for="#">Кол-во</label>
            <input type="number" class="form-control">
          </div>
          <div class="form-group col-md-1">
            <label for="#">Процент</label>
            <input type="number" class="form-control">
          </div>
          <div class="form-group col-md-1">
            <label for="#">Цена</label>
            <input type="number" class="form-control result">
          </div>
`
const addServices = `
        <div class="form-group col-md-4">
          <label for="#">Доп.работы</label>
          <select class="form-control">
            <option>Доп.работа 1</option>
            <option>Доп.работа 2</option>
            <option>Доп.работа 3</option>
          </select>
        </div>
        <div class="form-group col-md-1">
          <label for="#">Кол-во</label>
          <input type="number" class="form-control">
        </div>
        <div class="form-group col-md-2">
          <label for="#">Стоимость</label>
          <input type="number" class="form-control result">
        </div>
`

const arrPosition = [kitchenTable, bathroomTable, panel, windowsill, shelf, addWork, comment]

function hai(element) {
  const tableForm = document.createElement('form')
  tableForm.classList.add('form-table')
  tableForm.innerHTML = element
  return tableForm
}


buttons.forEach((num, i) => {
  num.addEventListener('click', () => {
    arrPosition.forEach((n, a) => {
      if (i == a) {
        formBlock.append(hai(n))
      }
    })

  })
});

function addSizeInput(element) {
  const newSizeForm = document.createElement('div')
  newSizeForm.classList.add('form-row')
  newSizeForm.classList.add('form-size')
  newSizeForm.classList.add('col-md-6')
  newSizeForm.classList.add('p-0')
  newSizeForm.innerHTML = element
  return newSizeForm
}

function addNewWashForm(element) {
  const newWashForm = document.createElement('div')
  newWashForm.classList.add('form-row')
  newWashForm.classList.add('washing__block')
  newWashForm.innerHTML = element
  return newWashForm
}

function addNewServicesForm(element) {
  const newServicesForm = document.createElement('div')
  newServicesForm.classList.add('form-row')
  newServicesForm.classList.add('work__block')
  newServicesForm.innerHTML = element
  return newServicesForm
}

addNewForm(sizeBtn, sizeBlock, newSize)
addNewWash(washBtn, washWrapper, addWash)
addNewServices(workBtn, workWrapper, addServices)

function addNewForm(btn, block, newblock) {
  btn.addEventListener('click', () => {
    block.append(addSizeInput(newblock));
    sizeWrapperInput = document.querySelectorAll('.form-size')
  })
}

function addNewWash(btn, block, newblock) {
  btn.addEventListener('click', () => {
    block.append(addNewWashForm(newblock));
  })
}

function addNewServices(btn, block, newblock) {
  btn.addEventListener('click', () => {
    block.append(addNewServicesForm(newblock));
  })
}

sizeWrapper.addEventListener('input', () => {
  let sum = 0;
  let sum2 = 0;
  sizeWrapper.querySelectorAll('.size__length').forEach(el => sum += +el.value)
  sizeWrapper.querySelectorAll('.size__large').forEach(el => sum2 += +el.value)
  sizeSumm.value = (sum * sum2).toFixed(2)
  sizePrice.value = (sizeSumm.value * sizeMaterial.value).toFixed(2)
});

formTable.addEventListener('input', () => {
  let sum = 0;
  formTable.querySelectorAll('.result').forEach(el => sum += +el.value)
  resSumm.textContent = `${sum}Р`
})






