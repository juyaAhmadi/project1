/* 
Color Changer

Toggle the body's background color between Purple
and white, when a button is clicked.
*/

// Select the button and assign to a variable

// Attach an event listener to the button when it is clicked
// the callback function will use if/else statement
// check if it's purple- if it's purple change the background style to white
// otherwise it will change style to purple.

//Bonus: use the toggle method instead

function colorize() {
var element = document.getElementById("clickMe");
element.style.backgroundColor='purple';
element.style.backgroundColor='white';
element.style.textAlign='center';

var background = document.getElementById("purple");
background.style.backgroundColor='purple';

}

function start(){
    var button = document.getElementById("clickMe").style.backgroundColor="purple";
    button.addEventListener("click", false);
    
}

function callBack()
{
    if ((document.backgroundColor="white") == true)
    {
       document.getElementById("purple").style.backgroundColor="purple"; 
    }
    else{
        document.getElementById("purple").style.backgroundColor="white";
    }
   
}
