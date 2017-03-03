/* 
Guessing Game
Create your own index page.
*/

//1. create secretNumber

//2. ask user for guess

//3. check if guess is right

//4. check if guess is higher

//5. otherwise, check if lower
var askNumber;
var number;
var secretNumber = 7;


askNumber = window.prompt("try to guess my secret number by typing in one number");
number = parseInt(askNumber);

if (number == secretNumber ) 
{
    console.log("Your guess is correct");
}
else if (number < secretNumber )
{
    console.log("Your guess is too low");
}
else if (number > secretNumber )
{
    console.log("Your guess is to high");
}