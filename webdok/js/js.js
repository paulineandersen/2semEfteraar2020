$(document).ready(function () {

    console.log("jQuery 3.5.1 running. Alert level green.");


    //Canvas start billede med snipershot   
    //mousemove
    var can = document.getElementById('canvas1');
    var ctx = can.getContext('2d');


    can.addEventListener('mousemove', function (e) {
        var mouse = getMouse(e, can);
        redraw(mouse);
    }, false);


    function redraw(mouse) {
        console.log('a');
        can.width = can.width;
        ctx.drawImage(img, 0, 0);
        ctx.beginPath();
        ctx.rect(0, 0, 1920, 1080);
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2, true)
        ctx.clip();
        ctx.fillRect(0, 0, 1920, 1080);
    }

    var img = new Image();
    img.onload = function () {
        redraw({
            x: -500,
            y: -500
        })
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

    //Canvas slut 


    // play/pause på video start
    var video = document.getElementById("video");
    video.controls = true;

    function playPause() {
        if (video.paused) {
            video.play();
            video.controls = false;
        } else {
            video.pause();
            video.controls = true;
        }
    }
    //play/pause på video slut



    // start audio/lyd fra drengene på skolen


    //figur 1
    document.getElementById('play1').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('audio1');
        if (audio1.paused) {
            audio1.play();
        } else {
            audio1.pause();
        }

    });



    //figur 2

    document.getElementById('play2').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('audio2');
        if (audio2.paused) {
            audio2.play();
        } else {
            audio2.pause();
        }

    });


    //figur 3

    document.getElementById('play3').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('audio3');
        if (audio3.paused) {
            audio3.play();
        } else {
            audio3.pause();
        }

    });

    //figur 4

    document.getElementById('play4').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('audio4');
        if (audio4.paused) {
            audio4.play();
        } else {
            audio4.pause();
        }

    });


    //slut audio/lyd fra drengene på skolen





    // start hide/show <p> when clicked on
    $('h2').click(function () {
        $('p').toggle(0);
    });

    // slut hide/show <p> when clicked on



    // FOOTER start
    //Array med billeder

    let galleri = document.getElementById("so_me");
    galleri.innerHTML = "so_me";


    var kort = [
"../images/facebook-hvid.png",
"../images/instagram.png",
"../images/youtube.png",
];

    var some = [
"https://www.facebook.com/KE.Galten/",
"https://www.instagram.com/klankefterskole/",
"https://www.youtube.com/channel/UC8ThqGDjOqs5vjZqRDTCI1w",
];


    // loope listen ud
    for (let n = 0; n < kort.length; n++) {
        galleri.innerHTML +='<a href="'+ some[n] + '"><img src="' + kort[n] + '"></a>';
    }
    // FOOTER slut



}); // denne udgør slut for jquery adgang
