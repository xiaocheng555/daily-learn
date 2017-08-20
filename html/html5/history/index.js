var image = document.getElementById('image')
var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

image.crossOrigin = "Anonymous";

var isDrawing = false
var state = context.getImageData(0, 0, canvas.width, canvas.height)

history.pushState(state, null)

canvas.addEventListener('pointerdown', function (e) {
  // e.preventManipulation()
}, false)
canvas.addEventListener('mousedown', startDrawing, false)
canvas.addEventListener('mousemove', draw, false)
canvas.addEventListener('mouseup', stopDrawing, false)
canvas.addEventListener('popstate', loadState, false)

function startDrawing () {
  isDrawing = true
}

function draw (event) {
  if(isDrawing) {
    console.log('draw')
    var sx = canvas.width / canvas.offsetWidth
    var sy = canvas.height / canvas.offsetHeight
    var x = sx * event.clientX - image.naturalWidth / 2
    var y = sy * event.clientY - image.naturalHeight / 2
    context.drawImage(image, x, y)
  }
}

function stopDrawing () {
  isDrawing = false
  var state = context.getImageData(0, 0, canvas.width, canvas.height)
  //history.pushState(state, null)
}

function loadState (e) {
  alert(e)
  console.log(1)
  // context.clearRect(0, 0, canvas.width, canvas.height)

  // if(e.state) {
  //   context.putImageDate(e.state, 0, 0)
  // }
}