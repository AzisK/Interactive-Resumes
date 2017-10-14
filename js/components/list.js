var list = function (list) {
  var e = list;
  var template = '';
  for (var i = 0; i < e.length; i++) {
    template +=
      '<div class="active-mobile">'
        + '<h3>' + ': ' + e[i].name + ' @ ' + e[i].placeLink
        + e[i].place + '</a>' + e[i].time + '</h3>'
      + '</div>';
  }
  return template;
}

function addToList (list, name, place, placeLink, time) {
  var time = time || '';
  if (time.length > 0) {
    time = ', ' + time;
  }

  if (placeLink.length > 0) {
    placeLink = '<a href="' + placeLink + '">';
  }
  list.push(
    {
      name,
      place,
      placeLink,
      time
    }
  )
};

var makeList = function (listName, names) {
  for (var i = 0; i < names.length; i++) {
    var vars = ['', '', '', '']
    for (var j = 0; j < names[i].length; j++) {
      vars[j] = names[i][j]
    }
    addToList(listName, vars[0], vars[1], vars[2], vars[3]);
  }
}
