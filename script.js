/*
1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

2) Вывести в столбик все простые числа от 1 до 100
— Статья про простые числа - КЛИК
— Рядом с каждым числом написать оба делителя данного числа
    Например: “Делители этого числа: 1 и n”

3) Запушить проект в репозиторий для усложненных заданий на GitHub
*/

let arr = [234, 532, 412, 590, 200, 503, 404];

const getEven = () => {
	let evenArr = [];
	arr.forEach(item => {
		item = item.toString();
		if (item.startsWith('2') || item.startsWith('4')) {
			evenArr.push(parseFloat(item));
			return evenArr;
		} else {
			return false;
		}
	});
	return evenArr;
};

console.log(getEven());

const primeNumbers = () => {
	const n = 100;
	for (let i = 1; i < n; i++) {
		if (i % i === 0) {
			let count = 0;
			for (let j = 1; j <= i; j++) {
				if (i % j === 0) {
					count++;
				}
				if (count === 2 && j === i) {
					console.log(`${i} - Делители этого числа: ${1} и ${i}`);
				}
				if (count > 2) {
					break;
				}
			}
		}
	}
};

console.log(primeNumbers());
