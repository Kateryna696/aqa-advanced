import { area } from './area.js';

function checkOrder(available, ordered) {
	if (ordered === 0) {
		console.log('Your order is empty');
		return;
	}
	if (available < ordered) {
		console.log('Your order is too large, we don’t have enough goods.');
		return;
	}
	console.log('Your order is accepted');
}
checkOrder(1, 0);
checkOrder(1, 1);
checkOrder(1, 8);
area(2, 2);
