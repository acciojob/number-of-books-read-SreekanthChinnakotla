const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = (library) => {
  let count = 0;

  for (const book of library) {
    if (book.readingStatus === true) {
      count++;
    }
  }

  return count;
};

// Call the function and alert the number of books read
alert(numberOfBooksRead(library));
