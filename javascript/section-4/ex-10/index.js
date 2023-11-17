// Logger mixin
const Logger = {
    log(message) {
      console.log(`[LOG]: ${message}`);
    }
  };

  class Book {
    constructor(title, author, publicationDate) {
      this.title = title;
      this.author = author;
      this.publicationDate = publicationDate; 
      
      this.log(`New book created - Title: ${this.title}, Author: ${this.author}, Publication Date: ${this.publicationDate}`);
    }

    log(message) {
      Logger.log(message);
    }
  }

  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];  
      this.log(`Library "${this.name}" created.`);
    }
  
    addBook(book, borrower) {
      this.books.push(book);
      this.log(`Book "${book.title}" added to the library. Borrower: ${borrower}`);
    }
  
    borrowBook(book, borrower) {
      const index = this.books.indexOf(book);
      if (index !== -1) {
        this.books.splice(index, 1);
        this.log(`Book "${book.title}" borrowed by ${borrower}`);
      } else {
        this.log(`Book "${book.title}" not found in the library.`);
      }
    }
  
    log(message) {
      Logger.log(message);
    }
  }

  const book1=new Book("The rise of Infosys",["Sudha Murthy","Narayana Murthy"],252,["Bussiness"]);
  const book2 = new Book("Grandma bag of stories", ["Narayana Murthy"], 200, ["Fiction"]);
    
  const library = new Library("City Library");
  
  library.addBook(book1, "Rama");
  library.addBook(book2, "Sita");
  
  library.borrowBook(book1, "Laxman");
