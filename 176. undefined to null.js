/**
 * @param {any} arg
 * @returns any
 */
function undefinedToNull(arg) {
	if (typeof arg === 'undefined') {
		return null;
	}
	if (typeof arg === 'object') {
		if (arg instanceof Array) {
			return arg.map((elem) => undefinedToNull(elem));
		} else {
			for (let key in arg) {
				arg[key] = undefinedToNull(arg[key]);
			}
		}
	}
	return arg;
}
console.log(undefinedToNull({ a: undefined, b: 'BFE.dev' }));
console.log(undefinedToNull({ a: ['BFE.dev', undefined, 'bigfrontend.dev'] }));