export class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	get title() {
		return this._title;
	}

	set title(value) {
		if (typeof value === 'string' && value !== '') {
			this._title = value;
		} else {
			console.error('The title should not be empty');
		}
	}

	get author() {
		return this._author;
	}

	set author(value) {
		if (typeof value === 'string' && value !== '') {
			this._author = value;
		} else {
			console.error('The author should not be empty');
		}
	}

	get year() {
		return this._year;
	}

	set year(value) {
		if (typeof value == 'number' && value > 0) {
			this._year = value;
		} else {
			console.error('The year should be more than 0');
		}
	}

	printInfo() {
		console.log(`The title of the book: ${this._title}, Author: ${this._author}, Year: ${this._year}`);
	}

	static getOldestBook(books) {
		return books.reduce((oldest, book) => {
			return book.year < oldest.year ? book : oldest;
		});
	}
}
