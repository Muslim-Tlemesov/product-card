const firstProductCard = document.querySelector('.card-1');
const changeColorFirstCardBtn = document.querySelector('#change-color-first-card');
const blueColorHash = '#0000ff';

changeColorFirstCardBtn.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash
})



const productCards = document.querySelectorAll('.card');
const changeColorAllCardBtn = document.querySelector('#change-color-all-card');
const greenColorHash = '#00ff00';

changeColorAllCardBtn.addEventListener('click', () => {
  // productCards[3].style.backgroundColor = greenColorHash
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash) 
})


const openGoogleBtn = document.querySelector('#open-google-btn');

openGoogleBtn.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Действительно открыть google.com?');

  if (answer === true) {
    window.open('https://www.google.com/')
  } else {
    return;
  }
}

const outputConsoleLogBtn = document.querySelector('#output-console-log');

outputConsoleLogBtn.addEventListener('click', () => outputConsolelog('дз №6'));

function outputConsolelog(message) {
  alert(message);
  console.log(message);
}


const title = document.querySelector('.title');

title.addEventListener('mouseover', () => {
  console.log(title.textContent);
});


const changeColorBtn = document.querySelector('#change-color-button');

changeColorBtn.addEventListener('click', () => {
  changeColorBtn.classList.toggle('button--yellow');
});
