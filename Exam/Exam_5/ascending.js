let arr =[3,2,1,4,5]

let asc = arr.slice().sort((a, b) => a - b);

let sort = arr.toString() === asc.toString();

console.log(asc);
console.log(sort);