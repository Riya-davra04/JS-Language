let array = [1, 2, 2, 3, 4, 4, 5];
let newArray = [];

for (let i = 0; i < array.length; i++) {
    let Duplicate = false;
    for (let j = 0; j < newArray.length; j++) {
        if (array[i] === newArray[j]) {
            Duplicate = true;
          
        }
    }
    if (!Duplicate) {
        newArray.push(array[i]);
    }
}

console.log(newArray);