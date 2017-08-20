function saveStorage (id) {
  var value = document.getElementById(id).value
  var time = new Date().getTime()

  sessionStorage.setItem(time, value)
  alert('数据已保存。')

  loadStorage('msg')
}

function loadStorage (id) {
  var $content = document.getElementById(id)
  var result = '<table border="1">'

  for (var i = 0, len = sessionStorage.length; i < len; i++) {
    var key = sessionStorage.key(i)
    var value = sessionStorage.getItem(key)
    var date = new Date()

    date.setTime(key)
    var datestr = date.toGMTString()
    result += '<tr><td>' + value + '</td><td>' + datestr + '</td></tr>'
  }
  result += '</table>'
  $content.innerHTML = result
}

function clearStorage () {
  sessionStorage.clear()
  alert('数据全部清除。')

  loadStorage('msg')
}


