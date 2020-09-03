/**
 * file: js.js
 * purpose: mange firkanter og skabe elementer via createlements
 **/
console.log('JavaScript from js/js.js: up and running!');

// Tjek at DOM er indlæst

let blomst = document.getElementById("div"); 
let Many = function(){

  let h = document.body.clientHeight;
  let w = document.body.clientWidth;

	for(let i=0; i<99; i++){
  
  	// create elements on the fly
    let newDiv = document.createElement("div");
    newDiv.classList.add("red");
    newDiv.style.left = Math.floor( Math.random() * w) + 'px';
    newDiv.style.top = Math.floor( Math.random() * h) + 'px';
    newDiv.style.transform = 'rotate('
    + Math.floor( Math.random()*360) 
    + 'deg)';

		scene.appendChild(newDiv);
		console.log('Many exec...'); // test
  }
}

Many(60);


blomst.addEventListener("click", Many);
