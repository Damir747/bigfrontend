/**
 * @param {number[]} arr
 */
function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let index = i;
		for (j = i + 1; j < arr.length; j++) {
			if (arr[index] > arr[j]) {
				index = j;
			}
		}
		if (index !== i) {
			[arr[i], arr[index]] = [arr[index], arr[i]];
		}
	}

}

arr = [5, 4, 3, 7, 1, 9, 2];
selectionSort(arr);
console.log(arr);