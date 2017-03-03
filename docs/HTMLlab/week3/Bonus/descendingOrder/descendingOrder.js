/*

Write a function that can take any non-negative integer as an argument and return it with it's digits
in descending order. Descending order means that you take the highest digit and place the next highest digit 
immediately after it.

Example:
Input: 145263
Output: 654321

*/

var input = window.prompt("Enter a number with two or more digits.");

var result = descendingFunction(input);

window.alert("Your input is " + input + " and the descending order of the number is " + result);

function descendingFunction(input)
{
    var list;
    var sorted;
    
    list = input.split("");
    console.log(list);
    sorted = list.sort();
    console.log(sorted);
    var reversed = sorted.reverse();
    console.log(reversed);
    
    return reversed;
}