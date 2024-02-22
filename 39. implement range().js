/**
 * @param {integer} from
 * @param {integer} to
 */

// function range(from, to) {
// 	return {
// 		[Symbol.iterator]: function* () {
// 			while (from <= to) {
// 				yield from++;
// 			}
// 		}
// 	}
// }

// function range(from, to) {
// 	return function* () {
// 		while (from <= to) {
// 			yield from++;
// 		}
// 	}(from, to);
// }

function* range(from, to) {
	while (from <= to) {
		yield from++;
	}
};


for (let num of range(1, 4)) {
	console.log(num)
}
// 1
// 2
// 3
// 4