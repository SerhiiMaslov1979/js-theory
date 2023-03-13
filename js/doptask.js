// let myName;
// console.log(myName);
// myName = "Serg";
// console.log(myName);
// console.log(console.log(10));

// const myName = "Serg";
// console.log(myName);

// const objectA = {
//   a: 10,
//   b: true,
// };
// console.log(objectA);
// const copyOfA = objectA;

// copyOfA.a = 20;
// console.log(copyOfA);
// copyOfA.c = "abc";
// console.log(objectA);

// function a() {
//   console.log("Hey there");
// }
// a();
// a = 10;
// a();
// console.log(a);

// const myCity = {
//   city: "New Yotk",
// };

// myCity.popular = true;

// console.log(myCity);

// myCity.country = "USA";

// console.log(myCity);

//скобочная запись
// const myCity = {
//   city: "New Yotk",
// };

// myCity.popular = true;

// console.log(myCity);

// const countryPropertyName = "country";
// myCity[countryPropertyName] = "USA";
// console.log(myCity);

// вложеные свойства (удаление и добавление вложений)

// const myCity = {
//   city: "New Yotk",
//   info: {
//     isPopular: true,
//     country: "USA",
//   },
// };

// console.log(myCity.info.isPopular);

// delete myCity.info["isPopular"];
// console.log(myCity);

// const countryPopularName = "isPopular";
// myCity.info[countryPopularName] = true;
// console.log(myCity);

//Объекты - сокращенный формат записи свойств

// const name = "Serg";
// const postsQty = 43;

// const userProfile = {
//   name,
//   postsQty,
//   hasSignedAgreement: false,
// };

// console.log(userProfile);

// Глобальные объекты
// global.console.log("hello");

// методы - свойства объекта, значение которого - функция.

// const myCity = {
//   city: "New York",
//   cityGreeting: function () {
//     console.log("Greetings!!!");
//   },
// };

// myCity.cityGreeting();

// сокращенная запись

// const myCity = {
//   city: "New York",
//   cityGreeting() {
//     console.log("Greetings!!!");
//   },
// };

// myCity.cityGreeting();

//Методы и свойства объектов

//json - javascript object notation

//parce

//
// мутация в JS
// как избежать мутацию
// вариант 1

// const person = {
//   name: "Bob",
//   age: 25,
// };

// const person2 = Object.assign({}, person);
// person2.age = 26;

// console.log(person2.age);
// console.log(person.age);
