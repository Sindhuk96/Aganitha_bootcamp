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

class fictionBook extends Book{
    constructor(title, authors, pages, topics, date){
        super(title,authors,pages,topics);
        this.date=date;
    }
}

class NonfictionBook extends Book{
    constructor(title, authors, pages, topics, reviews){
        super(title,authors,pages,topics);
        this.reviews=reviews;
    }    
}

const ficBook=new fictionBook("Aladdin stories",["Veer"],250,["Fiction"],"November 14");
const nonFicBook=new NonfictionBook("Hanuman stories",["Jay"],280,["NonFiction"],4.8);

console.log(ficBook);
console.log(nonFicBook);
