//push
let numbers = [1, 2, 3];
numbers.push(4);
console.log("Push : ");
console.log(numbers);

//pop
numbers.pop();
console.log("Pop : ");
console.log(numbers);

//length
console.log("Length :");
console.log(numbers.length);

//toString
console.log("ToString :");
console.log(numbers.toString());

//splice
let number = [1, 2, 3, 4, 5];
number.splice(2, 2, 6, 7);
console.log("Splice :");
console.log(number);

//slice
let n = [1, 2, 6, 7, 5];
let s = n.slice(1, 3);
console.log("Slice :");
console.log(s);

//sort
let numb = [3, 1, 4, 2];
numb.sort((a, b) => a - b);
console.log("Asc :");
console.log(numb);

numb.sort((a, b) => b - a);
console.log("Dsc :");
console.log(numb);

//shift()
number.shift();
console.log("Shift : ");
console.log(number);

//unshift()
number.unshift(1);
console.log("Unshift : ");
console.log(number)

//concat
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let con = numbers1.concat(numbers2);
console.log("Concat : ");
console.log(con);

//reverse
let num = [1, 2, 3];
num.reverse();
console.log("Reverse : ");
console.log(num); 
