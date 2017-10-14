var education = s('.education');
var jobs = s('.jobs');
var life = s('.life');

var modes = [education, jobs, life];
var currentMode;

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
  addListHead(mode);
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
