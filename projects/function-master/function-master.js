//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var array = [];
    for (var key in object)
    {
        array.push(object[key]);
    }
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var str = "";
    for (var key in object)
    {
        str += key;
        
        str += " ";
    }
    str.r
    return str.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var str = "";
    for (var key in object)
    {   if (typeof object[key] === 'string' && typeof object[key] !== 'object')
        {
            str += object[key];
            str += " ";
        }
    }
    return str.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection))
    {
        return 'array';
    }else
        return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    str1 = string.charAt(0);
    str1 = str1.toUpperCase();
    for (var i = 1; i < string.length; i++)
    {
        str1 += string[i];
    }
    return str1;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var array = string.split(" ");
    var tmp_str = "";
    var new_array = [];
    for (var i = 0; i < array.length; i++)
    {   
        tmp_str = array[i].charAt(0).toUpperCase();
        for (var j = 1; j < array[i].length; j++)
        {
            tmp_str += array[i][j];
        }
        new_array.push(tmp_str);
   }
    console.log(array);
    return new_array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    if (object.name !== undefined)
    return "Welcome " + object.name.substring(0,1).toUpperCase() + object.name.substring(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    if (object.name !== undefined && object.species !== undefined)
    {
        return object.name.substring(0,1).toUpperCase() + object.name.substring(1) + " is a " + object.species.substring(0,1).toUpperCase() + object.species.substring(1)
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises === undefined )
    {
        return "there are no noises";

    }else if (object.noises.length < 1)
    {
        return "there are no noises";
    }else
        return object.noises.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //split the string into an array
    var str_array = string.split(" ");
    //loop through the array
    for (var i = 0; i < str_array.length; i++)
    {
        if (str_array[i] === word)
        {
            return true;
        }
    }
    return false;
    //if the word is in the arry return true
    //if we get to the end of the loop return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
     object.friends.push(name);
     return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.friends !== undefined)
    {
        for (var i = 0; i < object.friends.length; i++)
        {
            if (object.friends[i] === name)
            {
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//Take a name and a list of people and return a list of all the names that it is not friends with
    var newArray = [];
    for (var i = 0; i < array.length; i++)
    {
     if (isFriend(name, array[i]))
     {
         console.log("they are friends");
     }else if (name === array[i].name)
     {
         console.log("they are the same person");
     }else
     {
         console.log("they are not friends add");
         newArray.push(array[i].name);
     }
    }
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Ulengthpdate Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//var counter__ = 1;
function updateObject(object, key, value) {
    
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++)
    {
        for (var key in object)
        {
            if (key === array[i])
            {
                delete object[key];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //return the array with all duplicates removed
    var new_array = [...new Set(array)];
    return new_array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}