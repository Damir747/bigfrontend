// sliding window
/**
 * @param {string} str
 * @return {string}
 */
function longestUniqueSubstr(str) {
	const obj = {};
	let left = 0;
	let right = 0;
	let result = '';
	while (right < str.length) {
		if (obj.hasOwnProperty(str[right])) {
			left = obj[str[right]] + 1;
		}
		obj[str[right]] = right;
		let temp = str.slice(left, right + 1);
		if (result.length < temp.length) {
			result = temp;
		}
		right++;
	}
	return result;
};

console.log(longestUniqueSubstr('aaaaa'));
// 'a'

console.log(longestUniqueSubstr('abcabc'));
// 'abc', or 'bca', or 'cab'

console.log(longestUniqueSubstr('a12#2'));
// 'a12#'

console.log(longestUniqueSubstr('a12#23'));
// 'a12#'

console.log(longestUniqueSubstr('1234567890'));
// '1234567890'
