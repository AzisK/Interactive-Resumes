var animatedText = false;

view.onscroll = function () {
	if (view.scrollTop > 100) {
		if (!animatedText) {
			animatedText = true;
			animateText('#cross-platform', 'Cross-platform', 0, 110);
		}
		view.onscroll = function () { };
	}
};