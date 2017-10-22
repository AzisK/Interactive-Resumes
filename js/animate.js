window.onload = function() {
    animateSequence();
};

function animateSequence() {
    var a = S('.sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

function animateText (target, message, index, interval) { 
  var targetSelector = s(target);
  if (index < message.length) {
    targetSelector.append(message[index++]);
    var timeout = setTimeout(function () { animateText(target, message, index, interval); }, interval);
  } 
};