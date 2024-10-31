import { Book } from './book.js';

export class EBook extends Book{
    constructor(title, author, year, fileFormat){
        super(title,author,year);
        this.fileFormat=fileFormat;
    }
    get fileFormat(){
        return this._fileFormat;
    }
    set fileFormat(value){
        if(typeof value==='string' && value!== ''){
            this._fileFormat = value;
        }else{
            console.error("The format should not be empty");
        }

    }
    printInfo(){
        console.log(`The title of the book: ${this._title}, Author: ${this._author}, Year: ${this._year}, Format: ${this._fileFormat}`)
    }
    
    static createEBook(bookInstance, fileFormat) {
        if (bookInstance instanceof Book) {
            return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
        } else {
            throw new Error("Provided instance is not of type Book");
        }
    }
    
}

