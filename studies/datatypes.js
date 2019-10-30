/**
 * Datatypes:
 * 
 * 0. Datatypes determine what actions you can perform on a variable
 *
 * 1. Determine a variable's behavior 
 * 
 * 2. Can contain any type of data
 */

//datatype declarations

var num = 1; //the variable num is a number datatype
//some operations that you can perform on numbers are
num +=1; //add 1 to the var num
num *=2; //multiply num by 2
num -=1; //subtract 1 from num
//num /=1; //divide num by 1 
var num2 = 1.555; //the variable num2 is a floating point number
console.log(num2);

//In javascript the number type represents both integers and floating point numbers

var word = "Hello"; //the variable word has a string datatype
//some operatiions that you can perform on strings are
console.log(word);
var bool = true; //the variable bool represents a boolean datatype
console.log(bool);
//booleans variables can either be true or false
//boolean operators
var hasNoValue = null; //the hasNoValue variable is of the datatype null
console.log(hasNoValue);
//null is a special value that doesn't belong to any of the other datatypes

var x;
console.log(x); //this will print out undefined which means that the variable
//x does not have a datatype

var array = [1, 2, 3, 4, 5]; // the array variable is of the array type
//an array is a list datatype that allows you to store multiple values that are stored 
//in sequence starting from 0

//array properties

//length sets or returns the number of elements in an array
console.log(array.length); //prints the length of the array array to the console

//prototype allows you to add new properties and methods to an Array Object

//Some operations that you can perform on arrays are

//concat() Merges two arrays and returns a new array
//copyWithin() Copies part of an array to another location in the same array and returns it
//entries() returns a key value pair Array Iteration Object
//every() Checks if every element in an array pass a test in a testing function
//fill() fills the elements in an array with a static value
//filter() creates a new array with all the elements that pass the test according to a testing function
//find() returns the value of the first element 
//findIndex() returns the index of the first element that passes a test according to a testing function
//forEach() calls a function once for each array element
//from() creates an array from an object
//includes() determines whether an array includes a certain element
//indexOf() searches the array for an element and returns its first index
//isArray() determines whether the passed value is an array
//join() joins all elements of an array into a string
//keys() returns an Array Iteration Object that contains the keys of the original array
//lastIndexOf() searches the array for an element starting at the end and returns the last index
//map() creates a new array with the results of calling a function for each array element 
//pop() removes the last element from an array and returns that element 
//push() adds on or more elements to the end of the array and returns the array's new length
//reduce() reduces the values of an array to a single value left to right
//reduceRight() reduce the values of an array to a single value from right to left
//reverse() reverses the elements of an array
//shift() removes the first element of an array and returns that element
//slice() selects part of an array and returns the new array
//some() checks if any of the lements in aan array passes the test in a testing function
//sort() sorts the elemtns in an array
//splice() adds/removes elements from an array
//toString() converts the array to a string and returns the result
//unshift() adds new elements to the beginning of an array and returns the new length
//values() returns an Array Iteration Object containing the values of the array

//functions 
