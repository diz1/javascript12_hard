'use strict';
const dateA = document.getElementById('date-a'),
	dateB = document.getElementById('date-b'),
	days =
		[
			{
				id: 1,
				name: 'Понедельник'
			},
			{
				id: 2,
				name: 'Вторник'
			},
			{
				id: 3,
				name: 'Среда'
			},
			{
				id: 4,
				name: 'Четверг'
			},
			{
				id: 5,
				name: 'Пятница'
			},
			{
				id: 6,
				name: 'Суббота'
			},
			{
				id: 0,
				name: 'Воскресенье'
			}
		],
	months =
		[
			{
				id: 0,
				name: 'Января'
			},
			{
				id: 1,
				name: 'Февраля'
			},
			{
				id: 2,
				name: 'Марта'
			},
			{
				id: 3,
				name: 'Апреля'
			},
			{
				id: 4,
				name: 'Мая'
			},
			{
				id: 5,
				name: 'Июня'
			},
			{
				id: 6,
				name: 'Июля'
			},
			{
				id: 7,
				name: 'Августа'
			},
			{
				id: 8,
				name: 'Сентября'
			},
			{
				id: 9,
				name: 'Октября'
			},
			{
				id: 10,
				name: 'Ноября'
			},
			{
				id: 11,
				name: 'Декабря'
			}
		];

let render = (dateA, dateB) => {
	const date = new Date(),
		getMonth = () => {
			let month;
			months.forEach(item => {
				if (item.id === date.getMonth()) {
					month = item.name.toLowerCase();
					return month;
				}
			});
			return month;
		},
		getDay = () => {
			let day;
			days.forEach(item => {
				if (item.id === date.getDay()) {
					day = item.name;
					return day;
				}
			});
			return day;
		};
	let day = getDay(),
		month = getMonth(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

	let getHoursEnding = () => {
			if (hours === 1 || hours === 21) {
				return '';
			} else if (hours > 1 || hours.toString().endsWith('2') ||
				hours.toString().endsWith('3') ||
				hours.toString().endsWith('4')) {
				return 'а';
			}
			return 'ов';
		},
		getEnding = fore => {
			if (fore.toString().endsWith('1')) {
				if (fore === 11) {
					return '';
				}
				return 'а';
			} else if ((fore > 1 && fore < 4) || (fore > 13 && fore.toString().endsWith('2') ||
				fore.toString().endsWith('3') ||
				fore.toString().endsWith('4'))) {
				return 'ы';
			} else {
				return '';
			}
		};

	if (dateA) {
		return `
			Сегодня ${day}, ${date.getDate()} ${month}
			 ${date.getFullYear()} года, ${hours} час${getHoursEnding()} 
			 ${minutes} минут${getEnding(minutes)} ${seconds} секунд${getEnding(seconds)}
		`;
	} else if (dateB) {
		let day = date.getDay(),
			month = date.getMonth();

		if (day.toString().length === 1) {
			day = '0' + day;
			if (month.toString().length === 1) {
				month = '0' + month;
				if (hours.toString().length === 1) {
					hours = '0' + hours;
					if (minutes.toString().length === 1) {
						minutes = '0' + minutes;
						if (seconds.toString().length === 1) {
							seconds = '0' + seconds;
						}
					}
				}
			}
		}
		return `${day}.${month}.${date.getFullYear()} - ${hours}:${minutes}:${seconds}`;
	}
};

setInterval(() => {
	dateA.textContent = render(dateA);
	dateB.textContent = render('' ,dateB);
}, 1000);
