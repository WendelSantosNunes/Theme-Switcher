let div = document.querySelector('.write-div')
let clas = div.classList

function addBackground() {
  let result = clas.toggle('.active')
  let body = document.querySelector('body')
  let h1 = document.querySelector('h1')
  console.log(result)

  if (result == true) {
    body.classList.add('background')
    div.classList.add('active')
    h1.classList.add('active')
  } else {
    body.classList.remove('background')
    div.classList.remove('active')
    h1.classList.remove('active')
  }
}

div.addEventListener('click', addBackground)
