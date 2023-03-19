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

//----------------------------------------------------------
// 2 - 2

// Функции
// - Функциональные выражени
// - ргументы и параметры
// - Возврат значения

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log("Выполняется функция add");

//   return x + y;
// };

// const r1 = add(5, 3);
// console.log("r1: ", r1);

// const r2 = add(10, 15);
// console.log("r2: ", r2);

// const r3 = add(30, 50);
// console.log("r3: ", r3);

//-------------------------------------

// const fn = function (value) {
//   console.log(1);
//   console.log(2);

//   if (value < 50) {
//     return "Меньше чем 50";
//   }
//   return "Больше чем 50";
// };

// console.log("Результат функции: ", fn(10));

// console.log("Результат функции: ", fn(1000));

//------------------------------------

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log("Total: ", total);

//--------------------------------------------------------

// const calculateTotalPrice = function (items) {
//   console.log("items внутри функции: ", items);
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };
// // так
// const r1 = calculateTotalPrice([1, 2, 3]);
// console.log(`Общая сумма покупок ${r1}`);

// // или так
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

//-------------------------------------------------------

// const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
// const loginToFind = "aj4xth3m4n";

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найденю`;

// console.log(message);
// const findLogin = function (allLogins, loginToFind) {};

// или

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];

// 1 вариант

// const findLogin = function (allLogins, loginToFind) {
//   let message = `Пользователь ${loginToFind} не найден.`;
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден.`;
//     }
//   }
//   return message;
// };

// console.log(findLogin(logins, "avocod3r"));
// console.log(findLogin(logins, "k1widab3st"));
// console.log(findLogin(logins, "jam4l"));
// console.log(findLogin(logins, "poly1scute"));

// 2 вариант лучший

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден.`;
//     }
//   }
//   return `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, "avocod3r"));
// console.log(findLogin(logins, "k1widab3st"));
// console.log(findLogin(logins, "jam4l"));
// console.log(findLogin(logins, "poly1scute"));

// 3 вариант

// const findLogin = function (allLogins, loginToFind) {
//   let message = `Пользователь ${loginToFind} не найден.`;
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден.`;

//       return message;
//     }
//   }
//   return message;
// };

// console.log(findLogin(logins, "avocod3r"));
// console.log(findLogin(logins, "k1widab3st"));
// console.log(findLogin(logins, "jam4l"));
// console.log(findLogin(logins, "poly1scute"));

// 4 короткий вариант

const findLogin = function (allLogins, loginToFind) {
  const message = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найденю`;

  return message;
};

console.log(findLogin(logins, "avocod3r"));
console.log(findLogin(logins, "k1widab3st"));
console.log(findLogin(logins, "jam4l"));
console.log(findLogin(logins, "poly1scute"));

//-----------------------------------------------
