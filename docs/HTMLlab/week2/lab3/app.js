// JavaScript File
/*Age Calculator Exercise
1. Ask user for their Age
2. Calculate the total amount of days based of the age
3. Display the user roughly how many days they've been alive
*/
var askAge;
var age;

askAge = window.prompt("what is your age?");
age = parseInt(askAge);

if (age < 0) 
{
    console.log("Erroe.");
}
else if (age == 21)
{
    console.log("happy 21st birrthday!");
}
else if (!age % 2 == 0)
{
    console.log(" your age is odd!");
}