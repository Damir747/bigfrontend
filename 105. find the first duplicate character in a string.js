/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
	const obj = {};
	for (let i = 0; i < str.length; i++) {
		if (obj.hasOwnProperty(str[i])) {
			return str[i];
		}
		obj[str[i]] = i;
	}
	return null;
}