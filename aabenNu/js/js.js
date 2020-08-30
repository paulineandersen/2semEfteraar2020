/**
 * file: js.js
 * purpose: interactivity
 **/
 console.log('Hilsen fra js/js.js');

 var today = new Date();
 var hourNow = today.getHours();
 var greeting;

console.log(hourNow);

// har butikken åbent nu
 if (hourNow > 18) {
     greeting = 'Good evening!';
     billede = 'images/and.png';
 } else if (hourNow > 12) {
     greeting = 'Good afternoon!';
     billede = 'images/homer.png';
 } else if (hourNow > 0) {
     greeting = 'Good morning!';
 } else {
     greeting = 'Welcome!';
 }

// tjek resultatet i console
 console.log('<h3>' + greeting + '</h3>');
 console.log('<img src="' + billede + '" alt="Om Homer">');

 // brug .innerHTML til at skrive til en div ...
