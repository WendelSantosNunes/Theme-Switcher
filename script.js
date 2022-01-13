let div = document.querySelector('.write-div')
let clas = div.classList

div.addEventListener('click', function () {
  let result = clas.toggle('write-div')
  let body = document.querySelector('body')

  console.log(result)
  if (result == false) {
    body.classList.add('background')
  }
})
