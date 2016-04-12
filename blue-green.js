"use strict";

window.addEventListener("load", function() {
    //assign random background color on button click.
    var button = document.querySelector("button");
    
    button.onclick = blueGreen;
    
    //assign random background color on page load.
    blueGreen();
    
}) 

function blueGreen() {
    var body = document.body;
    var blueOrGreen = Math.round(Math.random());
    
    if(blueOrGreen === 1) {
        body.style.backgroundColor = "blue";
    } else {
        body.style.backgroundColor = "green";
    }
}