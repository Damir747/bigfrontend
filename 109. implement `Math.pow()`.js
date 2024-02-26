/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow(base, power) {
	if (base === 0 && power === 0) {
		return 1;
	}
	if (power === 0) {
		return 1;
	}
	if (power < 0) {
		return 1 / pow(base, -power);
	}
	let result = 1;
	while (power > 0) {
		if (power % 2 === 0) {
			base *= base;
			power = Math.floor(power / 2);
		} else {
			result *= base;
			power -= 1;
		}
	}
	return result;
};