/* global document */

var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");

function vidFade() {
    "use strict";
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function () {

    // only functional if "loop" is removed
    "use strict";
    vid.pause();

    // to capture IE10

    vidFade();

});

pauseButton.addEventListener("click", function () {
    "use strict";
    vid.classList.toggle("stopfade");
    if (vid.paused) {

        vid.play();
        pauseButton.innerHTML = "pause";

    } else {

        vid.pause();

        pauseButton.innerHTML = "paused";

    }

});
