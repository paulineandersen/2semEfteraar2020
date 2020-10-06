/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');


$(document).ready(function () { 

	console.log("jQuery 3.5.1 running. Alert level");
   
    $('#radio').hide();
    $('#valg').hide(); 
    
    $('#næste').click(function(){
        console.log("det virker");
        // skjule #navn
         $('#navn').hide();
        // vise #radio
         $('#radio').show();
    });
    
    $('#næste2').click(function(){
        console.log("det virker");
        // skjule #radio
         $('#radio').hide();
        // vise #valg
         $('#valg').show();
    });
    
    
});
    
    
