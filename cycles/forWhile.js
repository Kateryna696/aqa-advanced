console.log('The next table for a for cycle:');
const myNumberFor = 7;
let result;
for (let i = 1; i <= 10; i++) {
	result = myNumberFor * i;
	console.log(myNumberFor + 'x' + i + '=' + result);
}
console.log('The next table for a while cycle:');
const myNumberWhile = 5;
let count = 1;
let result2;
while (count <= 10) {
	result2 = myNumberWhile * count;
	console.log(myNumberWhile + 'x' + count + '=' + result2);
	count++;
}
