/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */

const convertArr = {
	1000: 'M',
	500: 'D',
	100: 'C',
	50: 'L',
	10: 'X',
	5: 'V',
	1: 'I',
};

function integerToRoman(num) {
	if (num > 3999) {
		return 'error';
	}
	let result = '';
	for (let place = 3; place >= 0; place--) {
		const place10 = 10 ** place;	// разрядность
		const number = Math.floor(num / place10) % 10;	// значение разряда
		const cut = number % 5;	// повторы 1
		switch (number) {
			case 9:
			case 4:
				result += convertArr[place10] + convertArr[(number + 1) * place10];
				break;
			case 8:
			case 7:
			case 6:
				result += convertArr[(number - cut) * place10] + convertArr[place10].repeat(cut);
				break;
			case 5:
				result += convertArr[number * place10];
				break;
			case 3:
			case 2:
			case 1:
				result += convertArr[place10].repeat(cut);
				break;
			default:
				break;
		}
	}
	return result;
}

for (let i = 1; i < 60; i++) {
	console.log(integerToRoman(i));
}