/**
 * @param {number} n - non-negative integer
 * @return {number}
 */
function fib(n) {
	if (n === 0 || n === 1) {
		return 1;
	}
	return fib(n - 2) + fib(n - 1);
}


