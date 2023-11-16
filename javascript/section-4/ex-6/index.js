class Author{
    constructor(name,birthYear,nationality){
        this.name=name;
        this.birthYear=birthYear;
        this.nationality=nationality;
    }
}

class Book {
    constructor(title, author, pages = 0) {
      if (!title || !author || author.length==0) {
        throw new Error("Title and author are mandatory.Book should have atleast one author.");
      }
  
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  }

const author1 = new Author("Sudha Murthy", 1964, "Indian");
const author2 = new Author("Narayana Murthy", 1961, "Indian");

const book1=new Book("The rise of Infosys",[author1,author2],252);

console.log(book1);