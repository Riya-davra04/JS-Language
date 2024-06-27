const squ = () =>
    {
        let num = document.getElementById("num").value;

        let squa = num * num ;

        document.getElementById("result").innerHTML = `Square ${num} * ${num}= ${squa}`;
    }