"use strict"

const buttons = document.querySelectorAll('.btns-finish');
const todayDate = document.getElementById('inputData');
const nameOne = document.querySelector('.inputName');



let date = new Date();


todayDate.innerHTML = `Дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;


