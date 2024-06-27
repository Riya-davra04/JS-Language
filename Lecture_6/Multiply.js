const multi = () =>
    {
        let num =document.getElementById('num').value;

        let mul = num *2;

        document.getElementById('result').innerHTML = `${num} * 2 = ${mul}`
    }