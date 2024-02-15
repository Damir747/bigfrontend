function createCounter() {
	let _count = 0;
	return {
		get count() {
			return _count++;
		},
		set count(_value) {
			// count = _value;
			console.log(`Can't set value: it cannot be altered`)
		}
	};
}

const counter = createCounter()
console.log(counter.count); // 0, then it should increment
console.log(counter.count); // 1
console.log(counter.count); // 2
counter.count = 100 // it cannot be altered
console.log(counter.count); // 3