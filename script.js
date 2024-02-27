const myLibrary = [];

// constructeur
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return "The " + this.title + " by " + this.author + this.pages + this.isRead;
  };
}

// prendre les entrées de l'utilisateur et stocker les nouveaux livres dans un tableau
const addBtn = document.querySelector("#addBtn");
const form = document.querySelector("#form");
const div = document.querySelector(".div");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const isReadInput = document.querySelector("#isRead");
const submit = document.querySelector("#submit");
const deleteBtn = document.querySelector("#delete");

form.addEventListener("submit", (event) => event.preventDefault());

function addBookToLibrary() {
  const newBook = new Book(
    // identifiant.value,
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    isReadInput.value
  );
  myLibrary.push(newBook);
  console.log(myLibrary);

  printBook();
}

function printBook() {
  div.innerHTML = ""; 
  for (let index = 0; index < myLibrary.length; index++) {
    let container = document.createElement("div");
    container.classList.add("container");
    let actualBook = myLibrary[index];

    container.innerHTML = `
      <p> <em> Title: </em>  ${actualBook.title}</p>
      <p>  <em> Author:</em> ${actualBook.author}</p>
      <p>  <em> Pages: </em> ${actualBook.pages}</p>
      <p>  <em> Read state: </em> ${actualBook.isRead}</p>
      <button class="deleteBtn" data-index="${index}">Supprimer</button>`;

    div.appendChild(container);
  }
}

submit.addEventListener("click", addBookToLibrary);

addBtn.addEventListener("click", function () {
  form.style.display = "block";
});

div.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    const index = event.target.dataset.index; 
    myLibrary.splice(index, 1); 
    printBook(); r
  }
});