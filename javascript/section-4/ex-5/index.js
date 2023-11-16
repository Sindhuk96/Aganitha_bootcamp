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
  
  class SpecializedBook extends Book {
    constructor(title, author, pages, topic="General") {
      super(title, author, pages);
      this.topic = topic;
    }
  }  
 
  const spBook = new SpecializedBook("The Psychology of Money", "Morhan Housel");  
  console.log(spBook); 

  