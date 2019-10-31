/**
 * Loops:
 * Loops are programming constructs that allow you to repeat a block of code
 * a set amount of times according to some conditional statement
 * here are several types of loops that you can use in javascript
 * 
 * 0. Loops are used to perform actions more than once
 * 
 * 1. Loops require an iterator variable 
 * 
 * 2. Loops require an end condition so that it doesn't go on forever 
 */


//For loops
//For loops take a start value a condition and the a counter in which to increment 
//as the loop gets executed
/**
 * Syntax:
 * for (start; condition; increment)
 * {
 *  code block to be executed    
 * }
 * 
 **/
 //Example
for(var i = 0;i < 100;i++)
{
    console.log(i); //this for loop prints the numbers 0 to 100 to the console
}

//While loops
//While loops consist of the while keyword followed by open parenthesis where the 
//conditional statement is then close parenthesis next is a code block 
//begining with "{" and ending with "}" all code in between these curly brackets
//is executed for every iteration of the loop the while loop finishes when the condition 
//is no longer true
//Syntax:
/**
 * while(condition)
 * {
 *  code to be executed    
 * }
 **/
 //Example
var x = 100;
while (x > 0)
{
    console.log("hello world"); //this while loop prints the numbers 100 to 0 while x is greater than 0
    x--;
}

//do while loops
//do while loops are written using the do key word followed by open and close curly braces
//following the curly braces is the while keyword followed by open 
//Syntax
/**
 * do
 * {
 *   codeblock to execute  
 * } while (condition);
 **/
 //Example
x = 10;
do 
{
    console.log("do this at least one time"); //this prints at least 1 time
    x--;
} while (x > 0);

//For of loops
//For of loops allow you to loop through an array without using an index variable
//syntax
/**
 * for (someVariable of arrayName)
 * {
 *      //operations to perform on the array 
 * }
 **/
var cars = ["Dodge", "Toyota", "Benz"];
for (var x of cars)
{
    console.log(x); //prints out the types of cars
}

//For in loops are used to iterate through objects
//The for in loops works just like the for of loop, but for objects instead of arrays
//Syntax
/**
 * for (someVariable in objectName)
 * {
 *      //operations to perform on the object
 * }
 **/
var person = {firstName: "Damond", lastName: "Howard", age: 26};
for(var key in person)
{
    console.log(person[key]); //prints out the values of the object
}
