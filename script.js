const myLibrary = [];

//constructeur

function Book(title, author, pages, isRead) {
  this.title= title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return "The " + this.title + " by " + this.author + this.pages + this.isRead;
  }     
}

// prendre les entrées de l'utilisateur et stocker les nouveaux livres dans un tableau
const addBtn = document.querySelector('#addBook');
const form = document.querySelector('#form')
const div = document.querySelector('.div')
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#isRead');
const submit = document.querySelector('#submit');

form.addEventListener('submit',   (event) => event.preventDefault()

)


function addBookToLibrary() {
  const newBook = {
      title: title.value,
      author: author.value,
      pages: pages.value,
      isRead: isRead.value
    }
    myLibrary.push(newBook)
    console.log(myLibrary)

    function printBook () {
      div.innerHTML = `<ul>`
  for (let index = 0; index < myLibrary.length; index++) {

    let element = document.createElement('li')

    //  newBook = myLibrary[index];

    element.textContent = `${newBook.title} is the title ${newBook.author} is the author name,  ${newBook.pages} is the author name and ${newBook.isRead} is the read state`
    div.appendChild(element)
  }
     div.innerHTML += `</ul>` 
}
printBook();      
  }

  

 
submit.addEventListener('click', addBookToLibrary)

    // div.textContent= `${newBook.title} is the title ${newBook.author} is the author name,  ${newBook.pages} is the author name and ${newBook.isRead} is the read state`


