
let users = []


const handleData = (event) =>
{
    event.preventDefault();

    let username = document.getElementById('username').value
    let number = document.getElementById('number').value
    let email = document.getElementById('email').value
    let salary = document.getElementById('salary').value

    const user = {
        username : username,
        number : number,
        email : email,
        salary : salary,
    }

    users.push(user);
    console.log(user)
}

document.getElementById('userData').addEventListener("submit",handleData)