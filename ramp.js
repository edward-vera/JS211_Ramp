
function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1
    console.log(`len`, len);
    const result = Array(len).fill(end - start).map((_, idx) => start + (idx * step));
    console.log('result:', result);


    const endResult = [];
    for (let i = 0; i < result.length; i++) {
        // console.log('u:', result[i]);
        let number =  result[i].toString()
        for (let j = 0; j < number.length; j++) {
            if (i === number[j].length-1) {
                // console.log("I'm the last element");

                if (number[j] >=  number[j - 1]) {
                    console.log(`J Last neighbor number`, number[j]);
                    endResult.push(number[j])
                }
            } else {
                if (number[j] <= number[j + 1]) {
                    console.log(`J neighbor numbers`, number[j], number[j + 1]);
                    endResult.push(number[j])
                }
            }
        }
    }
    console.log(`endResult:`, endResult);



    return result;
};

function rampNumber(number) {
    let magicNumber = number.toString().split("").map(Number);
    console.log(`len 2nd`, number)
    console.log(`magicNumber`, magicNumber);
    const resultArr = [];
    if (number <= 99999){
        for (let i = 0; i <= magicNumber.length; i++) {
            if (i === magicNumber.length-1) {
                // console.log("I'm the last element");
                if (magicNumber[i] >= magicNumber[i - 1]) {
                    console.log(`Last neighbor number`, magicNumber[i]);
                    resultArr.push(magicNumber[i])
                }
            } else {
                if (magicNumber[i] <= magicNumber[i + 1]) {
                    console.log(`neighbor numbers`, magicNumber[i], magicNumber[i + 1]);
                    resultArr.push(magicNumber[i])
                }
            }
        }
    }
    console.log(`resultArr`, resultArr);
    if (resultArr.length === magicNumber.length){
        range(1, number);
    } else {
        return false;
    }
}

console.log(rampNumber(12))

console.log(`Remove non-Ramp numbers from all identified ramp numbers`)

// let newArray = result.filter(value, Number){
//
// }

// 1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19, 22,23, (20)
// 24, 25, 26, 27, 28, 29, 33, 34, 35, 36, 37, 38, 39, (13)
// 44, 45, 46, 47, 48, 49, 55, 56, 57, 58, 59, 66, 67, 68, 69, 77, 78, (17)
// 79, 88, 89, 99, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123    (15)









// console.log(`Create a new array array with all identified ramp numbers`)

// let ramp = [result]
// let output = newArray();
// ramp.forEach(function([], i){
//     output[i] =item;
// });
//
// console.log(output)





