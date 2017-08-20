// 显示当前地图位置
getGeoLocation('container')

/**
 * [getGeoLocation 判断谷歌地图是否可用，可用则显示地图，不可用则显示错误信息]
 * @param  {[string]} el [将地图显示于el节点，el使用id标识]
 */
function getGeoLocation(el)
{
  if (navigator.geolocation)
  {
    // getCurrentPosition方法返回两个回调函数，一个是位置获取成功时的回调，并返回一个position对象参数，获取位置失败则调用第二个回调并返回一个error对象参数
    // 
    navigator.geolocation.getCurrentPosition(function (position) {
      showGeoPosition(position, el)
    }, function (error) {
      showGeoError(error)
    }, {
      timeout: 5000   // 请求位置超时时间
    })
  } else {
    console.log("该浏览器不支持获取地理位置。")
  }
}

/**
 * [showGeoPosition 显示地图]
 * @param  {[type]} position [对象的position属性]
 * @param  {[string]} el       [将地图显示于el节点，el使用id标识]
 * @return {[type]}          [description]
 */
function showGeoPosition(position, el){
  var lat = position.coords.latitude    // 纬度
  var lon = position.coords.longitude    // 经度
  var latlon = new google.maps.LatLng(lat, lon)  // 经纬度
  var mapholder = document.getElementById(el)  // 地图

  // 地图配置 
  var myOptions = {
    center: latlon,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    navigationControlOptions: {
      style:google.maps.NavigationControlStyle.SMALL
    }
  }

  // 创建地图
  var map = new google.maps.Map(mapholder, myOptions);
  // 创建当前位置标记
  var marker = new google.maps.Marker({
    position: latlon,
    map: map,
    title: "您当前的位置"
  })
}

function showGeoError(error)
{
  switch(error.code) 
  {
    case error.PERMISSION_DENIED:
      console.log("用户拒绝对获取地理位置的请求。")
      break
    case error.POSITION_UNAVAILABLE:
      console.log("位置信息是不可用的。")
      break
    case error.TIMEOUT:
      console.log("请求用户地理位置超时。")
      break
    case error.UNKNOWN_ERROR:
      console.log("未知错误。")
      break
  }
}