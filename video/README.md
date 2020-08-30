# JavaScript Boilerplate: Video

Here is a vanilla Javascript for videos. In this case the event listener works on the element via onclick(). Often W3 will show that sort of code first. However it's kind of a mess. The JavaScripts should happen in ... the JavaScript.

A more elegant solution would be to add an eventlistener along these lines:

~~~~
// in the html:
<button id="shutUp">

// in the Javascript
var myVideo = document.getElementById("myVideo");
myVideo.width = 420;
myVideo.controls = true;

// eventlisteners will give you fewer codelines
shutup.addEventListener('click',
  function(){
    myVideo.muted = true;
  });

// or call a named function like this:
shutup.addEventListener('click', shutUpPlease);

~~~~

Feel free to enhance the code.
