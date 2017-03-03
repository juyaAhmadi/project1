//JS Prompt Exercise
/* INSTRUCTIONS 
Create your own HTML file
Using the prompt() method do the following
1. Ask for the user's first name
2. Ask for the user's last name
3. Ask for the user's age
4. Print out the user's full name in a sentence
5. Print out the user's age in a sentence
*/
var firstName;
var lastName;
var age;

firstName = window.prompt("What is your first name");
lastName = window.prompt("What is your last name");
age = window.prompt("What is your age");

console.log("your name is " + firstName + "  " + lastName +"." );
console.log("your age is " + age + "  " years  );