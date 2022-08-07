// This code creates the array
function range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1
    return Array(len).fill().map((_, idx) => start + (idx * step))
}
let result = range(0, 99999);
console.log(result);

const resultStr = result.map(String);

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




