let arr =[3,2,1,4,5]

let asc = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    asc = false;
  }
}
console.log(asc);