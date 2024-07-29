let arr = [1, 2, 2, 3, 2, 4, 5];
let target = 2;
let count = 0;
let n = arr.length;
for(let i=0 ; i<n ; i++)
{
    if(arr[i]==target)
    {
        count++
    }
}
console.log(count);