var education = s('.education');
var jobs = s('.jobs');
var life = s('.life');

var modes = [education, jobs, life];
var currentMode;

 function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i = 0; i < children.length; i++) {
         if (children[i] == node) return num;
         if (children[i].nodeType == 1) num++;
    }
    return -1;
}

function showDescription () {
  var listItems = S('.list-item');
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].onclick = function () {
      var descriptionNode = this.parentNode.childNodes[indexInParent(this) + 1];
      var svg = this.querySelector('line');
      if (!descriptionNode.style.display || descriptionNode.style.display == 'none') {
        descriptionNode.style.display = 'inherit';
        svg.style.display = 'none';
      } else {
        descriptionNode.style.display = 'none';
        svg.style.display = 'inherit';
      }
    }
  }
}

function svgSelect (mode) {
  if (mode.classList[0] != currentMode) {
    if (s('.active-svg')) {
      s('.active-svg').classList.remove('active-svg');
    }
    mode.querySelector('svg').classList.add('active-svg');
  }
}

function resumeMode (mode) {
  if (mode == 'education') {
    educationList();
  }
  if (mode == 'jobs') {
    jobList();
  }
  if (mode == 'life') {
    lifeList();
  }
  addListHead(mode);
  showDescription();
  currentMode = mode;
}

function addModes () {
  for (var i = 0; i < modes.length; i++) {
    modes[i].onclick = function () {
      svgSelect(this);
      resumeMode(this.classList[0]);
    }
  }
}

svgSelect(education);
resumeMode('education');

addModes();
