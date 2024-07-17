function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let indexs = -1;

  for (let i = 0; i < books.length; i++) {
    if (books[i].title === searchTitle) {
      indexs = i;
    }
  }

  // books.map((book, index) => {
  //   if (book.title === searchTitle) {
  //     indexs = index;
  //   }
  // });
  return indexs;
}

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];
const searchBook = "Gone with the Wind";
// const searchBook = "The Master Mind";

console.log(findBookIndex(books, searchBook));
