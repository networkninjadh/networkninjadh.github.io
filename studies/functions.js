/**
 * Functions are good for wrapping code that you wouldn't necesarily want to rewrite for example if I have to check if every
 * element in an array passes some sort of test then I could write a function that does this in order to simplify the code
 * not only that, but with the function the code only has to be debugged once.
 * 
 */

//declaring a function
/** A function can be created in two ways in javascript using the function keyword
 * as a variable and as a function
 * Example:
 * 
 * function functionName(parameters)
 * {
 *      code to execute in function
 *      optional return value
 *  }
 * 
 * var func = function(parameters)
 * {
 *      code to execute in function
 *      optional return value
 * }
 * 
 **/
//Examples:
//Assigning a function to a variable
var func1 = function(string) //this function takes one parameter named string this function is also assigned to a function variable
{
    console.log(string);
}
//creating a standard function
function func2()
{
    return "You are in func2";
}

//using a function with parameters
console.log(func1("You are in function 1!")); //the function call prints the parameter to the console

//using a function without parameters
console.log(func2()); // Prints you are in func2

//functions that take parameters
//Functions can take as many parameters as they need to. Even other functions
function paramTest(num, string, object, array, boolean, func)
{
   return 5;
}

//Optional parameters
//All parameters are optional in javascript, if no parameter is passed in then it will have a value of 
//undefined by default, but you can implement your functions to use default parameters

function add(a, b = 1)
{
    return a + b;
}

console.log(add(1)); //this prints 2 because b will default to 1
console.log(add(1,2)); //this prints 3 because the default is not used

//Functions cal also take a variable number of arguments by usng the "..." followed by the name of the parameter
//javascript will then pass as many arguments to the function as you call it with and store those values in 
//an array by the same name of the variable following "..."
//Example

function func3(...array)
{
    console.log(array.length); //prints the number of arguments that were passed in
}

//usage
func3(1,3,2,3);

//function scope
//any variables created within the scope of the function are accessable only from within that function
var xyz = 321;
function func4()
{
    //from the function I can access the global variable xyz, but if I declare my own xyz variable
    //then any reference inside the function will now be to that variable and it cannot be changed outside 
    //of the function that created it
    var xyz = 10;
    console.log(xyz);
}

console.log(xyz); //this will print 321
func4(); //but this will print 10


//closures
//A closure is the combination of a function bundled together with references to it's surrounding
//state this gives you access to an outter function's scope from an inner function

//Example:
function outter(value)
{
    return function inner(value2)
    {
        return value + value2;
    }
}

var add2 = outter(2); //creates a new function based off the inner function and returns it
console.log(add2(10)); //outputs 12