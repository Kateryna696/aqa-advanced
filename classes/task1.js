import { Book } from './book.js';
import { EBook } from './eBook.js';

const book1 = new Book("", "", 0);
book1.printInfo();

const book2 = new Book("Fairytale", "Boris", 2022);
book2.printInfo();

const eBook= new EBook("Lord of the Ring", "J.Tolkien", 1980, "");
eBook.printInfo();

const books = [book2, eBook];

const oldestBook = Book.getOldestBook(books);
console.log("The oldest book is:");
oldestBook.printInfo();

const eBook2 = EBook.createEBook(book2, "PDF");
eBook2.printInfo();