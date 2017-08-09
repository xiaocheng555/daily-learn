"use strict"

const $scrollContainer = document.getElementsByClassName('scroll-container')[0],
      $scrollCont = document.getElementsByClassName('scroll-content')[0]
let stopScroll = true,
    disableTrigger = false,
    isInit = false,
    scrollSpeed = 20

const $backTop = document.createElement('div')
const $backTopLink = document.createElement('a')
$backTop.className = 'backtop'
$backTopLink.innerHTML = '重新滚动'
$backTop.appendChild($backTopLink)
$scrollCont.appendChild($backTop)

$backTop.onclick = function () {
  isInit = true
}

$scrollContainer.onmouseover = function () {
  if (disableTrigger) {
    return
  }
  stopScroll = false
}
$scrollContainer.onmouseout = function () {
  stopScroll = true
}

// 初始化滚动定时器
init($scrollContainer)

function init (el) {
  setInterval(function () {
    scrollUp(el)
  }, scrollSpeed)
}

function scrollUp (el) {
  let currTop = el.scrollTop

  if (stopScroll) {
    return
  }
  el.scrollTop++

  if (currTop == el.scrollTop && isInit) {
    // 滚动到尽到时，重新初始化
    isInit = false
    el.scrollTop = 0

    // 重新开始时，先暂停1s
    disableTrigger = true  // 禁止onmouseover触发
    stopScroll = true
    setTimeout(function () {
      disableTrigger = false
      stopScroll = false
    }, 500)
  }
}