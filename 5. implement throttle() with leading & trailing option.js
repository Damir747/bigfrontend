/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = { leading: true, trailing: true }) {
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
		};
	};

	return function (...args) {
		if (timer) {
			if (option.trailing) {
				stashed = [this, args];
			}
		} else {
			if (option.leading) {
				func.call(this, ...args);
			}
			cooling();
		};
	};
};
