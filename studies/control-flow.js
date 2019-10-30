/**
 * Control Flow
 * 
 * Control Flow is the way in which we control which statements in our code will 
 * execute and what code will be skipped. This is achieved through several different
 * constructs in programming, for example...
 * 
 * If statements give us the ability to to perform some action based off a boolean expression that 
 * goes inside of the parenthesis following if
 * 
 * Else-If statements allow us to create several different scenarios in which only one will execute 
 * 
 * Else clauses are the defualt action that is executed if none of the above conditions have been met
 * 
 * Switch allows us to test against a bunch of different values in a very organized way
 */


/** if statements
* syntax:
* if (condition)
* {
*   doSomething();
* }
**/
// Example
var x = 10;
var y = 20;
if (x > y)
{
    console.log("x is greater than y");
}

/** else-if statements
 * syntax:
 * if (condition)
 * {
 *    doSomething();
 * }else if (condition 2)
 * {
 *    doSomethingElse();
 * }
 **/
// Example
if (y > x)
{
    console.log("y is greater than x");
}else if (x > y)
{
    console.log("x is greater than y");
}
//else statements are the default statement that gets executed
//in an if else if block they don't need to take a condition because 
//the are reserved for the end 
// Example
else
{
    console.log("x and y are equal"); //default behavior
}
//switch statements are an easier and more organized way of doing a lot
//of if-else-if statements and are best used when an if-else-if statement would
//grow out of control
//the switch keyword holds the value to be tested
//the case keyword is followed by the conditional statement
//this would be equivalant to the if in an "if" statement
//the break keyword breaks out of the current case otherwise
//all following cases will be executed as well
//the default keyword gives us a default action if none of the 
//conditions are true
//
//Syntax:
/**
 * switch(value)
 * {
 *  case firstCase:
 *          doSomething(); //executes if case is true
 *  break;  //breaks code execution
 *  default:
 *      doSomething(); //default action
 * }
 * 
 **/
 //Example
switch(x)
{
    case 5:
        console.log("x is equual to 5");
        break;
    case 10:
        console.log("x is equal to 10");
        break;
    case 15:
        console.log("x is equal to 15");
        break;
    case 20:
        console.log("x is equal to 20");
        break;
    default:
        console.log("x is not equal to any value that I know");
}