function makeCounter() {
	function counter() {
		counter.count++;
		console.log(counter.count);
		return counter.count;
	}
	counter.count = 0;
	counter.reset = function () {
		counter.count = 0
	};
	return counter;
}

const count = makeCounter();

const asis = []
const tobe = []
for (let i = 1; i <= 10; i++) {
	asis.push(i);
	tobe.push(count());
}

console.log(asis);
console.log(tobe);
count();
count();
count();
count.reset();
count();
