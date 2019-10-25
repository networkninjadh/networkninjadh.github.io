
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
    for (var i = 1; i <= num; i++)
    {
      console.log("#".repeat(i));
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (var i = 1; i <= 15; i++)
  {
    if (i % 3 === 0 && i % 5 === 0) //divisible by 3 and 5
    {
      console.log("fizzbuzz");
    }else if (i % 3 === 0 && (i % 5 !== 0))
    {
      console.log("fizz");
    }else if(i % 5 === 0 && (i % 3  !== 0))
    {
      console.log("buzz");
    }else
    {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  var str = "";
  var solid = false;
  var solid2 = true;
  for (var i = 0; i < size; i++)
  {
    for (var j = 0; j < size; j++)
    {
      /*
     if (i % 2 === 0 || i === 0)
     {
       //we are on an even row or the first row
        if (solid)
        {
          str += "#";
          solid = false;
        }else
        {
          str += " ";
          solid = true;
        }
     }else
     {
       //we are in an odd row
       //invert the solid boolean value for odd rows
       
       if (solid2)
       {
         str += "#";
         solid2 = false;
       }else if (!solid)
       {
         str +=" ";
         solid2 = true;
       }
     }*/
     if ((i + j) % 2 === 0)
     {
       str += " ";
     }else
     {
       str += "#";
     }
    }
    str += "\n";
  }
  console.log(str);
  return str;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
