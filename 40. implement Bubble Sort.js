/**
 * @param {number[]} arr
 */
function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
bubbleSort(arr);
console.log(arr);