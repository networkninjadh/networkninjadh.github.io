/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = "Cat";
animal["name"] = "Sawyer the Cat";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = "meow";
noises.push("purr");
noises.unshift("licking sounds");
noises[noises.length];
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);

/////////////////////////////////
/////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises;
animal.noises.push("eating");
animal.noises.push("running");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"]
};
animals.push(duck);
console.log(animals);

var fish = {
  species: "cichlid",
  name: "Blue",
  noises: ["gulp", "whoosh"]
}

animals.push(fish);
console.log(animals.length);
console.log(animals);

var horse = {
  species: "horse",
  name: "Danial",
  noises: ["neigh", "trotting"]
};

animals.push(horse);
console.log(animals.length);
console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I am going use an Array to hold the **list** of friends
//This is because I want to be able to keep track of an animals list of friends using the indexes 
//that are provided by arrays

var friends = [];

function getRandom(animals_array)
{
  console.log(animals_array);
  var min = Math.ceil(0);
  var max = Math.floor(animals_array.length - 1);
  return animals_array[Math.floor(Math.random() * (max - min + 1) + min)];
}


friends.push((getRandom(animals)).name);
console.log(friends);

animals[0].friends = friends;

console.log(animals[0]);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
