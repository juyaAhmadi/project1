// Array Todo List APP
/*
1. Declare an array
2. Prompt user on what they would like to do from the following options, 
   then assign response to a variable
	- "new" will prompt to enter a new todo item and will then push 
		user entry to the existing array
		Display the newly added todo item in the console to confirm that it has been added
	- "list" will print in console each todo item in the array with its 
		corresponding index 
		Example: 
		-> 0 : Get the milk
		-> 1 : Pick up dry cleaners
		-> 2 : Wash clothes
	- "delete" will prompt the user to enter the index of a todo item they wish to delete
	- "quit" will end the program

Use functions for adding todo, printing the list, and deleting todo
*/


var todoList = new Array("Get the milk","Pick up dry cleaners","Wash clothes");

var response;

//var length = todoList.length();
response = window.prompt("What do you want to do?");

while (response != "quit")
{


   
   switch(response)
   {
   	case 'list': listFunction(todoList);
   	break;
   	case 'new': newFunction(todoList);
   	break;
   	case 'delete': deleteFunction(todoList);
   	break;
   	case 'quit': exit();
      break;
   }
		response = window.prompt("What do you want to do now?");
}

function listFunction(array){
	
	for (var index = 0; index < array.length; index++)
	
	console.log(todoList[index]);
	

	
}

function newFunction(theArray){
	
var newItem = window.prompt("What do you want to add?");
  console.log(newItem);
	theArray.push(newItem);
		
	
	return theArray;
}

function deleteFunction(theArray){
	var deleteItem = window.prompt("What do you want to delete from the list?");
	console.log(deleteItem);
	theArray.pop(deleteItem);
	return theArray;
}

function exit(){
	System.exit();
}

/*function loopArray()
{
	todoArray[0] = window.prompt("Add your todo item");
}*/// JavaScript File