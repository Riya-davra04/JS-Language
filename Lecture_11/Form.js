const HandleData = (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = {
        username: username,
        number: number,
        email: email,
        password: password
    }

    if (username.length < 2) {
        alert("Please enter a valid name");
        return;
    }
    if (number.length != 10) {
        alert("Please enter a valid phone number");
        return;
    }
    if (password.length < 6) {
        alert("Please enter a valid password");
        return;
    }

    console.log(user);
}

document.getElementById('userData').addEventListener("submit", HandleData)