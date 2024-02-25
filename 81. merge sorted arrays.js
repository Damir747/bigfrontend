/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]} 
 */
function merge(arrList) {
	const counter = new Array(arrList.length).fill(0);
	const result = [];
	let totalLength = 0;
	for (let i = 0; i < arrList.length; i++) {
		totalLength += arrList[i].length;
	}
	while (result.length < totalLength) {
		let min = Infinity;
		let counterMin;
		for (let i = 0; i < arrList.length; i++) {
			if (counter[i] < arrList[i].length) {
				if (min > arrList[i][counter[i]]) {
					min = arrList[i][counter[i]];
					counterMin = i;
				}
			}
		}
		result.push(arrList[counterMin][counter[counterMin]]);
		counter[counterMin]++;
	}
	return result;
};

console.log(merge(
	[
		[1, 1, 1, 100, 1000, 10000],
		[1, 2, 2, 2, 200, 200, 1000],
		[1000000, 10000001],
		[2, 3, 3]
	]
));
// [1,1,1,1,2,2,2,2,3,3,100,200,200,1000,1000,10000,1000000,10000001]