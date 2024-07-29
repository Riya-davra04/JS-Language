let arr = [1, 2, 3] 
let arr2 = [4, 5, 6]
let merge= []
let n= arr.length;
for(let i=0 ;i<n;i++)
{
    merge[merge.length]=arr[i];
}
for(let i=0 ;i <arr2.length;i++)
{
    
    merge[merge.length]=arr2[i];
}
console.log(merge);
