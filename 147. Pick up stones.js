function canWinStonePicking(n) {
	if (!Number.isInteger(n) || n <= 0) {
		return null;
	}
	n = (n - 1) % 3 + 1;
	if (n === 1) {
		return 'B';
	}
	if (n === 2 || n === 3) {
		return 'A';
	}
	// return canWinStonePicking(n-3);
}
for (let i = 0; i < 10; i++) {
	console.log(i, canWinStonePicking(i));
}
console.log('i', canWinStonePicking('i'));
console.log('', canWinStonePicking(''));
console.log(null, canWinStonePicking(null));
