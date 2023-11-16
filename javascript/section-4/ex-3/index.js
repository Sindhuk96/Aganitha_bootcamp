class Library {
    constructor() {
      this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
  }
  
  class Book {
    constructor(title, author, pages = 0) {
      if (!title || !author) {
        throw new Error("Title and author are mandatory. Please enter respective values.");
      }
  
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  }
  
  const lib = new Library();
  
  const book1 = new Book("Ikigai", "Mirales", 198);
  const book2 = new Book("Moonwalk with Einstein", "Joshua Foer");
  
  lib.addBook(book1);
  lib.addBook(book2);
  
  console.log(lib.books);