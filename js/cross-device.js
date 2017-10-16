var goDesign = S('.go-design');

var goToDesign = function () {
  scrollIn(designPage);
  if (!animatedText) {
    animatedText = true;
    animateText('#cross-device', 'Cross-device', 0, 100);
 }
}

for (var i = 0; i < goDesign.length; i++) {
  goDesign[i].onclick = function () {goToDesign();}
}

var sikt = S('.mobile');

var mobile = s('.mobile');
var tablet = s('.tablet');
var desktop = s('.desktop');

var views = [mobile, tablet, desktop];
var deviceMode = 'desktop';

var device = s('#device');

var iphoneButton = s('.iphone-button');
var iphoneSpeaker = s('.iphone-speaker');
var iphoneCamera = s('.iphone-camera');

var mobileBlocks = S('.xs-block');
var footerLink = s('.footer a');
var touchElements = [view, footerLink];
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
}

var touchView = function (on) {
  if (on == 1) {
    if (!view.classList.contains('touch-cursor')) {
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
    device.classList.remove(currentMode);
    device.classList.add(deviceMode);
    noFit();

    if (deviceMode == 'mobile-view') {
      iphoneButton.classList.remove('hidden');
      iphoneSpeaker.classList.remove('hidden');
      iphoneCamera.classList.remove('hidden');
      mobileView(1);
      touchView(1);
    }
    if (deviceMode == 'tablet-view') {
      iphoneButton.classList.remove('hidden');
      iphoneSpeaker.classList.add('hidden');
      iphoneCamera.classList.remove('hidden');
      mobileView(0);
      touchView(1);
    }
    if (deviceMode == 'desktop-view') {
      iphoneButton.classList.add('hidden');
      iphoneSpeaker.classList.add('hidden');
      iphoneCamera.classList.add('hidden');
      mobileView(0);
      touchView(0);
    }

    needFit();
  }
}

function deviceView (mode) {
  var deviceMode = mode.classList[0] + '-view';
  var currentMode = device.classList[0];
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
