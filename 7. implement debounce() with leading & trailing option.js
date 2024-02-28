/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
	let timer;

	return function (...args) {
		let isInvoked = false;

		if (option.leading && !timer) {
			func.call(this, ...args);
			isInvoked = true;
		};

		if (timer) {
			clearTimeout(timer);
		};
		timer = setTimeout(() => {
			if (option.trailing && !isInvoked) {
				func.call(this, ...args);
			}
			timer = null;
		}, wait);
	};
};
