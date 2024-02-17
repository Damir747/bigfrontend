/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
*/
const compare = (str1, str2) => {
	const arr1 = str1.split('.');
	const arr2 = str2.split('.');
	for (let i = 0; i < arr1.length; i++) {
		if (+arr1[i] < +arr2[i]) {
			return -1;
		}
		if (+arr1[i] > +arr2[i]) {
			return 1;
		}
	}
	return 0;
}

console.log(compare('12.1.0', '12.0.9'));
// 1, meaning first one is greater

console.log(compare('12.1.0', '12.1.2'));
// -1, meaning latter one is greater

console.log(compare('5.0.1', '5.0.1'));
// 0, meaning they are equal.