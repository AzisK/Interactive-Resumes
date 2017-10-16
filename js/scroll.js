var animatedText = false;

view.onscroll = function () {
	if (view.scrollTop > 100) {
		if (!animatedText) {
			animatedText = true;
			animateText('#cross-device', 'Cross-device', 0, 110);
		}
	}

	if (view.scrollTop <= 300) {
		skillsText.style.opacity = view.scrollTop/300;
	}
};