/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

	console.log("jQuery 3.5.1 running. Alert level green.");

	// ... din kode herfra ...
    
    //$('p').hide(400);
   /** 
   Når man klikker kommer der en alert-box
   
   $('#enKnap').click(function() {
    alert("Der er klikket");    
    }); 
   
   **/
    
    $('#enKnap').click(function() {
    $('h2').toggle(777); 
    $('p').css({
        "background-color": "pink", 
        "font-size": "20px",
        "color": "purple"
        //minVid.play(): --> afspiller video ved klik
     });
    }); 
    
    
    
    
    //400=400ms=tid. Skjuler efter 400ms
        
	// ... din kode slut ...

}); // denne line må ikke slettes
