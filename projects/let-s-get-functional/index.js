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

var maleCount = function(array) 
{
    var malesArray = _.filter(array, function(customerObj, i, array){
        if (customerObj.gender === 'male')
            return true;
        else
            return false;
    });
    console.log(malesArray.length);
    return malesArray.length;
};


var femaleCount = function(array)
{
    var femaleCount = _.reduce(array, function(retVal, elem, i){
        
    });
};

var oldestCustomer = function()
{
    
};

var youngestCustomer = function()
{
    
};

var averageBalance = function()
{
    
};

var firstLetterCount = function()
{
    
};

var friendFirstLetterCount = function()
{
    
};

var friendsCount = function()
{
    
};

var topThreeTags = function()
{
    
};

var genderCount = function()
{
    
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
