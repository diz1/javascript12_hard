/*
1.Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
   a. через if,
   b. через switch-case
   c. через многомерный массив без ифов и switch.

2. У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
*/

// Решение для пункта 1
let lang = prompt('Введите язык (RU или EN)');
lang = lang.toLowerCase();
let daysOfTheWeekIf = [
	['ru', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	['en', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];
let daysOfTheWeekSwitch = [
	['ru', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	['en', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];
let daysOfTheWeek = [
	['ru', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	['en', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

let a,
	b;

// Вариант А
if (lang === 'ru') {
	daysOfTheWeekIf[0].splice(0, 1);
	a = daysOfTheWeekIf[0].join(', ');
	console.log('Отрабка if для RU-ru: ', a);
} else if (lang === 'en') {
	daysOfTheWeekIf[1].splice(0, 1);
	a = daysOfTheWeekIf[1].join(', ');
	console.log('Отрабка if для EN-en: ', a);
} else {
	console.log('Ошибка ввода, повторите попытку');
}


// Вариант B
switch (lang) {
	case 'ru':
		daysOfTheWeekSwitch[0].splice(0, 1);
		b = daysOfTheWeekSwitch[0].join(', ');
		console.log('Отрабка switch для RU-ru: ', b);
		break;
	case 'en':
		daysOfTheWeekSwitch[1].splice(0, 1);
		b = daysOfTheWeekSwitch[1].join(', ');
		console.log('Отрабка switch для EN-en: ', b);
		break;
	default:
		console.log('Ошибка ввода, повторите попытку');
		break;
}


// Вариант C
let item = daysOfTheWeek.filter(item => item[0].startsWith(lang));
item[0].splice(0, 1);
let c = item[0].join(', ');
console.log('Отрабка без условий для RU-ru или EN-en: ', c);


// Решение для пункта 2
const namePerson = prompt('Введите имя');
namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ?
 console.log('Преподаватель') : console.log('Студент');

