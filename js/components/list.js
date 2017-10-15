var polylineDown = '<polyline points="6 9 12 15 18 9"></polyline>';
var chevron = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather">';
var chevronDown =  chevron + polylineDown + '</svg>';

var polylineUp = '<polyline points="18 15 12 9 6 15"></polyline>';
var chevronUp = chevron + polylineUp + '</svg>;'

var list = function (list) {
  var e = list;
  var template = '';
  for (var i = 0; i < e.length; i++) {
    template +=
      '<div class="list-item">'
        + chevronDown + '<h3>' + e[i].name + e[i].placeLink
        + e[i].place + '</a>' + e[i].time + '</h3>'
      + '</div>' 
      + '<div class="description">' + '<p>' + e[i].description + '</p>'
      + '</div>';
  }
  return template;
}

function addToList (list, name, place, placeLink, time, description) {
  var time = time || '';
  if (time.length > 0) {
    time = ', ' + time;
  }
  if (placeLink.length > 0) {
    placeLink = '<a href="' + placeLink + '">';
  }
  if (place.length > 0) {
    placeLink = ' @ ' + placeLink;
  }
  list.push(
    {
      name,
      place,
      placeLink,
      time,
      description
    }
  )
};

var makeList = function (listName, names) {
  for (var i = 0; i < names.length; i++) {
    var vars = ['', '', '', '', '']
    for (var j = 0; j < names[i].length; j++) {
      vars[j] = names[i][j]
    }
    addToList(listName, vars[0], vars[1], vars[2], vars[3], vars[4]);
  }
}
