/*
Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице

1) Создать переменную num со значением 266219 (тип данных число)

2) Вывести в консоль произведение (умножение) цифр этого числа
Например: число 123, при помощи javaScript получить каждое цифру ( 1, 2, 3 ) и перемножить их.
Правильно использовать цикл или методы перебора.

3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)

4) Вывести на экран первые 2 цифры полученного числа

5) В отдельном репозитории для усложненных уроков, добавить папку или ветку
   со вторым уроком в свой репозиторий на GitHub
*/

// Способ 1
const num1 = 266219,
   string1 = num1.toString();

let result1 = 1;

for (let i = 0; i < string1.length; i++) result1 *= string1[i];

// console.log('result 1: ', result1);
result1 **= 3;
// console.log('result 1 * 3: ', result1);
result1 = result1.toString();
// console.log('result 1: ', result1);
console.log('result 1 slice: ', result1.slice(0, 2));
console.log('');


// Способ 2
const num2 = 266219,
   string2 = num2.toString();

let result2 = 1;

for (let number of string2) result2 *= number;

// console.log('result 2: ', result2);
result2 **= 3;
// console.log('result 2 * 3: ', result2);
result2 = result2.toString();
// console.log('result 2: ', result2);
console.log('result 2 slice: ', result2.slice(0, 2));