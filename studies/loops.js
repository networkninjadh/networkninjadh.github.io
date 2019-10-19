/**
 * Loops:
 * There are several types of loops that you can use in javascript
 * 
 * 0. Loops are used to perform actions more than once
 * 
 * 1. Loops require an iterator variable 
 * 
 * 2. Loops require an end condition so that it doesn't go on forever 
 */


//For loops
for(var i = 0;i < 100;i++)
{
    console.log(i); //this for loop prints the numbers 0 to 100 to the console
}
//While loops
var x = 100;
while (x > 0)
{
    console.log("hello world"); //this while loop prints the numbers 100 to 0 while x is greater than 0
    x--;
}
//do while loops
x = 10;
do 
{
    console.log("do this at least one time"); //this prints at least 1 time
    x--;
} while (x > 0);
//For of loops
var cars = ["Dodge", "Toyota", "Benz"];
for (var x of cars)
{
    console.log(x); //prints out the types of cars
}

//For in loops are used to iterate through objects
var person = {firstName: "Damond", lastName: "Howard", age: 26};
for(var key in person)
{
    console.log(person[key]); //prints out the values of the object
}
