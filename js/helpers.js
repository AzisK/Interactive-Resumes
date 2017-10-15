var mainPage = s('.heading');
var designPage = s('.design-page');
var view = s('.view');
var mapCanvas = s('.map');

var fit = s('.fit');

var scrollIn = function (div) {
  div.scrollIntoView({ behavior: "smooth"});
};

function animateText (target, message, index, interval) { 
  var targetSelector = s(target);
  if (index < message.length) {
    targetSelector.append(message[index++]);
    var timeout = setTimeout(function () { animateText(target, message, index, interval); }, interval);
  } 
};
