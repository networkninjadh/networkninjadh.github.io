// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lowdown-networkninjadh");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
{
   var count = 0;
   for (var i = 0; i < array.length; i++)
   {
     if (array[i].gender === 'male')
     {
       count++;
     }
   }
   return count;
};


var femaleCount = function(array) /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
{
  var count = 0;
   for (var i = 0; i < array.length; i++)
   {
     if (array[i].gender === 'female')
     {
       count++;
     }
   }
   return count;
};

var oldestCustomer = function(array)
{
    var age = 0;
    var name = '';
    for (var i = 0; i < array.length; i++)
	{
		if (array[i].age > age){
			age = array[i].age;
			name = array[i].name;
		}
	}
	return name;
};

var youngestCustomer = function(array)
{
   var age = 1000000;
   var name = '';
   for (var i = 0; i < array.length; i++)
   {
	   if (array[i].age < age){
	   	age = array[i].age;
		name = array[i].name;
	   }
   }
	return name;
};

function stringToNumber(string)
{ 
        var number = 0;
        var place = 1;
        var array = string.split("");
        for (var i = array.length - 1; i >= 0; i--)
        {
                if (i === array.length -1)
                {
                        number += 0.01 * array[i];
                }else if (i === array.length - 2)
                {
                        number += 0.1 * array[i];
                }
                else
                {
                        switch(array[i])
                        {
                                case "0": number += 0;
                                          place *= 10;
                                break;
                                case "1" : number += (place * 1);
                                           place *= 10;
                                break;
                                case "2" : number += (place * 2);
                                           place *= 10;
                                break;
                                case "3" : number += (place * 3);
                                           place *= 10;
                                break;
                                case "4" : number += (place * 4);
                                           place *= 10;
                                break;
                                case "5" : number += (place * 5);
                                           place *= 10;
                                break;
                                case "6" : number += (place * 6);
                                           place *= 10;
                                break;
                                case "7" : number += (place * 7);
                                           place *= 10;
                                break;
                                case "8" : number += (place * 8);
                                           place *= 10;
                                break;
                                case "9" : number += (place * 9);
                                           place *= 10;
                                break;
                                default: continue;
                        }
                }
        }
        return number;
}

var averageBalance = function(array)
{
    var average = 0;
    for (var i = 0; i < array.length; i++)
    {      
      average += stringToNumber(array[i].balance); //convert this string to a number each number has to be converted before I add them to the average
    }
    return average / array.length; 
};

var firstLetterCount = function(array, letter)
{
    var count = 0;
    for (var i = 0; i < array.length; i++)
    {
      if (array[i].name.charAt(0) === letter.toUpperCase() || array[i].name.charAt(0) === letter.toLowerCase())
      {
        count++;
      }
    }
    return count;
};

var friendFirstLetterCount = function(array, customer, letter) //array string char how many of <custormer>'s friends name starts with <letter>
{
  var count = 0;
  for (var i = 0; i < array.length; i++)
  {
    if (customer === array[i].name) //this is the right person now lets loop through there friends
    {
      //print theier friends
      for (var j = 0; j < array[i].friends.length; j++)
      {
        ///loop through friends and check their names 
        if (array[i].friends[j].name.charAt(0).toLowerCase() === letter.toLowerCase())
        {
          //everything checks out we can increment count
          count++;
        }
      }
    }
  }
  return count;
};

var friendsCount = function(array, name) //find everyone friends with name
{ 
  var friendsCountArray = [];
    for (var i = 0; i < array.length; i++)
    { 
        for (var j = 0; j < array[i].friends.length; j++)
        {
          if (name === array[i].friends[j].name)
          {
            friendsCountArray.push(array[i].name);
          }
        }
    }
    return friendsCountArray;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var returnTags = function(object)
{
  var tagsArray = [];
  var mostOccourances = 0;
  var tag = '';
  for (var key in object)
  {
    //find the element with the most then remove it from the list then find the next element with the momst etc...
    //push them to new array return it
    if (object[key] > mostOccourances)
    {
      mostOccourances = object[key];
    }
  }
  for (var key in object)
  {
    if (object[key] === mostOccourances)
    {
      tagsArray.push(key);
    }
  }
  return tagsArray;
}
var topThreeTags = function(array)
{
  var topCount = 0;
  var tagsCountPairs = {
  
  'Lorem':          0,
  'aliqua':         0,
  'amet':           0,
  'aute':           0,
  'cillum':         0,
  'commodo':        0,
  'cupidatat':      0,
  'do':             0,
  'dolore':         0,
  'ea':             0,
  'enim':           0,
  'esse':           0,
  'eu':             0,
  'excepteur':      0,
  'exercitation':   0,
  'fugiat':         0,
  'id':             0,
  'in':             0,
  'irure':          0,
  'labore':         0,
  'laborum':        0,
  'magna':          0,
  'minim':          0,
  'nisi':           0,
  'non':            0,
  'nulla':          0,
  'occaecat':       0,
  'pariatur':       0,
  'proident':       0,
  'sint':           0,
  'sit':            0,
  'sunt':           0,
  'velit':          0,
  'veniam':         0,
  'voluptate':      0 
  };   
var retArray = [];
for(var i = 0; i < array.length; i++)
{
  for (var j = 0; j < array[i].tags.length; j++)
  {
    tagsCountPairs[array[i].tags[j]]++; //works
  }
}
return returnTags(tagsCountPairs);
};

var genderCount = function(array)
{
    var male = 0;
    var female = 0;
    var nonBinary = 0;

    for (var i = 0; i < array.length;i++)
    {
      if (array[i].gender === 'male')
        male++;
      else if (array[i].gender === 'female')
        female++;
      else if (array[i].gender === "non-binary")
        nonBinary++;
    }

    var object = {};
    object.male = male;
    object.female = female;
    object["non-binary"] = nonBinary;
    return object;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
