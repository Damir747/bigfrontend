function lastIndex(arr, target) {
	if (arr.length === 0) {
		return -1;
	}
	let index = Math.floor(arr.length / 2);
	if (arr[index] === target) {
		while (index < arr.length && arr[index + 1] === target) {
			index++;
		}
		return index;
	}
	if (arr[index] < target) {
		return index + 1 + lastIndex(arr.slice(index + 1), target);
	}
	return lastIndex(arr.slice(0, index), target);
}

/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementAfter(arr, target) {
	const index = lastIndex(arr, target);
	if (index === -1) {
		return undefined;
	}
	if (index === arr.length - 1) {
		return undefined;
	}
	return arr[index + 1];
}