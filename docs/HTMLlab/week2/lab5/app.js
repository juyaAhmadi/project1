/* 
Guessing Game
Create your own index page.
*/

//1. create secretNumber

//2. ask user for guess

//3. check if guess is right

//4. check if guess is higher

//5. otherwise, check if lower
var answer;
 answer = window.prompt("1-Are we there yet?");
 
 while (!(answer == "yes" || answer == "yeah"))
 {
     answer = window.prompt("2-are we there yet?");
     if (answer == "yes" || answer == "yeah")
     {
         window.alert("1-yeah, we finally made it!)")
     }
     else 
     {
         answer = window.prompt("3-Are we there yet?");
     }
 }
 if (answer == "yes" || answer == "yeah")
 {
     window.alert("2-yeah, we finally made it!)")
 }