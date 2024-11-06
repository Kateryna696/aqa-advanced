const person = {
	firstName: 'Kate',
	lastName: 'Kustova',
	age: 29,
};
person.email = 'johndoe@example.com';
delete person.age;
console.log(person);
