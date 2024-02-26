/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
	for (let i = 0; i < items.length; i++) {
		while (i != newOrder[i]) {
			const j = newOrder[i];
			[items[i], items[j]] = [items[j], items[i]];
			[newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
		}
	}
}

const a = ['A', 'B', 'C', 'D', 'E', 'F'];
const b = [1, 5, 4, 3, 2, 0];
sort(a, b);
console.log(a);
// ['F', 'A', 'E', 'D', 'C', 'B']