var $h1 = document.getElementsByTagName('h1')[0]
var url = location.href
var state = {}

// 刷新则重新返回index.html
if (url.indexOf('?') >= 0) {
  url = url.split('?')[0]
  history.replaceState(null, null, url)   
  $h1.innerHTML = '首页'
}

$('#content a').click(function () {
  var index = $(this).index()
  state.index = index
  state.query = 'index=' + index
  history.pushState(state, null, url + '?index=' + index)

  $h1.innerHTML = '页面' + (index + 1)
})

window.addEventListener("popstate", function(e) {
  $h1.innerHTML = '页面' + (e.state.index + 1)
  console.log(e.state.query)
});