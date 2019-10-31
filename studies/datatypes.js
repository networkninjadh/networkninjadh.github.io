/**
 * Datatypes:
 * 
 * Datatypes allow us to perform certain actions on a variable because every datatype can be 
 * used in different ways. This allows variables to be more specialized
 *
 * 0. Datatypes determine what actions you can perform on a particular variable
 *
 * 1. Data types determine how a variable will behave
 * 
 * 2. Once you determine the data type of a variable it is best to stick with the same type of data when storing values
 *    otherwise you could get some unintended results
 */
//if a variable has no datatype then it can be a truthy or a falsey value
//for example the vaules null NaN, and undefined have no type
var x = null; //no type
var y; //y = undefined because it hasn't been asigned a value and javascript only assigns a variable 
//a type once it is assigned a value

//datatype declarations a variable's datatype is determined when you assign it a value;
//Example:
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
Array.isArray(Array.prototype);  //this returns true because prototype has the datatype array

//Some operations that you can perform on arrays are
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

//concat() Merges two arrays and returns a new array
var array3 = array1.concat(array2);
console.log("If I merge " + array1 + " and " + array2 + " then I will get the array " + array3);


//copyWithin() Copies part of an array to another location in the same array and returns the modified array withought chaning its length
console.log("If I perform a copyWithin operation on array " + array1 + " from the frist to the secode element it will return " + array1.copyWithin(0, 3, 4));

//entries() returns a key value pair Array Iteration Object
console.log("Calling entries() on " + array + " returns " + array.entries());

//every() Checks if every element in an array pass a test in a testing function
//first we need to define a test function to use with the every() method
var ages = [32, 33, 16, 40, 18];
function checkAdult(age)
{
    return age >= 18;
}
console.log("In order to run the function for every value we pass the function into the every method() returning " + ages.every(checkAdult()));

//fill() fills the elements in an array with a static value
var fillArray = [];
console.log("fillArray before the fill operation is " + fillArray + " but after performing the fill(0) operation fill is " + fillArray.fill(0));

//filter() creates a new array with all the elements that pass the test according to a testing function

//find() returns the value of the first element 
console.log("If I perform a find() on " + fillArray + " I will get " + fillArray.find());

//findIndex() returns the index of the first element that passes a test according to a testing function
console.log("If I perform a findIndex() on " + fillArray + " I will get " + fillArray.findIndex());

//forEach() calls a function once for each array element

//from() creates an array from an object

//includes() determines whether an array includes a certain element

//indexOf() searches the array for an element and returns its first index

//isArray() determines whether the passed value is an array

//join() joins all elements of an array into a string
var joinArray = ["My", "name", "is", "Damond"];
console.log("If we perform a join operation on " + joinArray + " we will get " + joinArray.join(" ")); //by default they are all joined as one string seperated by commas but I can specify with the argument 
//the seperator that I would like to use

//keys() returns an Array Iteration Object that contains the keys of the original array
arrayIterationObject = array.keys();
console.log(arrayIterationObject);

//lastIndexOf() searches the array for an element starting at the end and returns the last index

//map() creates a new array with the results of calling a function for each array element 
const map1 = array.map(x => x * 2);
console.log(map1);

//pop() removes the last element from an array and returns that element 
console.log("Before pop() operation array is " + array);
array.pop();
console.log("After pop() operation array is " + array);

//push() adds on or more elements to the end of the array and returns the array's new length
console.log("Before push() operation array is " + array);
array.push(5);
console.log("After push() operation array is " + array);

//reduce() reduces the values of an array to a single value left to right
console.log("If I reduce the array " + array + " then I will get the array" + array.reduce());

//reduceRight() reduce the values of an array to a single value from right to left
console.log("If I reduceRight() the array " + array + " then I get " + array.reduceRight());

//reverse() reverses the elements of an array
console.log("Before reverse() operation array is " + array);
array.reverse();
console.log("After reverse() operation array is " + array);

//shift() removes the first element of an array and returns that element
console.log("Before shift() operation array is " + array);
array.shift();
console.log("After shift() operation array is " + array);

//slice() selects part of an array and returns the new array slice() takes 2 arguments that are a range to return of 
//the array if only one argument is provided then it returns every element in theh array starting at the index provided till the last elmeent
console.log("If I perform a slice() operation on" + array + "2 i get the array " + array.slice(2));
console.log("If I perform a slice() operation on" + array + " from 2 to 4 I get " + array.slice(2,4));

//some() checks if any of the lements in an array passes the test in a testing function

//sort() sorts the elemtns in an array
var sortArray = [3, 10, 4, 1, 2, 10, 24, 343, 0];
console.log("Before sorting the array we have " + sortArray + " but after performing the sort() operation we have " + sortArray.sort());

//splice() adds/removes elements from an array
console.log("If we splice() " + sortArray + " we will get the array " + sortArray.splice(0, 4));

//toString() converts the array to a string and returns the result
var string = sortArray.toString();
console.log("sortArray as a string " + string);

//unshift() adds new elements to the beginning of an array and returns the new length
console.log("We can use the unshift() method in order to add elements to the beginning of our array, for example after adding 5000 to our array using unshift we get " + sortArray.unshift(5000));

//values() returns an Array Iteration Object containing the values of the array
var arrayIterationObject = array.values();
console.log(arrayIterationObject);

//Another very important datatype in javascript is the object datatype

var object = {}; //this is a javasript object that is assigned the value of an object literal

//An object is made up of key value pairs we can add values to the object in two ways

//Dot notation
object.name = "Damond";

//Bracket notation
object["age"] = 26;

console.log(object);
/*
  our object now looks like this
  {
    name: "Damond",
    age:  26
  };
*/

//Just like arrays there are several operations that we can perform on objects in javascript 
