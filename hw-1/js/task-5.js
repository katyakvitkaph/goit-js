"use strict";
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const name_1 = "китай",
  price_1 = 100;
const name_2 = "чили",
  price_2 = 250;
const name_3 = "австралия",
  price_3 = 170;
const name_4 = "индия",
  price_4 = 80;
const name_5 = "ямайка",
  price_5 = 120;

let userInput = prompt("В какую страну вы хотите поехать?");

if (userInput === null) {
  console.log("Отменено пользователем");
} else {
  let newInput = userInput.toLowerCase();

  if (newInput) {
    switch (newInput) {
      case name_1:
        console.log(`Доставка в ${name_1[0].toUpperCase() + name_1.slice(1)} будет стоить ${price_1} кредитов`);
        break;
      case name_2:
        console.log(`Доставка в ${name_2[0].toUpperCase() + name_2.slice(1)} будет стоить ${price_2} кредитов`);
        break;
      case name_3:
        console.log(`Доставка в ${name_3[0].toUpperCase() + name_3.slice(1)} будет стоить ${price_3} кредитов`);
        break;
      case name_4:
        console.log(`Доставка в ${name_4[0].toUpperCase() + name_4.slice(1)} будет стоить ${price_4} кредитов`);
        break;
      case name_5:
        console.log(`Доставка в ${name_5[0].toUpperCase() + name_5.slice(1)} будет стоить ${price_5} кредитов`);
        break;
      default:
        console.log("В вашей стране доставка не доступна");
    }
  }
}
