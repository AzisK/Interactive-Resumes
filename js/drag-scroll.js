var curStartPos, curPos, curDown, moveBy, moveTo;
var isOnMap = false;

mapCanvas.addEventListener("mouseenter", function() { isOnMap = true; });
mapCanvas.addEventListener("mouseout", function() { isOnMap = false; });

view.onmousemove = function (e) {
	if (isOnMap) { return; }
	if (curDown) {
		curPos = e.clientY;
		moveBy = (curStartPos - curPos)*2;
		moveTo = view.scrollTop + moveBy;
		view.scrollTop = moveTo;
		curStartPos = curPos;
	}
}

view.onmousedown = function (e) {
	if (isOnMap) { return; }
    curStartPos = e.clientY;
    curDown = true;
}

view.onmouseup = function (e) {
    curDown = false
}
