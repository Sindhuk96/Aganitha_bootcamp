class Book{
    constructor(title,author,pages=0){
        if(!title || !author){
            throw new Error("Title and author is mandatory, Please enter respective values");
        }

        this.title=title;
        this.author=author;
        this.pages=pages;
    }
}

const Book1=new Book("Ikigai","Mirales",198);
const Book2=new Book("Moonwalk with Einstein","Joshua Foer");

console.log("Book 1:");
console.log(`Title: ${Book1.title}`);
console.log(`Author: ${Book1.author}`);
console.log(`Pages: ${Book1.pages}`);

console.log("\nBook 2:");
console.log(`Title: ${Book2.title}`);
console.log(`Author: ${Book2.author}`);
console.log(`Pages: ${Book2.pages}`);
