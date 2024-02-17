const count = (str) => {
	const obj = {};
	for (let i = 0; i < str.length; i++) {
		if (!obj.hasOwnProperty(str[i])) {
			obj[str[i]] = 0;
		}
		obj[str[i]] = obj[str[i]] + 1;
	}

	let max = 0;
	let result = [];
	for (key in obj) {
		if (max < obj[key]) {
			max = obj[key];
			result = [];
			result.push(key);
		} else {
			if (max === obj[key]) {
				result.push(key);
			}
		}
	}
	if (result.length === 1) {
		return result[0];
	}
	return result;
};

console.log(count('abbccc'));
// 'c'

console.log(count('abbcccddd'));
// ['c', 'd']