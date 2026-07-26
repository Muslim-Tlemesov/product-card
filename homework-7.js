function knowWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
knowWeather('Тюмень', 28);

const SPEED_LIGHT = 299792458;
function testSpeed(speed) {
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed === SPEED_LIGHT) {
    console.log('Скорость света');
  } else {
    console.log('Субсветовая скорость');
  }
}
testSpeed(299792499);
testSpeed(299792458);
testSpeed(299792441);

const product = 'bread';
const productPrice = 50;
function checkPrice(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    const calculatedDiff = productPrice - currentBudget;
    console.log(`Вам не хватает ${calculatedDiff}, пополните баланс`);
  }
}
checkPrice(20);

function myAge(age) {
  console.log(`Мне ${age} лет`);
}
myAge(34);

const city = 'Алматы';
const myProfession = 'programmer';
const myReligion = 'Islam';