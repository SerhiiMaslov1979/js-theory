//Repeta-------------------------
//проверка на четнось
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// // 1. переменная тотал
// let total = 0;
// // 2. перебрать массив
// for (let i = 0; i <= numbers.length; i += 1) {
//   console.log(numbers[i]);
//   // 3. на каждой итерациипроверяем элемент на четность
//   if (numbers[i] % 2 === 0) {
//     console.log("Четное!!!");
//     // 4. если четное плюсуем к тотал
//     total += numbers[i];
//   }
// }
// console.log("Total: ", total);

//Напишите скрипт поиска логина
// - если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// - если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

// - сначало через for
// - потом через for of
// - логика break
// - метод includes () с тернальным оператором

// const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = "";
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log("login: ", login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log("Ура!!! Равны!!!");
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
//   message = `Пользователь ${loginToFind} не найден.`;
// }
// console.log(message);

// const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "poly1scute";
// let message = `Пользователь ${loginToFind} не найден.`;
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log("login: ", login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log("Ура!!! Равны!!!");
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }
// console.log(message);

//самое маленькое число

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallesNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallesNumber) {
//     smallesNumber = number;
//   }
// }
// console.log(smallesNumber);

// написать скрипт, который объеденяет все элементы массива в одно строковое значение.
// Элементов может быть произвольное количество.
// Пусть элементы массива в строке будут разделены запятой.
// - Сначало через For
// - потом через join()

// For

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";

// for (const friend of friends) {
//   string += friend + ",";
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// join

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

// const string = friends.join(", ");

// console.log(friends);
// console.log(string);

// Напиши скрипт который заменяет регистр каждого символа в строке на пртивоположный
// Например, если строка "JavaScript", то на выходе должна быти строка 'jAVAsCRIPT'

// 1 вариант

// const string = "JavaScript";

// const letters = string.split("");
// let invertedString = "";
// console.log(letters);

// for (const latter of letters) {
//   console.log(latter);
//   if (latter === latter.toLowerCase()) {
//     console.log("Эта буква в нижнем регистре!!! - ", latter);
//     invertedString += latter.toUpperCase();
//   } else {
//     invertedString += latter.toLowerCase();
//   }
// }
// console.log(invertedString);

// 2 вариант

// const string = "JavaScript";

// const letters = string.split("");
// let invertedString = "";
// console.log(letters);

// for (const latter of letters) {
//   console.log(latter);
//   invertedString +=
//     latter === latter.toLowerCase()
//       ? latter.toUpperCase()
//       : latter.toLowerCase();
// }
// console.log(invertedString);

// Делаем slug

// const title = "Top 10 benefits of React framework";

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(" ");
// console.log(words);

// const slug = words.join("-");
// console.log(slug);
// пример 2
// const slug1 = title.toLowerCase().split(" ").join("-");
// console.log(slug1);

// Напиши скрипт который считает сумму элементов двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);
// console.log(numbers);
// console.log(array1);
// console.log(array2);

//---------------------------------------------------------

// Работаем с колекцией карточек в trello
// - метод splice()
// - удалить
// - добавить
// - обновить

// const cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];

// console.table(cards);

// удаление (по индексу), метод indexof()

// const cardToRemove = "Карточка-3";
// const index = cards.indexOf(cardToRemove);

// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

// добавление (по индексу)

// const cardToInsert = "Карточка-6";
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// обновление (по индексу)

// const cardToUpdate = "Карточка-4";
// const index = cards.indexOf(cardToUpdate);
// console.log(index);

// cards.splice(index, 1, "Обновленная карточка-4");

// console.table(cards);
