//this will take all of these arguments and put them into a single argument the ...
function sumAll(...arr) {
return arr.reduce((prev,next) => prev + next);
}

const sum = sumAll([1,2,3,4,5,6]);

console.log(sum)