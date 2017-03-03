var input1 = window.prompt("Enter the first number: ");

var input1Parse = parseInt(input1);

var operator = window.prompt("Enter the operator: ");

var input2 = window.prompt("Enter the second number: ");
var input2Parse = parseInt(input2);

var result = calculator(input1Parse, operator, input2Parse);

window.alert("The answer is " + result);

function calculator(num1, op, num2)
{
    if (op == "+")
    {
        var answer = num1 + num2;
    }
    else if (op == "-")
    {
        answer = num1 - num2;
    }
    else if (op == "*")
    {
        answer = num1 * num2;
    }
    else if (op == "/")
    {
        answer = num1 / num2;
        if (num2 == 0)
        {
            answer = null;
        }
    }
    else
    {
        return null;
    }
    
    return answer;
}


