// For-loop functions

function positiveIntSum(limit){
    let sum = 0
    for(let i = 1; i <= limit; i ++){
        sum = sum + i;
    }
    return sum;
}
function additionPatternSum(start, diff, limit){
    let sum = start
    for(let k = start ; k <= limit ; k = k++){
        sum = sum + diff*k
return diff
 }
}
// While-loop function

function multiplicationPatternSum(factor, max, start){
let sum = start;
let j = 1; 
    while (j <= max){
    sum = sum + factor * j;
    j = factor * j;
return j
    }
}



//Later copy paste the checking code below here.

console.log("question 1: "+ positiveIntSum(1500));
console.log("question 2: "+ positiveIntSum(2000000));
console.log("question 3: "+ additionPatternSum(-80,60,50));
console.log("question 4: "+ additionPatternSum(4,8,50000));
console.log("question 5: "+ multiplicationPatternSum());
console.log("question 6: "+ multiplicationPatternSum());
