const users = [
	{
		name: 'Anna',
		age: 28,
		city: 'Odesa',
	},
	{
		name: 'Denis',
		age: 33,
		city: 'Helsinki',
	},
	{
		name: 'Nikita',
		age: 18,
		city: 'Kiyv',
	},
];
for (const { name, age, city } of users) {
	console.log(`Name: ${name}, Age: ${age}, City: ${city} `);
}
