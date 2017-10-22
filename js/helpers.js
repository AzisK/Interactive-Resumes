var S = document.querySelectorAll.bind(document);
var s = document.querySelector.bind(document);

var headings = s('.heading');
var designPage = s('.design-page');
var view = s('.view');
var mapCanvas = s('.map');
var skillsText = s('.skills-text');

var fit = s('.fit');

var scrollIn = function (div) {
  div.scrollIntoView({ behavior: "smooth"});
};
