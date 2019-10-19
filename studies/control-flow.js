/**
 * Control Flow
 * 
 * If statements give us the ability to to perform some action based off a boolean expression
 * 
 * Else-If statements allow us to create several different scenarios in which only one will execute 
 * 
 * Else clauses are the defualt action that is executed if none of the above conditions have been met
 * 
 * Switch allows us to test against a bumch of different values in a very organized way
 */


//if statements
var x = 10;
var y = 20;
if (x > y)
{
    console.log("x is greater than y");
}

//else-if statements
if (y > x)
{
    console.log("y is greater than x");
}else if (x > y)
{
    console.log("x is greater than y");
}
//else
else
{
    console.log("x and y are equal"); //default behavior
}
//switch 
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