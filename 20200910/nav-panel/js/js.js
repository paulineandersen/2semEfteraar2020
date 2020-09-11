/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

	console.log("jQuery 3.5.1 running. Alert level green.");

	// ... din kode herfra ...
    
    $('.topnav').hide(0);
    
    
    $('#burger').mouseover(function() {
    $('.topnav').toggle(20);
    }); 
    
    $(".dot").click(function() {
     
    });
      
    
	// ... din kode slut ...

}); // denne line må ikke slettes
