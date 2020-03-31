/*
1) Создайте функцию, которая принимает 1 аргумент (название произвольное)

— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
— В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)
*/

const deleteSpaces = str => {
	const maxSpacesPerSide = 10;
	for (let i = 0; i < maxSpacesPerSide; i++) {
		if (str.startsWith(' ')) {
			str = str.slice(1);
		}
	}
	for (let j = 0; j < maxSpacesPerSide; j++) {
		if (str.endsWith(' ')) {
			str = str.slice(0, -1);
		}
	}
	return str;
};

const addDots = str => {
	if (str.length > 30) {
		str = deleteSpaces(str.substring(0, 30));
		return str + '...';
	}
};

const check = string => {
	if (string) {
		string.toString();
		deleteSpaces(string);
		return addDots(string);
	} else {
		return ('Введите строку');
	}
};

console.log(check(prompt('Введите строку')));
// Тестовая строка - 'Привет, я строка без пробелов   в начале и в конце и с длинной более 30 символов'
