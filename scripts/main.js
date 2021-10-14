let userLibrary = [{title: 'dan', author: 'daniel szpunar', pages: 233, haveRead: true}]


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
//let theHobbit = new Book("dan", 'daniel szpunar', 233, true)
//console.log(theHobbit.info())




//Display Library func

function displayBooks() {
  console.log('displayBooks is executing')
  let container = document.getElementById('container')
  for(i = 0; i < userLibrary.length; i++) {
    let bookDiv = document.createElement('div')
    bookDiv.style.border = '1px solid black'
    
    let titlePara = document.createElement('p')
    titlePara.innerHTML = userLibrary[i].title;
    bookDiv.appendChild(titlePara)
    
    let authorPara = document.createElement('p')
    authorPara.innerHTML = userLibrary[i].author;
    bookDiv.appendChild(authorPara)
    container.append(bookDiv)
    
  }

}