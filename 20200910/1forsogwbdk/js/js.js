/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

	console.log("jQuery 3.5.1 running. Alert level green.");

	
    var i = 0; 
    var txt = "Lorem ipsum typing effect!";
    var speed = 50;
    
    function typeWriter() {
        if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    
    
    
    //400=400ms=tid. Skjuler efter 400ms
        
	// ... din kode slut ...

}); // denne line må ikke slettes
