var places = [ 
  { lat: 54.898991, lng: 23.912825 }, 
  { lat: 45.658667, lng: 13.7934477 }, 
  { lat: 39.8746, lng: 32.7476 }, 
  { lat: 39.32934, lng: 16.2420148 },
  { lat: 21.2795532, lng: -157.8301075 } 
];
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