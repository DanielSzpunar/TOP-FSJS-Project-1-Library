let userLibrary = []

const formDiv = document.getElementById('formDiv')
formDiv.style.visibility = 'hidden';

function displayForm() {
  formDiv.style.visibility = 'visible'
  showFormBtn.style.visibility = 'hidden'
}
function displayList() {
  console.log("display List")
  if (userLibrary.length === 0) {
    alert('No books to display.')
  } 
  displayBooks()
}

function Book(title, author, pages, haveRead) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.haveRead = haveRead,
  this.info = function() {
    return `${title} by ${author}, ${pages} pages. Completed: ${haveRead}`
  }
}

function getTitle() {
  let title = document.getElementById("title").value
  if (title.length == 0) {
    document.getElementById('title').placeholder = 'Title Required.'
  } else return title
}
function getAuthor() {
  let author = document.getElementById('author').value
  return author
}
function getPages() {
  let pages = document.getElementById('pages').value
  return pages
}
function getHaveRead() {
  // let isCompleted = document.querySelector('input[name="completed"]:checked').value;
  // return isCompleted
  let haveCompleted
  if (document.getElementById('completedYes').checked) {
    haveCompleted = true
  } else haveCompleted = false;
  return haveCompleted
}

function clearFields() {
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('pages').value = ''
  if (document.getElementById('completedYes').checked) {
    document.getElementById('completedNo').checked = true
  }
}
function addBookToLibrary() {
  let title = document.getElementById("title").value
  while(title.length == 0 ) {
    document.getElementById('title').placeholder = 'Title Required.'
    return
  }
  userLibrary.push({title: title, author: getAuthor(), pages: getPages(), haveRead: getHaveRead() })
  console.log(userLibrary)
  clearFields()
  displayBooks()
}

//Display Library func

function displayBooks() {
  let container = document.getElementById('container')
  container.innerHTML = ''
  for(i = 0; i < userLibrary.length; i++) {
    let bookDiv = document.createElement('div')
    bookDiv.style.border = '1px solid black'
    bookDiv.id = i
    
    let titlePara = document.createElement('p')
    titlePara.innerHTML = `Title: ${userLibrary[i].title}`
    bookDiv.appendChild(titlePara)

    let authorPara = document.createElement('p')
    authorPara.innerHTML = `Author: ${userLibrary[i].author}`
    bookDiv.appendChild(authorPara)
    
    let pagePara = document.createElement('p')
    pagePara.innerHTML = `Pages: ${userLibrary[i].pages}`
    bookDiv.appendChild(pagePara)

    let completedPara = document.createElement('p')
    completedPara.innerHTML = `Completed: ${userLibrary[i].haveRead}`
    bookDiv.appendChild(completedPara)
    
    let toggleCompleteBtn = document.createElement('button')
    toggleCompleteBtn.innerHTML = 'toggle completion'
    toggleCompleteBtn.onclick = toggleComplete
    toggleCompleteBtn.setAttribute('class', i)
    bookDiv.appendChild(toggleCompleteBtn)

    let delBtn = document.createElement('button')
    delBtn.innerHTML = 'delete'
    delBtn.setAttribute('id', i)
    delBtn.onclick = deleteBook
    bookDiv.appendChild(delBtn)

    container.appendChild(bookDiv)
  }
}
function deleteBook() {
  console.log(this.id)
  userLibrary.splice(this.id,1)
  displayBooks()
}
function toggleComplete() {
  if (userLibrary[this.className].haveRead) {
    userLibrary[this.className].haveRead = false;
  } else userLibrary[this.className].haveRead = true
  displayBooks()
}


//LocalStorage:

const saveLocal = () => {
  localStorage.setItem('library', JSON.stringify(userLibrary))
}
const restoreLocal = () => {
  const books = JSON.parse(localStorage.getItem('library') || "[]")
  
}
