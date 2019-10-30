////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function range(num1, num2, step)
{
  if (step === -1)
    return [];
  if (step === undefined)
    {
      var step = 1;
    }
  var array = [];

    if (num1 > num2)
    {
      for (var i = num2; i <= num1; i += step)
      {
        array.push(i);
      }
      return array;
    }else if (num2 > num1)
    {
      for (var i = num1; i <= num2; i += step)
      {
        array.push(i)
      }
      return array;
    }else //they are equal
    {
      return [];
    }
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var sum = 0;
  if (array === undefined)
    return 0;
  else if (array.length === 0)
    return 0;
  else if (array.length > 0)
  {
    for (var i = 0; i < array.length; i++)
    {
      sum += array[i];
    }
    return sum;
  }
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i--)
  {
    reversed.push(array[i]);
  }
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
 var list = {};
 for (var i = array.length - 1; i >= 0; i--)
 {
   if (i === array.length - 1)
   {
     list = {value: array[i], rest: null};
   }else
   list = {value: array[i], rest: list};
 }

 return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
  {
    array.push(node.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(val, list) {
  //add value to the front of list
  var object = 
  {
    value: val, 
    rest: list
  };
     return object;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
    var counter = 0;
    var ret = undefined;
    for (var node = list; node; node = node.rest)
    {
      if (counter === num)
        ret = node.value;
      counter++;
    }
    return ret;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1, obj2) {
   
   //check for nested
    if (typeof obj1 == 'object' && obj1 !== null && obj1 !== undefined && typeof obj2 == 'object' && obj2 !== null && obj2 !== undefined)
    {
      //check if the object is an array
      if (Array.isArray(obj1) && Array.isArray(obj2))
      {
        if (obj1.length !== obj2.length)
        {
          return false;
        }
        for (var i = 0; i < obj1.length; i++)
        {
          if (obj1[i] !== obj2[i])
            return false;
        }
        //objects are both arrays
      }else if (Array.isArray(obj1) && !Array.isArray(obj2))
      {
        //only one is array
        return false;
      }else if (!Array.isArray(obj1) && Array.isArray(obj2))
      {
        //only one is array
        return false;
      }
      
      var obj1Keys = Object.keys(obj1);
      var obj2Keys = Object.keys(obj2);
      var obj1Vals = Object.values(obj1);
      var obj2Vals = Object.values(obj2);
      
      if (obj1Keys.length !== obj2Keys.length)
        return false;
      if (obj1Vals.length !== obj2Vals.length)
        return false;
      for (var i = 0; i < obj1Keys.length; i++)
      { 
        if (Array.isArray(obj1Vals[i]) && Array.isArray(obj2Vals[i]))
        { 
          if (obj1Vals[i].length !== obj2Vals[i].length)
            return false;
          if (obj1Keys[i].length !== obj2Keys[i].length)
            return false;
          for (var j = 0; j < obj1Vals[i].length; j++)
          {
             if (obj1Vals[i][j] !== obj2Vals[i][j])
              {
                return false;
              }
              if (obj1Keys[i][j] !== obj2Keys[i][j])
              {
                return false;
              }
          }
          return true;
        } 
        
        else if (typeof obj1Vals[i] === 'object')
        {
         //they are objects
          return deepEqual(obj1Vals[i], obj2Vals[i]);
        }
        if (obj1Keys[i] !== obj2Keys[i])
          return false;
        if (obj1Vals[i] !== obj2Vals[i])
          return false; 
          
      }
    }
    else //basic datatype as well as null and undefined
    {
      if (obj1 !== obj2)
        return false;
    }
    return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
