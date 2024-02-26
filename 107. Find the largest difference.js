/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
	if (arr.length < 2) {
		return 0;
	}
	let min = Infinity;
	let max = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		};
		if (arr[i] > max) {
			max = arr[i];
		};
	}
	return Math.abs(min - max);
};


console.log(largestDiff([-1, 2, 3, 10, 9]));
// 11,  obviously Math.abs(-1 - 10) is the largest

console.log(largestDiff([]));
// 0

console.log(largestDiff([1]));
// 0