/**
 * @param {number[]} arr
 * @returns number
*/
const findSingle = (arr) => {
	const obj = {};
	for (let i = 0; i < arr.length; i++) {
		if (obj.hasOwnProperty(arr[i])) {
			obj[arr[i]]++;
			if (obj[arr[i]] === 2) {
				delete obj[arr[i]];
			}
		} else {
			obj[arr[i]] = 1;
		}
	}
	return +Object.keys(obj);
}

const arr = [10, 2, 2, 1, 0, 0, 10]
console.log(findSingle(arr)); // 1