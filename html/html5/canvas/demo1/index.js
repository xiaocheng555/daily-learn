// function draw (id) {
//   var canvas = document.getElementById(id)

//   if (canvas == null) {
//     return false
//   }
//   var context = canvas.getContext('2d')
//   context.fillStyle = 'red'
//   context.fillRect(0, 0, 300, 250)
//   context.fillStyle = 'green'
//   context.strokeStyle = 'blue'
//   context.lineWidth = 1
//   context.fillRect(50, 50, 100, 100)
//   context.strokeRect(50, 50, 100, 100)
// }


// function draw (id) {
//   var canvas = document.getElementById(id)

//   if (canvas == null) {
//     return false
//   }
//   var context = canvas.getContext('2d')
//   context.fillStyle = 'red'
//   context.beginPath()
//   context.arc(100, 80, 50, 0, Math.PI * 2)
//   context.closePath()
//   context.fillStyle = 'blue'
//   context.stroke()
//   context.fill()
// }


function draw (id) {
  var canvas = document.getElementById(id)

  if (canvas == null) {
    return false
  }
  var context = canvas.getContext('2d')
  context.lineWidth = 10
  context.lineCap = 'square'
  context.lineJoin = 'bevel'
  context.moveTo(20, 20)
  context.lineTo(20, 200)
  context.lineTo(100, 100)
  //context.lineTo(50, 50)
  context.stroke()
  //context.fill()
}

