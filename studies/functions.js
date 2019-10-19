/**
 * Functions are good for wrapping code that you wouldn't necesarily want to rewrite for example if I have to check if every
 * element in an array passes some sort of test then I could write a function that does this in order to simplify the code
 * not only that, but with the function the code only has to be debugged once.
 * 
 */

//declaring a function
var func = function(string) //this function takes one parameter named string this function is also assigned to a function variable
{
    console.log(string);
}
function getString()
{
    return "String";
}
//using a function
console.log(getString());
//assignming function to a variable
var string = getString();
func(string);

//functions that take parameters
//Functions can take as many parameters as they need to. Even other functions
function paramTest(num, string, object, array, boolean, func)
{
   return 5;
}
//function scope
//Whithin the scope of the function we have access to all global variables defined with the var keyword as well as those definitions that do not use any keyword
//however when using let and const the variables that we create are block scoped 
//closures