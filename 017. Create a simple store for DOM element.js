/**
* @param {Node} node
* @param {any} value
*/
class NodeStore {

	set(node, value) {
		this[node] = value;
	}

	get(node) {
		return this[node];
	}

	has(node) {
		return this.hasOwnProperty(node);
	}
}

const map = new NodeStore();
const node1 = { 'name': 'Damir' };
const node2 = ['a', 'b'];
map.set(node1, 'Damir');
console.log(map.has(node2));
map.set(node2, 'Dinara');
console.log(map.get(node1));
console.log(map.get(node2));
console.log(map.has(node1));
console.log(map.has(node2));