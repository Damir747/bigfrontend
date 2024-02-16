const arr = [1, [2], [3, [4, [5, [6]]]]];

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flatRecursively(arr, depth = 1) {
	if (depth <= 0) {
		return arr;
	}
	const result = [];
	let flatArray = true;
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result.push(...arr[i]);
			flatArray = false;
		} else {
			result.push(arr[i]);
		}
	}
	if (flatArray) {
		return result;
	}
	return flat(result, --depth);
}

function flat(arr, depth = 1) {
	if (depth <= 0) {
		return arr;
	}
	let notFlatArray = true;
	let j = 1;
	while (j <= depth && notFlatArray) {
		const temp = [];
		notFlatArray = false;
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				temp.push(...arr[i]);
				notFlatArray = true;
			} else {
				temp.push(arr[i]);
			}
		}
		arr = temp.slice();
		j++;
	}
	return arr;
}

console.log(flat(arr));
// [1, 2, 3, [4]]

console.log(flat(arr, 1));
// [1, 2, 3, [4]]

console.log(flat(arr, 2));
// [1, 2, 3, 4]

console.log(flat(arr, 3));
