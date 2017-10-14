var curStartPos, curPos, curDown, moveBy, moveTo;
var isOnDiv = false;

mapCanvas.addEventListener("mouseenter", function() { isOnDiv=true; });
mapCanvas.addEventListener("mouseout", function() { isOnDiv=false; });

view.onmousemove = function (e) {
	if (curDown) {
		curPos = e.clientY;
		moveBy = (curStartPos - curPos)*2;
		moveTo = view.scrollTop + moveBy;
		view.scrollTop = moveTo;
		curStartPos = curPos;
	}
}

view.onmousedown = function (e) {
	if (isOnDiv) { return; }
    curStartPos = e.clientY;
    curDown = true;
}

view.onmouseup = function (e) {
    curDown = false
}
