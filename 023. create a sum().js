/**
 * @param {number} num
 */
const sum = (num, currentSum = 0) => {
	const func = (arg) => sum(arg, currentSum + num);
	func.valueOf = () => currentSum + num;
	return func;
}

console.log(sum(1)(2)(-3)(7) == 7);
