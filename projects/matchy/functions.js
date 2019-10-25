/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search = function(animals, name)
{
    //looks through the animal array and returns an object if an animal with that name exists
    for (var i = 0;i < animals.length; i++)
    {
        if (animals[i].name === name)
            {
                return animals[i];
            }
    }
    return null;
};


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var replace = function(animals, name, replacement)
{
  for (var i = 0; i < animals.length; i++)
  {
        if (animals[i].name === name)
        {
            animals[i] = replacement;
        }
  }
 
};


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var remove = function(animals, name)
{
    for (var i = 0; i < animals.length; i++) //an animal with the name exists
    {
       if (animals[i].name === name)
       {
           animals.splice(i,1);
       }
    }
};

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var add = function(animals, animal)
{
   if (search(animals, animal.name) === null)
   {
       animals.push(animal);
   }
};


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
