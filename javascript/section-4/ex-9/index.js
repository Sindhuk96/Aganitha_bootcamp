class Catalog {
    constructor() {
      this.catalog = new Map();
    }
  
    addBookToCatalog(book) {
      for (const topic of book.topics) {
        if (!this.catalog.has(topic)) {
          this.catalog.set(topic, []);
        }
        this.catalog.get(topic).push(book);
      }
    }
  
    getBooksByTopic(topic) {
      return this.catalog.get(topic) || [];
    }
  }
  
  class Author {
    constructor(name, birthYear, nationality) {
      this.name = name;
      this.birthYear = birthYear;
      this.nationality = nationality;
    }
  }
  
  class Book {
    constructor(title, authors, pages = 0, topics = [], status = "available") {
      if (!title || !authors || authors.length === 0) {
        throw new Error("Title and at least one author are mandatory. Please enter respective values.");
      }
  
      this.title = title;
      this.authors = authors;
      this.pages = pages;
      this.topics = topics;
      this.status = status;
    }
  }
  
  class Library {
    constructor() {
      this.catalog = new Catalog();
      this.books = [];
    }
  
    addBook(book) {
      this.catalog.addBookToCatalog(book);
      this.books.push(book);
    }
  
    borrowBook(title) {
      const bookIndex = this.books.findIndex(book => book.title === title && book.status === "available");
  
      if (bookIndex !== -1) {
        const borrowedBook = this.books[bookIndex];
        borrowedBook.status = "borrowed";
        return borrowedBook;
      } else {
        console.log(`Book "${title}" is not available for borrowing.`);
        return null;
      }
    }
  }
  
 
  const author1 = new Author("Andrew Hunt", 1964, "American");
  const author2 = new Author("David Thomas", 1961, "Canadian");
  
  const book1 = new Book("The Pragmatic Programmer", [author1, author2], 352, ["Software Development"]);
  const book2 = new Book("Another Book", [author1], 200, ["Fiction"]);
  
  const library = new Library();
  library.addBook(book1);
  library.addBook(book2);
  
  const borrowedBook = library.borrowBook("The Pragmatic Programmer");
  console.log(borrowedBook);
  console.log(book1);
  