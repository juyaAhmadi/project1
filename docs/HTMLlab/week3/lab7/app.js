/*Functions Problem Set*/

/* 
isEven()
Write a function isEven() which takes a single numeric argument and 
return true if the number is even, and false otherwise
Example:
isEven(42)     //true
isEven(555)    //false



var number;
var answer;
var mesage;
number = window.prompt("Please Emter your number: ")
function answer(number){
    if (number / 2 == 0)
        return true;
    else
        return false;
}
console.log(answer());


    if(answer() == true)
    {
       console.log(number + "your number is even");
    }
    else
    {
        console.log(number + "your number is odd");
    }


/*
factorial()
Write a function factorial() which takes a single numeric argument
and returns the factorial of that number
6! is 6 x 5 x 4 x 3 x 2 x 1
0! is 1
Example: 
factorial(5);   //120
factorial(10);  //3628800
*/
var i, no, fact;
fact = 1;
no = window.prompt("Please Emter your number: ");
for(i=1; i<=no; i++)  
    {
    fact= fact*i;
    console.log(fact);
    }  


function fact(num)
 {
    var x=parseInt(num);
    //alert(x+1);
    if(x>0)
        x=x* fact(x-1);
    alert(x);
 }


/*
kebabToSnake()
write a function kebabToSnake() which takes a single kebab-cased 
string argument and return the sanke_cased version
Basically, replace "-" with "_"
Example:
kebabToSnake("hello-world");    //"hello_world"
*/


