// задание 3
const userData = {
  firstName: 'Muslim',
  lastName: 'Tlemesov',
  email: 'dzhangaliev-edua@break.ru',
  job: 'company_Ch-b',
  position: 'Electrician',
  age: 34,
  city: 'Tumen',
  country: 'Russia',
  relationshipStatus: 'женат',
  children: 'двое',
};

// задание 4
const carData = {
  make: "Toyota",
  model: "Camry",
  manufactureYear: 2018,
  color: "black",
  transmission: "автомат",
};
carData.carOwner = userData;

// задание 5
const addedMaxSpeed = automobile => {
  if ('maxSpeed' in automobile) {
    return;
  };
  automobile.maxSpeed = 220
}
addedMaxSpeed(carData);

console.log(carData);

// задание 6
const fruitPrice = {
  apple: 20,
}
const outputedObjectProperty = (object, property) => {
  console.log(object[property]);
}
outputedObjectProperty(fruitPrice, 'apple');

// задание 7
const products = ["пшеница", "овес", "ячмень"];

// задание 8
const books = [
  {
    title: "Дубровский",
    author: "Пушкин",
    yearManufacture: 1841,
    coverColor: "Бежевый",
    genre: "Роман",
  },
    {
    title: "Маскарад",
    author: "Лермонтов",
    yearManufacture: 1842,
    coverColor: "Бежевый",
    genre: "Драма",
  },
    {
    title: "Война и мир",
    author: "Толстой",
    yearManufacture: 1865,
    coverColor: "Серый",
    genre: "Роман-эпопея",
  },
];
books.push({
    title: "Собачье сердце",
    author: "Булгаков",
    yearManufacture: 1968,
    coverColor: "Коричневый",
    genre: "Научная фантастика сатира",
})


// задание 9
const books1 = [
  {
    title: "Аль-Муляххос аль-Фикхий",
    author: "Солих аль-Фаузан",
    yearManufacture: 2003,
    coverColor: "Red",
    genre: "Фикх"
  },
  {
    title: "Описание молитвы Пророка ﷺ",
    author: "Мухаммад аль-Альбани",
    yearManufacture: 1951,
    coverColor: "Green",
    genre: "Фикх"
  },
  {
    title: "Аль-ковоидуль Мусля",
    author: "Мухаммад аль-Усаймин",
    yearManufacture: 1989,
    coverColor: "Black",
    genre: "Вероубеждение"
  }
];

const library = [...books, ...books1];

// задание 10
const addedPropertyRare = archive => {
  return archive.map(book => ({
    ...book,
    isRare: book.yearManufacture > 2000
  }));
};
const newLibrary = addedPropertyRare(library);
console.log(newLibrary);
