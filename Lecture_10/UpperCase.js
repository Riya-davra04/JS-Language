const  UpperCase = ()  => 
{
    let input = document.getElementById('input').value;
    let uppercaseText = input.toUpperCase();
    document.getElementById('result').innerHTML = uppercaseText;
}
