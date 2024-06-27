const Wood = () => {
    let Num = document.getElementById("num").value;

    if (Num % 3 == 0) {
        document.getElementById("result").innerHTML = "YES";
    }
    else {
        document.getElementById("result").innerHTML = "NO";
    }

}