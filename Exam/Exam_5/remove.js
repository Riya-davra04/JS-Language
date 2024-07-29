let array = [1, 2, 2, 3, 4, 4, 5]
let newArray=[]
let n= array.length;

array.sort((a, b) => a - b);

if (n > 0) {
    newArray[0] = array[0];
}

for (let i = 1; i < n; i++) {
    if (array[i] != newArray[newArray.length - 1]) {
        newArray[newArray.length] = array[i];
    }
}

console.log(newArray); 
