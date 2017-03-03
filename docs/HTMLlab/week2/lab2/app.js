// JavaScript File
/*Age Calculator Exercise
1. Ask user for their Age
2. Calculate the total amount of days based of the age
3. Display the user roughly how many days they've been alive
*/
var age;
var parseAge;
var total;

age = window.prompt("What is your age?");

parseAge = parseInt(age);

total = parseAge * 365;

console.log("you have been alive around " + total + " days.");