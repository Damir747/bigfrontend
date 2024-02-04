const arr1 = [5, 4, 2, 7, 5, 6, 7, 8, 66];
const arr2 = [5, 8, 7, 6, 5, 3, 22, 1, 4, 5, 6, 7];

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
	const arr1sorted = Array.from(new Set(arr1)).sort((a, b) => a - b);
	const arr2sorted = Array.from(new Set(arr2)).sort((a, b) => a - b);
	let id1 = 0;
	let id2 = 0;
	const result = [];
	while (id1 < arr1sorted.length && id2 < arr2sorted.length) {
		if (arr1sorted[id1] === arr2sorted[id2]) {
			result.push(arr1sorted[id1]);
			id1++;
			id2++;
		} else {
			if (arr1sorted[id1] < arr2sorted[id2]) {
				id1++;
			} else {
				id2++;
			}
		}
	}
	return result;
}
