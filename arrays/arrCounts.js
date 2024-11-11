const numbers = [12, -5, 0, 9, 3, 0, -10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (const a of numbers) {
	if (a > 0) {
		positiveCount++;
	} else if (a < 0) {
		negativeCount++;
	} else zeroCount++;
}
console.log('Positive numbers: ' + positiveCount);
console.log('Negative numbers: ' + negativeCount);
console.log('Zero numbers: ' + zeroCount);
