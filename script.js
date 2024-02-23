const myLibrary = [];

//constructeur
function Book(identifiant,title, author, pages, isRead) {
  this.identifiant = identifiant;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return (
      "The " + this.title + " by " + this.author + this.pages + this.isRead
    );
  };
}

// prendre les entrées de l'utilisateur et stocker les nouveaux livres dans un tableau
const addBtn = document.querySelector("#addBtn");
const form = document.querySelector("#form");
const div = document.querySelector(".div");
const identifiant = document.querySelector("#identifiant");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const submit = document.querySelector("#submit");
const deleteBtn = document.querySelector("#delete");


form.addEventListener("submit", (event) => event.preventDefault());

function addBookToLibrary() {
  const newBook = {
    identifiant : identifiant.value,
    title: title.value,
    author: author.value,
    pages: pages.value,
    isRead: isRead.value,
  };
  myLibrary.push(newBook);
  console.log(myLibrary);


  printBook();
}

function printBook() {
  // div.innerHTML = `<ul>`;
  for (let index = 0; index < myLibrary.length; index++) {
    let container = document.createElement("div");
    container.classList.add('container')

    let actualBook = myLibrary[index];

    container.innerHTML = 
    `<p> <em> Identifiant:  </em> ${actualBook.identifiant}</p>
    <p> <em> Title: </em>  ${actualBook.title}</p>
    <p>  <em> Author:</em> ${actualBook.author}</p>
    <p>  <em>Pages: </em> ${actualBook.pages}</p>
    <p>  <em> Read state: </em> ${actualBook.isRead}</p>`
    div.appendChild(container);
  }
  // div.innerHTML += `</ul>`;
}

submit.addEventListener("click", addBookToLibrary);

addBtn.addEventListener("click", function () {
  form.style.display = "block";
});

deleteBtn.addEventListener("click", function () {

  myLibrary.splice(1,identifiant)
  div.innerHTML= '',
   printBook();
});

// div.textContent= `${newBook.title} is the title ${newBook.author} is the author name,  ${newBook.pages} is the author name and ${newBook.isRead} is the read state`
