/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

document.write("<h1>Hej verden</h1>");

/**
* JavaScriptets Byggeklodser
**/

// gammeldags måde at skrive variabler på
var magi = "hokus pokus filiokus filihankat";
var markup = "<strong>";
var markupX = "</strong>"; 
// <strong></strong> = bold, <em> = italic

//mere moderne måde at skrive var på
let citat = '"Jylland mellem tvende have."';

// hvis en værdi ikke ændres
const navn =  "<br>H.C. Andersen (1805-1875)";

document.write( markup + magi + markupX);

// JS kan også regne
let a = 2; 
let b = 777;
let c = a * b;
console.log( c ); 

// data typer: number, string, objects

var cars = [
    "Saab", "volvo", "BMW", "Citroén", 234, 12, 34.2
];

let husk = [
  "Ost", "Mel", "Smør", "agurk"  
];

//korte kodelinjer er lettere at forstår
document.write(
"<p>" + husk[0] + "</p>");

//Loop
/**
* for (
let i = 0;  ==> variabel
i<5;  ========> betingelse som stopper loopet når det er nået
i++)  ========> tæller, ++ lægger en til værdien af i 
**/


document.write ("<ul>"); 
for (let i = 0;   i< cars.length;  i++) {
    document.write ("<li>" + cars[i] + "</li>"); 
}
document.write("</ul>"); 



// Lav en liste. Lad den skrive noget html. Lad der være classes i html. Styles via css

document.write ("<ul class='uge'>" );
let ugedage = [
    "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag" 
]; 
    document.write ("<li>" + ugedage + "</li>");  
document.write ("</ul>"); 



/**
* DOM - Dokument Object Model
**/

let element = document.getElementById("minAside");
element.innerHTML = "<h1>Her er en overskrift</h1>"; 
element.style.color = "#2d4a9a"; 
// element.style.backgroundColor = "orange"; 
element.style.fontFamily = "helvetica"; 

<!-- du kan style -->

var kort = [
    "../images/kort.png",
    "../images/greenman.jpg",
    "../images/marselis.jpg"
]; 

//loope listen ud
for (let n=0; n<kort.length; n++) {
    console.log ( "<img src='" + kort[n] + "'>");
    element.innerHTML += "<img src='" + kort[n] + "'>";
   
}




    


