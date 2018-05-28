define({
  env: {
    id: 'baidu-box',
    center: {lng: 107.894862, lat: 25.421289},
    mapStyle: [{
      "featureType": "background",
      "elementType": "all",
      "stylers": {
        "color": "#124266ff"
      }
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": {
        "color": "#0c5bacff"
      }
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": {
        "color": "#05274aff"
      }
    }, {
      "featureType": "green",
      "elementType": "all",
      "stylers": {
        "color": "#0a3653ff"
      }
    }, {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#ffffffff",
        "visibility": "on"
      }
    }, {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#000000ff",
        "visibility": "on"
      }
    }]
  },
  init: function() {
    var map = new Bmap.Map('baidu-box'); // 创建地图实例
  },
  go: function() {
    console.log('test');
  }
})
