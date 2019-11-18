/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables. Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//Creating a variable using the let keyword
//variables created with let can be reasigned just like when using the var keyword
let variable = 100; //variables defined with let are block scoped and therefore cannot be changed outside of the scope that created them

//There are also other ways of storing information besides with a variable
//For example a constant is defined with the const keyword and cannot be modified after initialization
//constants defined with the const keyword are block scoped just like variables defined with lets
//Because constants are block scoped they are bound to the block in which they are created
const x = 10; //x will always be 10

const y = x; //const can be used for assignment but cannot change values itself 

//x = 20; this code would return an error saying that the value cannot be modified 

//Hoisting

//When javascript compiles all of the code, all variable declarations made using var 
//are pulled to the top of their respective scopes. This makes it possible to use a variable before it has been declared
//However only the declaration is moved to the top, not the value

//Example

console.log(myName);
var myName = "Damond Howard";
console.log(myName);

//the code above console.log(myName) will log undefined
//however the second console.log(myName) will print out the string "Damond Howard" 

//Hoisting allows us to use a variable before it has been declared

//Example

variable = 5; //assign 5 to variable

console.log(variable);

//var variable; //the variable declaration gets hoisted to the top of the current scope, which is the global scope 
