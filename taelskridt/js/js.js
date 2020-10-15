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
        $('#page1').css({"background-color":"var(--green)"});
        $('#page2').css({"background-color":"transparent"});
        $('#page3').css({"background-color":"transparent"});
        }); 
    
    
    $('#page2').click(function(){
       $('#betaling').show(); 
        $('#bekraeftelse').hide();
        $('#oplysninger').hide();
        $('#page2').css(
        {"background-color":"var(--green)"});
        $('#page1').css({"background-color":"transparent"});
        $('#page3').css({"background-color":"transparent"});
        
    });
    
     $('#page3').click(function(){
       $('#betaling').hide(); 
        $('#bekraeftelse').show(); 
         $('#oplysninger').hide();
         $('#page3').css(
        {"background-color":"var(--green)"});
        $('#page1').css({"background-color":"transparent"});
        $('#page2').css({"background-color":"transparent"});
    });
    
    $('#page1').css({"background-color":"var(--green)"});
    
    
    $('.videre').click(function(){
       $('#betaling').show(); 
        $('#oplysninger').hide();
        $('#page2').css(
        {"background-color":"var(--green)"});
        $('#page1').css({"background-color":"transparent"});
    });
    
    
    $('.bekraeft').click(function(){
       $('#bekraeftelse').show(); 
        $('#oplysninger').hide();
        $('#betaling').hide();
        $('#page3').css({"background-color":"var(--green)"});
        $('#page1').css({"background-color":"transparent"});
        $('#page2').css({"background-color":"transparent"});
                         
    });
    
    
    
   
   });
    