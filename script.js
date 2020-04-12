'use strict';

const header = document.querySelector('.header'),
	button = document.querySelector('.button');

let randomNumberColor = () => {
	let number = 0;
	return () => {
		number = Math.random().toString(16).slice(2, 8);
		return number;
	};
};


let getRandomNumberColor = randomNumberColor();

document.body.style.transition = '.2s';
let number = getRandomNumberColor();

header.textContent = `#${number}`;
document.body.style.backgroundColor = `#${number}`;

button.addEventListener('click', () => {
	number = getRandomNumberColor();
	header.textContent = `#${number}`;
	document.body.style.backgroundColor = `#${number}`;
});
