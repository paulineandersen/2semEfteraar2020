/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');


$(document).ready(function () {

	console.log("jQuery 3.5.1 running. Alert level");
    $('#betaling').hide();
    $('#bekraeftelse').hide();
    
    
    $('#bar').click(function() {
         $('#navul').toggle("slow");
    });
    
    $('#page1').click(function(){
       $('#oplysninger').show(); 
        $('#betaling').hide(); 
        $('#bekraeftelse').hide();
        }); 
    
    
    $('#page2').click(function(){
       $('#betaling').show(); 
        $('#bekraeftelse').hide();
        $('#oplysninger').hide(); 
    });
    
     $('#page3').click(function(){
       $('#betaling').hide(); 
        $('#bekraeftelse').show(); 
         $('#oplysninger').hide();
    });
    
    
    $('.videre').click(function(){
       $('#betaling').show(); 
        $('#oplysninger').hide();
    });
    
    
    $('.bekraeft').click(function(){
       $('#bekraeftelse').show(); 
        $('#oplysninger').hide();
        $('#betaling').hide();
    });
    
   
   });
    