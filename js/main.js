var places = [ { lat: -25.363, lng: 131.044 }, { lat: 24, lng: 100 } ];
var center = { lat: 0, lng: 0 };
for (var i = 0; i < places.length; i++) {
  center.lat += places[i].lat/places.length;
  center.lng += places[i].lng/places.length;
}

var map;

function initMap() {
  map = new google.maps.Map(mapCanvas, {
    zoom: 4,
    scrollwheel: false,
    center: center
  });
  var marker;
  for (var i = 0; i < places.length; i++) {
    marker = new google.maps.Marker({
      position: places[i],
      map: map
    })
  }
}

function centerMap(){
    map.panTo(center);
}