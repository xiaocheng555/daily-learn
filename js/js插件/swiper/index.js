'use strict'

var $img = document.getElementsByTagName('img')[0]
var $container = document.getElementsByClassName('container')[0]
var r = getStyle($img, 'height')

var t1 = $img.clientTop
var l1 = $img.clientLeft
console.log(t1, l1)

var t2 = $container.clientTop
var l2 = $container.clientLeft
console.log(t2, l2)

var t3 = $container.offsetTop
var l3 = $container.offsetLeft
console.log(t3, l3)

var t4 = $img.offsetTop
var l4 = $img.offsetLeft
console.log(t4, l4)

console.log(window.innerWidth, window.innerHeight)
console.log(document.documentElement.clientWidth, document.documentElement.clientHeight)

window.onscroll = () => {
  const minHeight = 0
  let currentTop = window.innerHeight + document.body.scrollTop
  let imgTop = getTop($img)
  if (imgTop < currentTop + minHeight) {
    console.log('过了')
  } else {
    console.log('没过')
  }
}

function getTop (el) {
  let h = 0
  while(el) {
    h += el.offsetTop
    el = el.offsetParent
  }
  return h
}

function getStyle (el, property) {
  const style = el.currentStyle || window.getComputedStyle(el, null)
  let temp = []
  if (el instanceof Array) {
    el.forEach(item => {
      if (el.nodeType === 1)
      temp.push(style.property)
    })
  } else {
    if (el instanceof Object && el.nodeType === 1) {
      temp = style[property]
    }
  }
  return temp
}
