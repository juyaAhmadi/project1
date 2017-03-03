/*

Write a function that accepts an array of integers as an argument and finds and returns the smallest
integer.

Given an array of [34, 15, 88, 2], your function should return 2.

*/

var theArray = [34, 15, 88, 2];

var lowestNumber = lowest(theArray);

window.alert("The lowest is " + lowestNumber);

function lowest(theArray)
{
    
    var length = theArray.length;
    var low = theArray[0];
    
    for (var index = 1; index < length; index++)
    {
        if(theArray[index] < low)
        {
            low = theArray[index];
        }
    }
    return low;
    
    
    
}

