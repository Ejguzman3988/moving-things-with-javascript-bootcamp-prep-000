const app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
 
  if (right > ) {
    dodger.style.left = `${right + 1}px`
  }
}