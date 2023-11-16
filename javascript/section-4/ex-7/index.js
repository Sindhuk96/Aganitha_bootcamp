  class Catalog{

        constructor(){            
            this.catalog=new Map();
          }

        addBookToCatalog(book){

            for(const topic of book.topics){
                if(!this.catalog.has(topic)){
                    this.catalog.set(topic,[]);
                }
                this.catalog.get(topic).push(book);
            }
        }
        
        getBooksByTopic(topic) {
            return this.catalog.get(topic)||[];
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
    constructor(title, authors, pages = 0, topics = []) {
      if (!title || !authors || authors.length === 0) {
        throw new Error("Title and at least one author are mandatory. Please enter respective values.");
      }
  
      this.title = title;
      this.authors = authors;
      this.pages = pages;
      this.topics = topics;
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
  }
  
  const author1 = new Author("Sudha Murthy", 1964, "Indian");
  const author2 = new Author("Narayana Murthy", 1961, "Indian");
  
  const book1=new Book("The rise of Infosys",[author1,author2],252,["Bussiness"]);
  const book2 = new Book("Grandma bag of stories", [author1], 200, ["Fiction"]);
  
  const library = new Library();
  library.addBook(book1);
  library.addBook(book2);
  
  console.log(library.books);
  console.log(library.catalog.getBooksByTopic("Bussiness"));
  console.log(library.catalog.getBooksByTopic("Fiction"));