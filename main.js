// // // Create array between 1-99999
// function range(start, end, step = 1) {
//     const len = Math.floor((end - start) / step) + 1
//     return Array(len).fill().map((_, idx) => start + (idx * step))
//   }
//   let result = range(1, 99999);
//   console.log(result);

// // Create a function that identifies the ramp numbers
// // rampyNumb = []
// function rampNumber(len)
// {
//   let magicNumber = len.toString().split("").map(Number);
//   for (i=0; i<magicNumber.length; i++)
//   {
//     if (magicNumber[i] < magicNumber[i-1])
//     {
//       return false;
//     }
//         return true;
//     }
//     for (i=0; i<result - i; i++){
//         if(rampNumber(result)){
//             rampNumber.push(result[i])
//         }
//     }
//   }
// console.log(rampyNumb);

// const answers = result.filter(rampNumber === false);

// console.log(answers)
// Create array with all identified ramp numbers



// Find sum of strings in array





/*/ with an input 123 we need an output of 65 that are less than 123. 
ramp numbers are numbers in





*/



// This code creates the array
function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1
    return Array(len).fill().map((_, idx) => start + (idx * step))
  }
  let result = range(0, 99999);
  console.log(result);

  const resultStr = result.map(String);
//   console.log(resultStr);


// ##Lemme know if this doesn't work lol 
// added array of strings 1-100 to test
// arrOfNumbs=['1',   '2',  '3',  '4',  '5',  '6',  '7',  '8',  '9',
// '10',  '11', '12', '13', '14', '15', '16', '17', '18',
// '19',  '20', '21', '22', '23', '24', '25', '26', '27',
// '28',  '29', '30', '31', '32', '33', '34', '35', '36',
// '37',  '38', '39', '40', '41', '42', '43', '44', '45',
// '46',  '47', '48', '49', '50', '51', '52', '53', '54',
// '55',  '56', '57', '58', '59', '60', '61', '62', '63',
// '64',  '65', '66', '67', '68', '69', '70', '71', '72',
// '73',  '74', '75', '76', '77', '78', '79', '80', '81',
// '82',  '83', '84', '85', '86', '87', '88', '89', '90',
// '91',  '92', '93', '94', '95', '96', '97', '98', '99',
// '100']
rampNumbs = []
function is_it_rampy(num) {
  for (let i = 0, len = num.length; i < len; i++) {
    if (num[i] < num[i - 1]) {
      return false;
    }
  }
  return true;
}
for (i = 0; i < resultStr.length - 1; i++){
  if (is_it_rampy(resultStr[i])){
    rampNumbs.push(resultStr[i])
  }
}
console.log(rampNumbs)


let len= rampNumbs.length;  //Now arr.length returns 5.Basically, len=5.
console.log(len); //gives 5
console.log(rampNumbs.length); //also gives 5