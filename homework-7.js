function knowWeather (city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
};
knowWeather('Тюмень', 28)

const SPEED_LIGHT = 299792458;
function testSpeed(speed) {
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость')
  } else if (speed === SPEED_LIGHT) {
    console.log('Скорость света')
  } else {
    console.log('Субсветовая скорость')
  }
}
testSpeed()

let product = 'bread';
let priceProduct = 50;
function checkPrice(currentBudget) {
  if (currentBudget > priceProduct) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    let calculateDiff = priceProduct - currentBudget;
    console.log(`Вам не хватает ${calculateDiff}, пополните баланс`)
  }
}
checkPrice(20)

function myAge(age) {
  console.log(`Мне ${age} лет`)
}
myAge(18)

const city = 'Алматы';
let myProfession = 'programmer';
let myReligion = 'Islam'