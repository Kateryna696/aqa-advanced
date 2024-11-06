const car1 = {
	brand: 'Opel',
	model: 'Vectra A',
	year: 1993,
};
const car2 = {
	brand: 'KIA',
	model: 'K5',
	owner: 2019,
};
const car3 = { ...car1, ...car2 };
console.log(car3);
