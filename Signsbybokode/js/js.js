/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Hej det virker!');


//document.ready function tjekker om DOM'en er loaded
$(document).ready(function() {
            
console.log('Hej fra js/js.js: nu med jQuery!');
    
    // overskrift animation
    $(window).scroll(function(){
    $("#scroll").css("opacity", 1 - $(window).scrollTop() / 550);
    });
    
    // Kontakt knappen kan foldes ud
    $('#klik').hide(); 
    
    $('#takt').click(function() {
        
    $('#klik').toggle(10);
    });
    
    $('.kontakt').click(function() {
        $('#klik').toggle(10);
    });


/* arrow */

$('.pilflex').hover(function () {
    $('.right').animate({left: '20px'});
}, function(){
    $('.right').animate({left: '0px'})
    }); 
    
    

    

/** scroll effekt
    let Synlig = 0;
$(window).scroll(function(){
    console.log('der scrolles!');
    $('.teaser1').css("opacity", Synlig + 1); 
}); **/
    
    /**
    
    var top_of_element = $("#hero").offset().top;
    var bottom_of_element = $("#hero").offset().top + $("#hero").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // the element is visible, do something
        console.log('I am visible now');
        $('#hero').addClass('brugAnimation');
        } else {
        // the element is not visible, do something else
        console.log('I know noothing!')
        // ... hide again ...
    }
}); */

    
}); // slut jquery


               
    
/* map til siden OM */
    mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bGluZXNhIiwiYSI6ImNrZnFrZW94cjE1NjYyem9lYXg5dm5xbDEifQ.q_A2UiOFc2bEjL8-yUUwVg';
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/paulinesa/cki8roynv0l2319uupwq3ciyl', // style URL
    center: [10.1876355, 56.1587063], // starting position [lng, lat]
    zoom: 14, // starting zoom 
});

  mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bGluZXNhIiwiYSI6ImNrZnFrZW94cjE1NjYyem9lYXg5dm5xbDEifQ.q_A2UiOFc2bEjL8-yUUwVg';
    var map = new mapboxgl.Map({
    container: 'kontaktmap', // container id
    style: 'mapbox://styles/paulinesa/ckiio7d3j2vva19s1y8qz765s', // style URL
    center: [10.188525, 56.158213], // starting position [lng, lat]
    zoom: 14, // starting zoom 
});
                           
 
                          
