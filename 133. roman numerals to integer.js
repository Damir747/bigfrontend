const obj = {
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000,
};

/**
 * @param {string} str - roman numeral string
 * @returns {number} integer
 */

const romanToInteger = (str) => {
	let result = 0;
	for (let i = 0; i < str.length - 1; i++) {
		if (obj[str[i]] < obj[str[i + 1]])
			result -= obj[str[i]];
		else {
			result += obj[str[i]];
		}
	};
	result += obj[str[str.length - 1]];
	return result;
};

console.log(romanToInteger('CXXIII'));
// 123

console.log(romanToInteger('MCMXCIX'));
// 1999

console.log(romanToInteger('MMMCDXX'));
// 3420
