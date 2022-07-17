// Get buttons
const next = document.getElementById('button-next')
const previous = document.getElementById('button-previous')

// Get images
const imgArr = document.getElementsByClassName("img")
function change() {
    if (imgArr[0].classList.contains('active')) {
      imgArr[0].classList.remove('active')
      imgArr[1].classList.add('active')
  } 
   else if (imgArr[1].classList.contains('active')) {
       imgArr[1].classList.remove('active')
       imgArr[2].classList.add('active')
   }
   else {
       imgArr[2].classList.remove('active')
       imgArr[0].classList.add('active')
   }
}
// Add function on click to change the class of the images so we can see a different picture with each click
next.addEventListener('click', () => {
  change()
})
previous.addEventListener('click', () => {
  change()
})

