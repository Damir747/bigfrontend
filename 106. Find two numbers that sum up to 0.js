
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
	const ideal = 0;
	const obj = {};
	for (let i = 0; i < arr.length; i++) {
		obj[ideal - arr[i]] = i;
	};
	for (let i = 0; i < arr.length; i++) {
		if (obj.hasOwnProperty(arr[i])) {
			return [i, obj[arr[i]]];
		}
	}
	return null;
}


console.log(findTwo([1, 2, 3, -1]));
// [0,3]

console.log(findTwo([1, 2, 3, -1, -2, 0]));
// [0,3] or [1,4] or [5, 5]

console.log(findTwo([1, 2, 3, 4]));
// null
