// 显示当前地图位置
showGeoPosition('container')

/**
 * [showGeoPosition description]
 * @param  {[string]} el [将地图显示于el节点，el使用id标识]
 */
function showGeoPosition (el) {
  var map, geolocation;
  //创建地图，调用浏览器定位服务
  map = new AMap.Map(el, {
    resizeEnable: true
  });

  // 创建地图定位、工具条、比例尺，并添加到地图中
  map.plugin(['AMap.Geolocation', 'AMap.ToolBar','AMap.Scale'], function() {
    geolocation = new AMap.Geolocation({
      timeout: 10000,          //超过10秒后停止定位，默认：无穷大
      zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见
      buttonPosition:'RB'  // 定位按钮位置
    })
    map.addControl(geolocation)
    geolocation.getCurrentPosition()
    map.addControl(new AMap.ToolBar())
    map.addControl(new AMap.Scale())
  });

  // 定位事件，成功、失败
  AMap.event.addListener(geolocation, 'complete', function () {
    console.log('获取位置成功！')
  })
  AMap.event.addListener(geolocation, 'error', function () {
    console.log('获取位置失败！')
  })
}

  

