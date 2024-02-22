/**
 * @param {Node} head
 * @return {boolean}
*/
const hasCircle = (head) => {
	const mySet = new Set();
	while (head) {
		if (mySet.has(head)) {
			return true;
		}
		mySet.add(head);
		head = head.next;
	}
	return false;
};
