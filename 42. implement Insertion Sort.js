/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		const temp = arr[i];
		while (j >= 0 && arr[j] > temp) {
			arr[j + 1] = arr[j];
			j--;
		}
		if (j + 1 < i) {
			arr[j + 1] = temp;
		}
	}
}

arr = [5, 4, 3, 7, 1, 9, 2, 3];
insertionSort(arr);
console.log(arr);