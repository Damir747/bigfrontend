/**
 * @param {number[]} array
 */
function quickSort(array) {
	const temp = function quickSortSub(arr) {
		if (arr.length < 2) {
			return arr;
		}
		const pivot = Math.floor(Math.random(1) * arr.length);
		const left = [];
		const middle = [];
		const right = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < arr[pivot]) {
				left.push(arr[i])
			} else if (arr[i] > arr[pivot]) {
				right.push(arr[i]);
			} else {
				middle.push(arr[i]);
			}
		};
		return quickSortSub(left).concat(middle).concat(quickSortSub(right));
	}(array);
	for (let i = 0; i < array.length; i++) {
		array[i] = temp[i];
	}
};

arr = [5, 4, 3, 7, 1, 9, 2];
quickSort(arr);
console.log(arr);