const Mul=() =>
    {
        let a = document.getElementById('a').value;
        let b = document.getElementById('b').value;
        let c = document.getElementById('c').value;
        let d = document.getElementById('d').value;
        let e = document.getElementById('e').value;

        let Mul = a*b*c*d*e;

        document.getElementById('result').innerHTML=`Multiplication of ${a} * ${b} * ${c} * ${d} * ${e} = ${Mul}`;
    }