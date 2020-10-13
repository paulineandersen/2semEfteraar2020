/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');


$(document).ready(function () {

	console.log("jQuery 3.5.1 running. Alert level");

    
    $('#bar').click(function() {
         $('#navul').toggle("slow");
    });

    
   });
    