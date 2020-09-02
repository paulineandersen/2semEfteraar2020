/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

 // function that will fire after click


let runAnimation = function(){
  square.classList.add("animate");
  setTimeout(clearClass, 8000);
}
// 4000 = 4000 ms = 4s

// element.addEventListener("click", myAddClassFunction);
square.addEventListener("click", runAnimation);

let clearClass = function(){
  square.classList.remove("animate");
}

// ny

let runAnimation2 = function() {
    animation2.classList.add("animate2");
    setTimeout(clearClass2, 8000);
}

animation2.addEventListener("click", runAnimation2);

let clearClass2 = function()
{animation2.classList.remove("animate2");}

// setTimeout(myFunction, 3000); 
// 
