/**
* @param {Node} node
* @param {any} value
*/
class NodeStore {
	constructor() {
		this.state = [];
	}
	set(node, value) {
		for (let i = 0; i < this.state.length; i++) {
			if (this.state[i][0] === node) {
				this.state[i] = [node, value];
				return this.state[i];
			}
		}
		this.state.push([node, value]);
		return this.state[this.state.length - 1];
	}

	get(node) {
		for (let i = 0; i < this.state.length; i++) {
			if (this.state[i][0] === node) {
				return this.state[i];
			}
		}
		return undefined;
	}

	has(node) {
		for (let i = 0; i < this.state.length; i++) {
			if (this.state[i][0] === node) {
				return true;
			}
		}
		return false;
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