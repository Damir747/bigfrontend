/**
 * @param {number[]} array
 */
function mergeSort(array) {
	const temp = function mergeSubSort(arr) {
		if (arr.length === 0 || arr.length === 1) {
			return arr;
		}
		if (arr.length === 2) {
			if (arr[0] <= arr[1]) {
				return arr;
			}
			return [arr[1], arr[0]];
		}
		const middle = Math.floor(arr.length / 2);
		const arr1 = mergeSubSort(arr.slice(0, middle));
		const arr2 = mergeSubSort(arr.slice(middle));
		let i = 0;
		let j = 0;
		const result = new Array(arr1.length + arr2.length);
		let k = 0;
		while (k < result.length) {
			if (j >= arr2.length || arr1[i] < arr2[j]) {
				result[k] = arr1[i];
				i++;
			} else {
				result[k] = arr2[j];
				j++;
			}
			k++;
		}
		return result;
	}(array);
	for (let i = 0; i < array.length; i++) {
		array[i] = temp[i];
	}
}
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
mergeSort(arr)
console.log(arr);
