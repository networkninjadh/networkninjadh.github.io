/**
 * Operators
 * 
 * 0. Javascript operators are used to perform operations on variables
 * 
 * 1. Not every operator works with every datatype
 */

//Assignment Operators
var x;
x = 10; //x is being asigned the value of 10

x += 10; //10 is added to x
x -= 10; //10 is subtracted from x
x *= 2; //multiplies x by 2
x /= 2; //divides x by 2
x %= 2; //take the modulus and assign the value to x

//Arithmitic Operators
x = 5 + 5; //adds 5 and 5 and stores the value in x

x = 10 - 5; //subtracts 5 from 10 and asigns the value to x

x = 10 * 2; //multiplies 10 and 2 and stores the value in x

x = 20 / 2; //divides 20 by 2 and stores the value in x

if (x % 2 === 0)
{
    console.log("even number");
}else
    console.log("odd number");
x++; //increments the value of x by 1
x--; //decrements the value of x by 1

//String operators
var string = "Hello" + " ";
string += "World!";
console.log(string);

//Comparison Operators
console.log(1 == '1'); //non strict comparison of the number 1 and the string 1 this returns true

console.log(1 === '1'); //strict comparison this returns false

console.log(1 != 1); //non strict not equal returns false

console.log(1 !== '1'); //strict comparison returns true

console.log(1 > 2); //returns true if 1 is greater than 2

console.log(1 < 2); //returns true if 1 is less than 2

console.log(1 >= 2); //returns true if 1 is greater or equal to 2

console.log(1 <= 2); //returns true if 1 is less than or equalto 2

//Logical Operators

console.log(true && true); //true and true returns true
console.log(true || false); //true or false returns true
console.log(!false);        //not false returns true
//Unary Operators

//Ternary Operators
var num1 = 1;
var num2 = 2;
var z = num1 > num2?"its greater":"not big enough"; 
console.log(z);
//The typeof operator
console.log(typeof num1); //returns number

//Bitwise operators
//Bitwise operators work on the indivdual bits of data in the variables
//Bitwise operators work on the bits treating 0 as false and 1 as true

var variable = 5 & 1; // 0101 & 0001 result 0001        AND
variable = 5 | 1; // 0101 | 0001 result 0101            OR
variable = ~0101; //this inverts the bitsto 1010        NOT
variable = 5 ^ 1; //0101 ^ 0001 result 0100             XOR exclusive or
variable = 5 << 1;//bitwise left shift 1010 << 1 result 1010
variable = 5 >> 1;//bitwise right shift 0101 >> 1 result 0010
console.log(variable);
