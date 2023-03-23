// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };
// const add = function (x, y) {
//   return x + y;
// };
// const sub = function (x, y) {
//   return x - y;
// };
// doMath(2, 3, add);
// doMath(10, 8, sub);

// отложеные вызовы: интервалы

// const callback = function () {
//   console.log("Через 2 секунды внутри колбека в таймауте");
// };

// console.log("В коде перед таймаутом");

// setTimeout(callback, 2000);

// console.log("В коде после таймаута");

//----------------- пересмотреть 10 раз)))------------------------

// const filter = function (array, test) {
//   const filterArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);
//     if (passed) {
//       filterArray.push(el);
//     }
//   }
//   return filterArray;
// };

// 1. Надо передать фукнцию
// 2. Функция получает элемент массива
// 3. Если элемент массива удовлетворяет условия то функция true;
// 4. Если элемент массива не удовлетворяет условия то функция false;

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//   return value <= 4;
// });
// console.log(r2);

//-------------------------------------------------------------------
