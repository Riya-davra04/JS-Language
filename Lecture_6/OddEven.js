const check = () =>
    {
        let NUM = document.getElementById('num').value;

        if(NUM%2==0)
            {
                document.getElementById("result").innerHTML="EVEN";
            }
            else
            {
                 document.getElementById("result").innerHTML="ODD";
            }
    }