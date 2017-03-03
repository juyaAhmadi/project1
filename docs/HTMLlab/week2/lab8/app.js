console.log("CONNECTED");

// 01 printReverse()
/* 
Write a function printReverse() that takes an array as an arguement
and prints out the elements in the array in reverse order
(don't actually reverse the array itself

Example:
printReverse([1,2,3,4]);
-> 4
-> 3
-> 2
-> 1 */
function printReverse()
{
    var a = [1, 2, 3, 4];
    outputArray("Data items in the original order: ", a, document.getElementById("originalArray"));
    a.reverse(compareIntegers);
    outputArray("Data items in ascending order: ", a, document.getElementById("sortedArray"))
}

function outputArray(heading, theArray, output)
{
    output.innerHTML = heading + theArray.join(" ");
}

function compareIntegers(value1, value2)
{
    return parseInt(value1) - parseInt(value2);
}

window.addEventListener("load", printReverse, false);
/*
printReverse(["a","b","c","d"]);
-> d
-> c
-> b
-> a
*/

// 02 isUniform()
/*
Write a function isUniform() which takes an array as an argument
and returns true if all elements in the array are identical

Example:
isUniform([1,1,1,1])		-> true
isUniform([2,1,1,1])		-> false
isUniform(["a","a","a"])	-> true
isUniform(["a","b","p"])	-> false
*/


// 03 sumArray()
/*
Write a function sumArray() that accepts an array of numbers and 
returns the sum of all numbers in the array

Example:
sumArray([1,2,3])			-> 6
sumArray([4,8,5,10])		-> 27
sumArray([-5,100])			-> 95
*/
function sumArray()
{
    var theArray = [1, 2, 3, 4];
    var total = 0; // accumulator
    
    var length = theArray.length; // gets the size the array before the for loop
    
    for (var index = 0; index < length; index++)
    {
        total +=theArray[index];
        
    }
    
   var results = "<p> Total of added numbers: " + total + "</p>";
   document.getElementById("addedNumbers").innerHTML = results;
}

window.addEventListener("load", sumArray, false);

// 04 max()
/*
Write a function max() that accepts an array of numbers and 
return the maximum number in the array

Example:
max([1,2,3])                -> 3
max([4,10,5,10])            -> 10
max([-5,100])               -> 100
*/

function max()
{
    var theArray = [1,2,3,4];
    var length = theArray.length;
    var highest = theArray[0];
    
    for (var index = 1; index < length; index++)
    {
        if(theArray[index] > highest)
        {
            highest = theArray[index];
        }
    }
    
    var results = "<p> The highest of the numbers is " + highest + "</p>";
    document.getElementById("highestNumber").innerHTML = results;
    
    
}

window.addEventListener("load", max, false);