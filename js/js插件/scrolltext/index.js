"use strict"

const $scrollContainer = document.querySelector('.scroll-container'),
      $scrollContent = document.querySelector('.scroll-content'),
      scrollContainerHeight = window.getComputedStyle($scrollContainer, null).height,
      scrollContentHeight = window.getComputedStyle($scrollContent, null).height;

let timer, 
    speed = 20;

/**
 * [onmouseover 一直向上滚动]
 */
$scrollContainer.onmouseover = function () {
  timer = setInterval(function () {
    scrollUp($scrollContent, scrollContainerHeight, scrollContentHeight);
  }, speed);
}

/**
 * [onmouseout 停止滚动]
 */
$scrollContainer.onmouseout = function () {
  clearInterval(timer);
}

/**
 * [scrollUp 向上移动，一次向上移动1px]
 * @param  {[object]} el            [移动的Element元素]
 * @param  {[type]} containerHeight [Element元素的高度]
 * @param  {[type]} contentHeight   [包裹Element的元素高度]
 */
function scrollUp (el, containerHeight, contentHeight) {
  let top = el.style.top;

  if (top === '-' + contentHeight) {
    el.style.top = containerHeight;
    return;
  }
  el.style.top = (top.replace('px', '')) - 1 + 'px';
}
