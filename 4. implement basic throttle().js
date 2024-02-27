/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */

function throttle(func, wait) {
	let timer;
	let stashed;

	function cooling() {
		timer = setTimeout(check, wait);
	};

	const check = () => {
		timer = null;
		if (stashed) {
			func.call(stashed[0], ...stashed[1]);
			stashed = null;
			cooling();
		}
	};

	return function (...args) {
		if (timer) {
			stashed = [this, args];
		} else {
			func.call(this, ...args);
			cooling();
		}
	}
}