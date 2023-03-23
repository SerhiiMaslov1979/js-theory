// 3-1 ---------------------------------------------
// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,
//   getName() {
//     console.log("Ага это getName :)");
//   },
// };

// console.log(playlist);

// playlist.getName(5);

// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// const propertyName = "tracks";

// console.log(playlist.rating);
// console.log(["rating"]);
// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// console.log(playlist.propertyName);

// Пример ---------------
// const x = {};

// console.log({});

// const fn = function (myObject) {
//   console.log(myObject);
// };
// const rtfm = function () {
//   return {};
// };

// console.log(rtfm());
//--------------------

// короткая запись свойств

// const username = "Mango";
// const email = "mango@mail.com";

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

// const inputName = "color";
// const inputValue = "tomato";

// const colorPickerData = {
//   [inputName]: inputValue,
// };
// console.log(colorPickerData);
// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;
// console.log(b === a);
// a.c = 100;

// console.log(a);
// console.log(b);

//массивы и функции это объекты

// const a = [1, 2, 3];
// a.push(4);
// console.log(a);

// Перебор через For in и Object.keys|value|entries

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   console.log(value);
//   totalFeedback += value;
// }

// console.log("totalFeedback: ", totalFeedback);

// Работа с колекцией (массивов объектов)

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// console.table(friends);

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     names.push(friend.name);
//   }
//   console.log(names);
// };

// console.log(getAllNames(friends));

//получение друзей онлайн

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };
// console.log(getOnlineFriends(friends));

//-----------------------------------
// 3 - 2
// Операция  spread (распыление)
// array.prototype.concat() и аналог через spread

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers);

// const numbers = [
//   0,
//   5,
//   10,
//   ...[1, 2, 3],
//   5000,
//   ...[4, 5, 6],
//   6000,
//   ...[7, 8, 9],
//   8000,
// ];
// console.log(numbers);

// поиск самой маленькой или большой температуры(числа)

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(1, 4, 17, 5, 6));
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// Math.max(18, 14, 12, 21, 17, 29, 24);
// console.log(temps);

// const a = [1, 2, 3];

// const b = [a];

// console.log(a);
// console.log(b);

//------------------------------------

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log("a: ", a);
// console.log("b: ", b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000;

// console.log("a: ", a);
// console.log("b: ", b);

//---------------------------------------

// const lastWeekTemps = [1, 2, 3];

// const currentTemps = [4, 5, 6];

// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

//-----------------------

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

// console.log(c);

//---------------------------------------

// Деструкторизация объекта
// Значение по умолчанию
// Имя переменной отличной от свойства

// const playlist = {
//   name: "Мой супер плейлист",
//   rating: 5,
//   tracks: ["трек-1", "трек-2", "трек-3"],
//   trackCount: 3,
// };

// const { rating, tracks, name, trackCount } = playlist;

// console.log(name, rating, tracks, trackCount);

// console.log(rating);
// console.log(tracks);
// console.log(name);
// console.log(trackCount);

// console.log(
//   playlist.name,
//   playlist.rating,
//   playlist.tracks,
//   playlist.trackCount
// );

// Глубокая деструктризация

// const profile = {
//   names: "Jacques Gluke",
//   tag: "jqluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { names, tag, location, avatar, stats } = profile;
// const { followers, views, likes } = stats;
// console.log(names, tag, location, avatar, followers, views, likes);

//---------------------------------------

// Деструкторизация массивов
