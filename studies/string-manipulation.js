/**
 * String Manipulation - strings can be manipulated in several ways
 * Strings are used to represent human readable data in a program
 */

//string manipulation with operators
var myName = ''; //strings can be asigned to an empty string
myName = "Damond Howard"; //strings can assigned values in quotes '' or "" work
var message = "My name is " + myName;
console.log(message);
//string manipulation with string methods

console.log(message.length); //length is probably one of the most important string member functions

//Strings can also be manipulated with the += operator
//Example: 
myName += " the great!";
console.log(myName);
//some useful methods for manipulating strings

console.log(message.charAt(0)); //prints the firsst char in the string message

//charCodeAt()	Returns the Unicode of the character at the specified index
console.log(message.charCodeAt(0)); //prints the unicode of the first char in the message string

//concat()	Joins two or more strings, and returns a new joined strings
console.log(message.concat(myName));

//endsWith()	Checks whether a string ends with specified string/characters
if (myName.endsWith("Howard"))
{
    console.log("Of course my last name is Howard!");
}

//fromCharCode()	Converts Unicode values to characters
console.log(String.fromCharCode("U+0020"));
//includes()	Checks whether a string contains the specified string/characters

if (message.includes("name"))
{
    console.log(message + " includes name ");
}

//indexOf()	Returns the position of the first found occurrence of a specified value in a string
console.log(message.indexOf("m")); //prints the index of the first occurance of "m" in the message string

//lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
console.log(message.lastIndexOf("s")); //prints the index of the last occurance of "s" in message

//match()	Searches a string for a match against a regular expression, and returns the matches
console.log(message.match("/How/"));

//repeat()	Returns a new string with a specified number of copies of an existing string
var str = "A";
console.log(str.repeat(6)); //Prints A 6 times as a single string

//replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
var str2 = "ABABABABAB,ABABABABWABABA,BABABABABAB";
console.log(str2.replace("A", "B")); //replaces the first "A" with "B"

//search()	Searches a string for a specified value, or regular expression, and returns the position of the match
console.log(str.search("W")); //prints the index of "W" in str2

//slice()	Extracts a part of a string and returns a new string
console.log(str2.slice(5, 10)); //prints a string that is equal to the values in str2 from index 5 to 10

//split()	Splits a string into an array of substrings
console.log(str2.split(",",10)); //returns an array of three strings 

//startsWith()	Checks whether a string begins with specified characters
if (str.startsWith("A"))
{
    console.log("True"); //prints true to the console if the string starts with "A"
}
else
    console.log("False"); //Else false is printed to the console
    
//substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
console.log(str2.substr(5, 5)); //prints the substring starting at index 5 and stops after it has taken 5 chars

//substring()	Extracts the characters from a string, between two specified indices
console.log(str2.substr(5, 10)); //prints the substring starting at index 5 and ends at index 10

//toLowerCase()	Converts a string to lowercase letters
console.log(message.toLowerCase()); //converts all chars in message to lowercase and prints the resulting string

//toString()	Returns the value of a String object
console.log(message.toString()); //prints out theh string

//toUpperCase()	Converts a string to uppercase letters
console.log(message.toUpperCase()); //converts every element in the message string to uppercase and prints the new string

//trim()	Removes whitespace from both ends of a string
var string = "         my name          is Damond          a  ";
console.log(string.trim()); //prints the string with the whitespace removed from both ends

//valueOf()	Returns the primitive value of a String object
console.log(message.valueOf()); 