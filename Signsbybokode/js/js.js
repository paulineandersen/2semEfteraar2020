/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Hej det virker!');


//document.ready function tjekker om DOM'en er loaded
$(document).ready(function() {
            
console.log('Hej fra js/js.js: nu med jQuery!');
    
    

    
// KONTAKT KNAP 
// http://jsfiddle.net/SRw67/

    function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
};

$(function() {
  $('#contact').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#contact'));
    return false;
  });
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};

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
                           
 
                          
