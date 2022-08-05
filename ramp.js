console.log(`Find the number of ramp numbers that are less than the number 99999`)

function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1
    return Array(len).fill(end - start).map((_, idx) => start + (idx * step))
};
const result = range(1, 99999);
console.log(result)

console.log(`Create a function that identifies ramp numbers and loops through the entire object`)

function rampNumber(len) {
    let magicNumber = len.toString().split("").map(Number);
    let rampCount = 0;
    for (i = 0; i < len; i++) {
        if (magicNumber[i] > magicNumber[i - 1]) {
            return false;
        } else {
            rampCount += 1;
        }
    }
console.log(rampCount)
    return rampCount;
}

console.log(rampNumber(99999))

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





