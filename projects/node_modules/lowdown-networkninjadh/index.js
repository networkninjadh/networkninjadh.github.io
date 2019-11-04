'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return the value that is passed into the function
 * 
 * @param  {any value} value: the value given 
 * @return {any value} value: the value to return 
 */
function identity(value)
{
    return value;
}

/**
 * typeOf: Designed to return a string value representing value's type
 * 
 * @param  {any variable} value: the value givin
 * @return {value} string: the string representing the value's type
 */
function typeOf(value)
{
    if (typeof value === 'object')
    {
        if (Array.isArray(value))
        {
            return 'array';
        }
        if (value === null)
        {
            return 'null';
        }
        return 'object';
    }else 
    {
        return typeof value;
    }
}
/**
 * first: Designed to return the first <number> of elements in the array
 * 
 * @param {array} value: an array
 * @param {number} value: a non negative integer number
 * 
 * @return {array} value: the array containing the first <number> elements in the array that was passed in
 **/
function first(array, number)
{
    var retArray = [];
   
   if (typeof number !== 'number')
         {
            return array[0];
         }
        if (number < 0)
        {
            return [];
        }
        if (number > array.length)
        {
            return array;
        }
        
    if (Array.isArray(array))
    {
        
        for (var i = 0; i < number; i++)
        {
            retArray.push(array[i]);
        }
        return retArray;
    }
    else
    {
        return [];
    }
    
}


/**
 * last: Designed to take an array and a number then function then returns an array
 * containing the last <number> elements in the array
 * 
 * @param {array} value: an array containing values
 * @param {number} value: a non negative integer number
 * 
 * @return {array} value: returns an array containing the last <number> elements in the array
 **/
function last(array, number)
{
    var retArray = [];
    
    if (!Array.isArray(array)) //return an empty array
    {
        return [];
    }
    if (typeof number !== 'number') //return last element
    {
        return array[array.length - 1];
    }
    if (number < 0)
    {
        return [];
    }
    if (number > array.length)
    {
        return array;
    }
    for (var i = array.length - number; i < array.length; i++) 
    {
        retArray.push(array[i]);
    }
    return retArray;
    
}

/**
 * indexOf: Designed to search an array for a value and then return the index of that 
 * value in the array
 * 
 * @param {array} value: array is an array of any values
 * @param {value} value: a value givin to search for in the array
 * 
 * @return {index, -1} returns the index within the array where value is found
 **/
function indexOf(array, value)
{

    for (var i = 0; i < array.length; i++)
    {
        if (array[i] === value)
        {
            return i;
        }
    }
    return -1;
}

/**
 * contains: Designed to search an array for the value and returns true or false depending on if the 
 * value is found in the array 
 * 
 * @param {array} value: any array that contains values
 * @param {value} value: the value in which to search the array for
 * 
 * @return {boolean} value: returns a boolean value that can determined by if the value is in the array
 * true if it is, false if it's not
 **/
function contains(array, value)
{
    return (array.includes(value) ? true : false);
}

/**
 * each: Designed to take a collection either an object or an array and run the func that is passed in 
 * on every value within the collection
 * 
 * @param {collection} value: this can be an object or an array
 * @param {func} value: this is a function value
 * 
 * @return {none}
 **/
function each(collection, func)
{
    if (Array.isArray(collection))
    {
     for (var i = 0; i < collection.length; i++)
     {
          func(collection[i], i, collection);
     }
    }else
    {
            for (var key in collection)
            {
                 func(collection[key], key, collection);
            }
        
    }
}

/**
 * unique: Designed to go through an array and remove all duplicates, it then returns the resulting array
 * 
 * @param {array} value: can be any array
 * 
 * @return {array} value: returns an array containing every value in array with the duplicates removed
 **/
function unique(array)
{
    var retArray = [];
    for (var i = 0; i < array.length; i++)
    {
        if (!retArray.includes(array[indexOf(array, array[i])]))
        {
            retArray.push(array[i]);
        }
    }
    return retArray;
}
/**
 * filter: Designed to filter all elements in an array based off a function that is passed in 
 * 
 * @param {array} value: can be any array
 * @param {func} value: can be any function
 * 
 * @return {array} returns the array containing the filtered elements from <array>
 **/
function filter(array, func)
{
    var retArray = [];
        each(array, function(ele, i, arr){
            if (func(ele, i, arr))
            {
                retArray.push(ele);
            }
        });
    return retArray;
    
}
/**
 * reject: Designed to take an array and a function and filter the elements in <array> using func
 * 
 * @param {array} value: can be any array
 * @param {func} value: can be any function
 * 
 * @return {array} returns a new array that is the filtered version of <array>
 **/
function reject(array, func)
{
    var retArray = [];
    var newArray = filter(array, func);
    for (var i = 0; i < array.length; i++)
    {
        if (!newArray.includes(array[i]))
        {
            retArray.push(array[i]);
        }
    }
    return retArray;

}

/**
 * partition: Designed to take an array and a function it then runs that function for every element in 
 * the array and seperates the values that pass and fail the test into two seperate arrays it then
 * takes those two arrays and push them onto another array and returns that array 
 * 
 * @param {array} value: can be any array
 * @param {func} value: can be any function
 * 
 * @return {array} returns an array made up of two sub arrays containing elements that have been partitioned
 **/
function partition(array, func)
{
 var array1 = [];
 var array2 = [];
 
 for (var i = 0; i < array.length; i++)
 {
     if (func(array[i], i, array) == true)
     {
         array1.push(array[i]);
     }else
     {
         array2.push(array[i]);
     }

 }
 
 var retArray = [];
 retArray.push(array1);
 retArray.push(array2);
 return retArray;
 
}

/**
 * map: Designed to take a collection and return an array containing the results of running <func> on 
 * every element within the collection
 * 
 * @param {collection} value: can be an array or an object
 * @param {func} value: can be any function
 * 
 * @return {array} returns an array containing the results of performing <func> on every element in the collection
 **/
function map(collection, func)
{
    var results = [];
    
    if (Array.isArray(collection) && collection !== null && collection !== undefined) //Array
    {
        for (var i = 0; i < collection.length; i++)
            results.push(func(collection[i], i, collection));
    }else if (collection !== undefined && collection !== null) //Object
    {
        for (var key in collection)
            results.push(func(collection[key], key, collection));
    }
    return results;
}

/**
 * pluck: Designed to return an array containing the value of every <property> for every element 
 * in <objArray> 
 * 
 * @param {objArray} value: an array of objects
 * @param {property} value: an object property
 * 
 * @return {an array} returns an array that contains the value of every property for every object
 **/
function pluck(objArray, property)
{
    return map(objArray, function(object, i, collection){
        return object[property];
    });
}

/**
 * every: Designed to take a collection and a function it then compares the values obtained from 
 * running <func> against all elmements in the collection it returns true if all elements pass
 * false if at least one element in the collection fails the test
 * 
 * @param {collection} value: can be an object or an array
 * @param {func} value: any function
 * 
 * @return {boolean} returns a boolean value representing whether or not every element
 * in <collection> passes the test in <func>
 **/
function every(collection, func)
{
    var results = [];
    if (func === undefined)
    {
        for (var i = 0; i < collection.length; i++)
        {
            if (collection[i] === undefined || collection[i] === null )
                return false;
        }
        return true;
    }
    
    if (Array.isArray(collection))
    {   for (var i = 0; i < collection.length; i++)
        {
            results.push(func(collection[i], i, collection) === true);
        }
    }
    else  //it is a normal object
    {   
        for (var key in collection)
        {
            results.push(func(collection[key], key, collection));
        }
    }
    //check to see if all values are true or false;
    for (var i = 0; i < results.length; i++)
    {
        if (results[i] === false)
        {
            return false;
        }
    }
    return true;
}

/**
 * some: Designed to take a collection and a function and return a boolean value of 
 * true if at least one element in the collection passes the test if no elements in 
 * the collection pass the test then the function will return false
 * 
 * @param {collection} value: can by any array or object
 * @param {func} value: can be any function
 * 
 * @return {boolean} returns true if at least one element in the collection passes the
 * <func> test otherwise it returns false
 **/
function some(collection, func)
{
    var results = [];
    if (func === undefined)
    {
        for (var i = 0; i < collection.length; i++)
        {
            if (collection[i])
            {
                return true;
            }
        }
        return false; 
    }
    if (Array.isArray(collection))
    {
              for (var i = 0; i < collection.length; i++)
              {
                  results.push(func(collection[i], i, collection));
              }
    }else //its an object
    {
        for (var key in collection)
        {
            results.push(func(collection[key], key, collection));
        }
    }
    //Loop through the array to return the appropriate results
    for (var i = 0; i < results.length; i++)
    {
        if (results[i] === true)
        {
            return true;
        }
    }
    return false;
}

/**
 * reduce: Designed to take an array a function and a seed it then runs <func> on the
 * entire array it then returns the result 
 * 
 * @param {array} value: any array with values
 * @param {func} value: any function
 * @param {seed} value: seed will be our start value
 * 
 * @return {number} 
 **/
function reduce(array, func, seed)
{
    var retValue;
   
   if (seed === undefined)
   {
       for (var i = 0; i < array.length; i++)
       {
           if (i === 0)
           {
               retValue = func(1, array[0], 0);
           }else
           {
               retValue = func(retValue, array[i], i);
           }
       }
       return retValue;
   }
   else //seed is defined
   {
       for (var i = 0; i < array.length; i++)
       {
           if (i === 0)
           {
               retValue = func(seed, array[0], 0);

           }else
           {
               retValue = func(retValue, array[i], i);
           }
       }
       return retValue;
   }
}

/**
 * extend: Designed to take a variable number of object arguments it then assigns the 
 * elements in every object to the first object and returns an object containing the 
 * properties of every object
 * 
 * @param {obj1} value: the first object
 * @param {obj2} value: the second object
 * @param {...obj3} value: array containing all other objects that are
 * passed in as a variable number of arguments
 * 
 * @return {object} returns an object that has the properties of every object
 * passed into the function
 **/
function extend(obj1, obj2, ...obj3)
{
     for (var key in obj2)
    {
        obj1[key] = obj2[key];
    }
    for (var i = 0; i < obj3.length; i++)
    {
        for (var key in obj3[i])
        {
            obj1[key] = obj3[i][key];
        }
    }
    return obj1;
}
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


