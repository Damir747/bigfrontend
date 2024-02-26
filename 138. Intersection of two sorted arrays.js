/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function intersect(arr1, arr2) {
	let left1 = 0;
	let left2 = 0;
	const result = [];
	while (left1 < arr1.length && left2 < arr2.length) {
		if (arr1[left1] === arr2[left2]) {
			result.push(arr1[left1]);
			left1++;
			left2++;
		} else {
			if (arr1[left1] < arr2[left2]) {
				left1++;
			} else {
				left2++;
			}
		}
	}
	return result;
};

console.log(intersect(
	[1, 2, 2, 3, 4, 4],
	[2, 2, 4, 5, 5, 6, 2000]
));
// [2,2,4]
