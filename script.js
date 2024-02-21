const myLibrary = [];

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
const addBook = document.querySelector('#addBook');
function addBookToLibrary() {
    let book = prompt('what book do you want to add ?');
    if (book  != "") {
        myLibrary.push(book);
        book = "";
        console.log(myLibrary)
    }
}

addBook.addEventListener('click', addBookToLibrary())

function printBook () {
    myLibrary.forEach(element => {
        
    });

}



