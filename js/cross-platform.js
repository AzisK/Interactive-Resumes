var goDesign = document.querySelectorAll('.go-design');

for (var i = 0; i < goDesign.length; i++) {
  goDesign[i].onclick = function () {
     scrollIn(designPage);
     if (!animatedText) {
      animatedText = true;
      animateText('#cross-platform', 'Cross-platform', 0, 110);
     }
  };
}

var mobile = document.querySelector('.mobile');
var tablet = document.querySelector('.tablet');
var desktop = document.querySelector('.desktop');

var views = [mobile, tablet, desktop];
var deviceMode = 'desktop';

var body = document.body;
var iphoneButton = document.querySelector('.iphone-button');
var mobileBlocks = document.querySelectorAll('.xs-block');
var footerLink = document.querySelector('.footer a');
var touchElements = [html, footerLink];
mobileBlocks.forEach(function (el) {
  touchElements.push(el);
});

var mobileView = function (on) {
  var mobile;
  mobileBlocks.forEach(function (el) {
    if (on == 1) {
      mobile = true
      el.classList.add('block-mobile');
      el.querySelector('svg').classList.add('block-svg');
    } else {
      mobile = false;
      if (el.classList.contains('block-mobile')) {
        el.classList.remove('block-mobile');
        el.querySelector('svg').classList.remove('block-svg');
      }
    }
  });
  var heading = document.querySelector('.heading h1');
  if (mobile) {
    heading.classList.add('mobile-heading');
  } else {
    if (heading.classList.contains('mobile-heading')) {
      heading.classList.remove('mobile-heading');
    }
  }
}

var touchView = function (on) {
  if (on == 1) {
    if (!html.classList.contains('touch-cursor')) {
      touchElements.forEach(function (el) {
        el.classList.add('touch-cursor');
      });
    }
  } else {
    touchElements.forEach(function (el) {
      el.classList.remove('touch-cursor');
    });
  }
}

var responsiveView = function (currentMode, deviceMode) {
  if (currentMode != deviceMode) {
    body.classList.remove(currentMode);
    body.classList.add(deviceMode);

    if (deviceMode == 'mobile-view') {
      iphoneButton.classList.remove('hidden');
      mobileView(1);
      touchView(1);
    }
    if (deviceMode == 'tablet-view') {
      iphoneButton.classList.remove('hidden');
      mobileView(0);
      touchView(1);
    }
    if (deviceMode == 'desktop-view') {
      iphoneButton.classList.add('hidden');
      mobileView(0);
      touchView(0);
    }
  }
}

function deviceView (device) {
  var deviceMode = device.classList[0] + '-view';
  var currentMode = body.classList[0];
  responsiveView(currentMode, deviceMode);  
  scrollIn(mainPage);
};

(function addViews () {
  for (var i = 0; i < views.length; i++) {
    views[i].onclick = function () {
      deviceView(this);
    };
  }
}());

iphoneButton.onclick = function () {
  scrollIn(mainPage);
}
