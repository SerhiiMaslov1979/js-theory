// 1. Example базовые математические операторы.
// Выведи на экранобщее количество яблок и винограда.
// Разницу яблок и венограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);

// 2. Example Комбинированые операторы
// Замена вырожения переопределение комбинированым
// оператором +=.

// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);

// 3. Example 3 - Приоритет операторов

// Разбери приоритет операторов в инструкции
// присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// 4. Example - Класс Math

// Напишите скрипт, который выводит в консоль
// округлення вверх/вниз и т.д. значення переменной volue.
// Используйте методы Math.floor(), Math.ceil() и Math.round().
// Проверь что будет в консоли при значениях 27.3 и 27.9.

// const volue = 27.5;
// console.log("Math.floor", Math.floor(volue));
// console.log("Math.ceil", Math.ceil(volue));
// console.log("Math.round", Math.round(volue));

// 5. Example - Шаблонные строки
// Составь фразу с помощью шаблонных строк
// A has B bots in stock, где А, В -
// переменные вставленные в строку

// const companyName = "Cyberdyne System";
// const repairBots = 150;
// const defenceBots = 50;
// const massage = `${companyName} has ${repairBots} repair bots and ${defenceBots} def bots in stock`;
// console.log(massage); // "Cyberdyne System has 200 bots in stock"

// 6. Example - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела
// человека. Для этого необходимо разделить вес в килограммах
// на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и Height,
// но не как числа? а в виде строк (специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 и 24,7,
// т о есть в качестве разделителя дробной части может быть
// запатая.
//
// Индекс массы тела необходимо округлить до одной цифры
// после запятой;

// let weight = "88,3";
// let height = "1.75";
// let weight = "78";
// let height = "1.58";

// console.log(Number.parseFloat(weight));

// const correctWeight = weight.replace(",", ".");
// console.log(correctWeight);
// const heightNumber = Number.parseFloat(height);

// const bmi = Number.parseFloat(correctWeight) / Math.pow(heightNumber, 2);
// const bmi = (correctWeight / Math.pow(heightNumber, 2)).toFixed(1);
// console.log(bmi); //28.8

// 9.
// Отрефактори код так, чтобы в переменную Volue
// присваевалось значение переменной incomingValue,
// если оно не равно undefined или null.
//В противном случае должно присваиваться
// значение defaultValue.
// Проверь работу скрипта для следующего значения
// переменной incomingValue: null, undefined, 0, false.
//Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);
// const incomingValue = null;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// 10. Напиши скрипт который приведет значение
// totalMinutes (количиство минут) в строку в формате
// часов и минут НН:ММ.

//70 покажет 01:10
//458 пакажет 07:30
//1441 пакажет 24:01

// const totalMinutes = 70;
// const totalMinutes = 458;
// const totalMinutes = 1441;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
