let arr=[3, 7, 1, 9, 2]
let min = arr[0]
let n = arr.length;
for (let i = 0; i < n; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);