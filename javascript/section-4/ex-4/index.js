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
    constructor(title, author, pages, topic) {
      super(title, author, pages);
      this.topic = topic;
    }
  }  
 
  const spBook = new SpecializedBook("The Psychology of Money", "Morhan Housel", 23 ,"Finances");  
  console.log(spBook); 

  