let arr=[3, 7, 1, 9, 2]
let max = arr[0]
let n = arr.length;
for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);