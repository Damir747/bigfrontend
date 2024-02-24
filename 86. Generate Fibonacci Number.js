/**
 * @param {number} n - non-negative integer
 * @return {number}
 */
function fib(n) {
	const arr = new Array(n + 1);
	function fibSub(n) {
		if (n === 0) {
			return 0;
		}
		if (n === 1) {
			return 1;
		}
		return arr[n - 2] + arr[n - 1];
	};
	for (let i = 0; i <= n; i++) {
		arr[i] = fibSub(i);
	}
	return arr[n];
}

for (let i = 0; i < 1000; i++) {
	console.log(fib(i));
}

