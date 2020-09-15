/**
 * file: js.js
 * purpose: interactivity
 **/



$(document).ready(function() { 
    
    console.log("jQuery 3.5.1 running. Alert level green.");

//mousemove

var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');


can.addEventListener('mousemove', function(e) {
    var mouse = getMouse(e, can);
    redraw(mouse);
}, false);


function redraw(mouse) {
    console.log('a');
    can.width = can.width;
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.rect(0,0,1920,1080);
    ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI*2, true)
    ctx.clip();
    ctx.fillRect(0,0,1920,1080);
}

var img = new Image();
img.onload = function() {
    redraw({x: -500, y: -500})
}


function getMouse(e, canvas) {
    var element = canvas,
        offsetX = 0,
        offsetY = 0,
        mx, my;

    // Compute the total offset. It's possible to cache this if you want
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;

    // We return a simple javascript object with x and y defined
    return {
        x: mx,
        y: my
    };
}
    
// play/pause på video
    
    
var video = document.getElementById("video");
    video.controls = true; 
    
    function playPause() {
        if (video.paused) {
            video.play();
            video.controls = false;
        }
        else {
            video.pause();
            video.controls = true; 
        }
    }
    

// hide/show <p> when clicked on


$('h2').click(function() {
    $('p').toggle(0);
}); 
    

    
}); // denne udgør slut for jquery adgang