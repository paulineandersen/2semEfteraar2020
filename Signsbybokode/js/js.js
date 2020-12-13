/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Hej det virker!');


//document.ready function tjekker om DOM'en er loaded
$(document).ready(function () {

    console.log('Hej fra js/js.js: nu med jQuery!');

    // overskrift animation
    $(window).scroll(function () {
        $(".scroll").css("opacity", 1 - $(window).scrollTop() / 650);
    });



    $(window).scroll(function () {
        $(".forsidevideo").css("opacity", 1 - $(window).scrollTop() / 5000);
    });

    // Kontakt knappen kan foldes ud
    $('#klik').hide();

    $('#takt').click(function () {

        $('#klik').toggle(10);
    });

    $('.kontakt').click(function () {
        $('#klik').toggle(10);
    });


    /* arrow */

    $('.pilflex').hover(function () {
        $('.right').animate({
            left: '20px'
        });
    }, function () {
        $('.right').animate({
            left: '0px'
        })
    });

    
    let topTest, topPosition; 

            // ved scrolle testes om et elements topposition svarer til scroll

    $(window).scroll(function () {

        var top_of_element = $(".billede1").offset().top;
        var bottom_of_element = $(".billede1").offset().top + $(".billede1").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            // the element is visible, do something
            console.log('I am visible now');
            $('.billede1').addClass('brugAnimation');
           //kører animationen fra css
        } else {
            // the element is not visible, do something else
            console.log('I am invisible now ... fading down.')
            $('.billede1').css('filter', 'opacity(1)');
            // ... hide again ...
        }
    });


    $(window).scroll(function () {

        var top_of_element = $(".billede2").offset().top;
        var bottom_of_element = $(".billede2").offset().top + $(".billede2").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            // the element is visible, do something
            console.log('I am visible now');
            $('.billede2').addClass('brugAnimation');
           //kører animationen fra css
        } else {
            // the element is not visible, do something else
            console.log('I am invisible now ... fading down.')
            $('.billede2').css('filter', 'opacity(1)');
            // ... hide again ...
        }
    });


    $(window).scroll(function () {

        var top_of_element = $(".billede3").offset().top;
        var bottom_of_element = $(".billede3").offset().top + $(".billede3").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            // the element is visible, do something
            console.log('I am visible now');
            $('.billede3').addClass('brugAnimation');
            //kører animationen fra css
        } else {
            // the element is not visible, do something else
            console.log('I am invisible now ... fading down.')
            $('.billede3').css('filter', 'opacity(1)');
            // ... hide again ...
        }
    });


    $(window).scroll(function () {

        var top_of_element = $(".billede4").offset().top;
        var bottom_of_element = $(".billede4").offset().top + $(".billede4").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            // the element is visible, do something
            console.log('I am visible now');
            $('.billede4').addClass('brugAnimation');
            //kører animationen fra css
        } else {
            // the element is not visible, do something else
            console.log('I am invisible now ... fading down.')
            $('.billede4').css('filter', 'opacity(1)');
            // ... hide again ...
        }
    });
    
    $(window).scroll(function () {

        var top_of_element = $("#del1").offset().top;
        var bottom_of_element = $("#del1").offset().top + $("#del1").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            // the element is visible, do something
            console.log('I am visible now');
            $('#del1').addClass('brugAnimation');
            //kører animationen fra css
        } else {
            // the element is not visible, do something else
            console.log('I am invisible now ... fading down.')
            $('#del1').css('filter', 'opacity(1)');
            // ... hide again ...
        }
    });
        

}); // slut jquery




/* map til siden OM */
mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bGluZXNhIiwiYSI6ImNrZnFrZW94cjE1NjYyem9lYXg5dm5xbDEifQ.q_A2UiOFc2bEjL8-yUUwVg';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/paulinesa/cki8roynv0l2319uupwq3ciyl', // style URL
    center: [10.1876355, 56.1587063], // starting position [lng, lat]
    zoom: 14, // starting zoom
});

