/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(arr, target) {
	if (arr.length === 0) {
		return -1;
	}
	const index = Math.floor(arr.length / 2);
	if (arr[index] === target) {
		return index;
	}
	if (arr[index] < target) {
		return index + 1 + binarySearch(arr.slice(index + 1), target);
	}
	return binarySearch(arr.slice(0, index), target);
}