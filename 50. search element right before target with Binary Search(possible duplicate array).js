function firstIndex(arr, target) {
	if (arr.length === 0) {
		return -1;
	}
	let index = Math.floor(arr.length / 2);
	if (arr[index] === target) {
		while (index > 0 && arr[index - 1] === target) {
			index--;
		}
		return index;
	}
	if (arr[index] < target) {
		return index + 1 + firstIndex(arr.slice(index + 1), target);
	}
	return firstIndex(arr.slice(0, index), target);
}

/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementBefore(arr, target) {
	const index = firstIndex(arr, target);
	if (index === -1) {
		return undefined;
	}
	if (index === 0) {
		return undefined;
	}
	return arr[index - 1];
}

const arr = [1, 2, 3, 5, 5, 6, 7, 8, 9, 9, 9];
for (let i = 0; i < arr.length; i++) {
	console.log(elementBefore(arr, arr[i]));
}