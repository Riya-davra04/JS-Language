const add = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if (!isNaN(num1)) {
        if (num1 && num2) {
            let result = Number(num1) + Number(num2);

            document.getElementById('result').innerHTML = `The result of addition is ${result}`
        } else {
            document.getElementById('result').innerHTML = `Please enter valid numbers`
        }
    } else {
        document.getElementById('result').innerHTML = `Please enter valid numbers`
    }


}

const sub = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let result = num1 - num2;

    document.getElementById('result').innerHTML = `The result of subtraction is ${result}`

}

const multiply = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let result = num1 * num2;

    document.getElementById('result').innerHTML = `The result of multiplication is ${result}`

}

const divide = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if (num2 == 0) {
        document.getElementById('result').innerHTML = `Cannot divide by zero`
    }
    else {
        let result = num1 / num2;

        document.getElementById('result').innerHTML = `The result of division is ${result}`

    }

}
