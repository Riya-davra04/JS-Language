let arr = [1, 2, 3, 4, 5];
let positions = 2;
let temporaryArray = [];

let effectiveNumber = positions % arr.length;

let end = arr.slice(arr.length - effectiveNumber);

let start = arr.slice(arr.length - effectiveNumber);

temporaryArray = end.concat(start);
console.log(temporaryArray);