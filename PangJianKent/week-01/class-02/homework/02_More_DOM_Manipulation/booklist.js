const books = [
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    alreadyRead: false,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    alreadyRead: true,
  },
  {
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    alreadyRead: true,
  },
  {
    title: "A Life on our Planet",
    author: "David Attenborough",
    alreadyRead: true,
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    alreadyRead: false,
  },
];

//Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
//If you have read it, make the text color green. If you haven't, make the text color red.
for (let x = 0; x <= books.length - 1; x++) {
  let bookInfo = document.createElement("p");
  bookInfo.innerHTML =
    x + 1 + ": Title:" + books[x].title + ", By Author:" + books[x].author;

  if (books[x].alreadyRead) {
    bookInfo.style.color = "Green";
  } else {
    bookInfo.style.color = "Red";
  }

  document.body.appendChild(bookInfo);
  //console.log(books[x].alreadyRead);
}
