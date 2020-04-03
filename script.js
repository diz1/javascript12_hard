/*
	1) Создать массив week и записать в него дни недели в виде строк
        - Вывести на экран все дни недели
        - Каждый из них с новой строчки
        - Выходные дни - курсивом
        - Текущий день - жирным шрифтом(использовать объект даты)
*/
let week =
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
	];
let div = document.getElementById('week'),
	day = new Date();
week.forEach(item => {
	let template =
		`
			<br>
			${item.name}<br>
		`;
	if (item.id === 0 || item.id === 6) {
		template =
			`
				<br>
				<i>${item.name}</i><br>
			`;
		div.insertAdjacentHTML('beforeend', template);
	} else if (item.id === day.getDay()) {
		template =
			`
				<br>
				<b>${item.name}</b><br>
			`;
		div.insertAdjacentHTML('beforeend', template);
	} else {
		div.insertAdjacentHTML('beforeend', template);
	}
});
