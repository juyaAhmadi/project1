/*

Consider an array of boolean values that represent sheep that are currently present in 
their barn. A value of true means the sheep is present in the barn.

Write a function that takes in an array and returns the number of sheep present in the barn.
Console log your results.

*/

var sheep = [true, true, true, false,
             true, true, true, true,
             true, false, true, false,
             true, false, false, true,
             true, true, true, true,
             false, false, true, true];
var numberSheep = countingSheep(sheep);
window.alert("There are " + numberSheep + " sheep in the barn.");

//Write the function 

function countingSheep(sheep){
    var accumulator = 0;
    var falsies = 0;
    
    var boolean;
    for(var index = 0; index < sheep.length; index++)
    {
        if (sheep[index] == true)
        {
        accumulator++;
        }
       
        
    }
    return accumulator;
    
    
    
    
}

