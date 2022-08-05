// Create array between 1-99999
function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1
    return Array(len).fill().map((_, idx) => start + (idx * step))
  }
  let result = range(1, 99999);
  console.log(result);

// Create a function that identifies the ramp numbers
function rampNumber(len)
{
  let magicNumber = len.toString().split("").map(Number);
  let rampCount = 0;
  for (i=0; i<len; i++)
  {
    if (magicNumber[i] <= magicNumber[i-1])
    {
      return false;
    //   const removeNonRamp = result.splice(magicNumber)
    } else {
        rampCount += 1;
    }
  }
  console.log(rampCount)
  return rampCount;
//   if (magicNumber === rampNumber.map());
}
console.log(rampNumber(result));
// Create array with all identified ramp numbers




// Find sum of strings in array





/*/ with an input 123 we need an output of 65 that are less than 123. 
ramp numbers are numbers in ascending order





*/