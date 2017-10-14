function noFit () {
	device.style.transform = '';
	device.style.transformOrigin = '';
}

function toggleFit () {
	if (!device.style.transform) {
		device.style.transform = 'scale(' + window.innerHeight/device.offsetHeight + ')';
    	device.style.transformOrigin = '50% 0px';
	} else {
		device.style.transform = '';
		device.style.transformOrigin = '';
	}
}

function needFit () {
	if (window.innerHeight < device.offsetHeight) {
		fit.classList.remove('hidden');
	} else {
		fit.classList.add('hidden');
	}
}

fit.onclick = function () {
	toggleFit();
};

