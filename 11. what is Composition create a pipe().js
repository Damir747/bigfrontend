const times = (y) => (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) => (x) => x - y
const divide = (y) => (x) => x / y

const pipe = (funcs) =>
	(arg) => funcs.reduce(
		(result, func) => func(result), arg);

console.log(pipe([
	times(2)
])(1));

console.log(pipe([
	times(2),
	times(3)
])(1));
// x * 2 * 3

console.log(pipe([
	times(2),
	plus(3),
	times(4)
])(1));
// (x * 2 + 3) * 4

console.log(pipe([
	times(2),
	subtract(3),
	divide(4)
])(1));
// (x * 2 - 3) / 4
