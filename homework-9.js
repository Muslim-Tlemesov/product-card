import { listOfSocailMediaComments } from "./comments.js";

// дз: 2
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArrayOfNumber = arrayOfNumbers.filter((number) => number > 4);

// дз:3
const listOfAnimals = ["собака", "кошка", "курица", "волк"];
const newListOfAnimals = listOfAnimals.find((animal) => animal === "волк");
// вариант:2
const newListOfAnimals1 = listOfAnimals.includes("волк");

// дз:4
function reverseArray(array) {
  return array.reverse();
}
reverseArray(arrayOfNumbers);
reverseArray(listOfAnimals);
// console.log(arrayOfNumbers, listOfAnimals);

// дз:7
// console.log(listOfSocailMediaComments.filter(comment => comment.email.includes('.com')));

// дз:8
const changingUserIds = listOfSocailMediaComments.map((list) => {
  return {
    ...list,
    postId: list.id <= 5 ? 2 : 1,
  };
});

// дз:9
const arrayOfIdAndName = listOfSocailMediaComments.map((list) => {
  return {
    id: list.id,
    name: list.name,
  };
});

// дз: 10
const addingElement = listOfSocailMediaComments.map((list) => {
  return {
    ...list,
    isInvalid: list.body.length > 180,
  };
});

// дз:11
const mailOutput = listOfSocailMediaComments.reduce((emails, item) => {
  emails.push(item.email);
  return emails;
}, []);
const mailOutput1 = listOfSocailMediaComments.map((emails) => emails.email);

// дз:12
const arrayToString = mailOutput.toString();
const arrayToString1 = mailOutput.join("|");
























// function a() {
//   return [
//     {
//       id: 10,
//       name: "Васек"
//     },
//     {
//       id: 15,
//       name: "Петька"
//     },
//     {
//       id: 20,
//       name: "Репка"
//     }
//   ];
// }
// a();
// // console.log(a().reduce(element));

// const biggestId = a().reduce((currentBiggestId, element) => {
//   if (element.id > currentBiggestId) {
//     currentBiggestId = element.id
//   }
//   return currentBiggestId;
// }, 0)
// // console.log(biggestId);

// const numbers = [1, 2, 3, 4, 5, -10];
// let minNumber = numbers[0];
// numbers.forEach((num, index) => {
//   if (num < minNumber) {
//     minNumber = num
//   }
// });
// console.log(minNumber);

// const allCards = document.querySelectorAll('.card');
// allCards.forEach((card, index) => {
//   // card.classList.add('cardColorGreen')
//   if ((index + 1) % 2 === 1) {
//     card.classList.add('card-color-green')
//   } else {
//     card.classList.add('card-color-red')
//   }
// })
// console.log(allCards);
