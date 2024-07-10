let n = 10;
let evenSum = 0;
let oddSum = 0;

for(let i = 0 ; i <= 10 ; i++)
    {
        if(i%2==0)
            {
                evenSum+=i;
            }
            else
            {
                oddSum+=i;
            }
    }

    if(evenSum>oddSum)
        {
            console.log(evenSum-oddSum);
        }
        else
        {
            console.log(oddSum-evenSum);
        }