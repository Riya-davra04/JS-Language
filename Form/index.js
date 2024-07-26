const HandleData = (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let gender;
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    } else if (document.getElementById('other').checked) {
        gender = document.getElementById('other').value;
    }
    let hobby;
    if (document.getElementById('Reading').checked) {
        hobby = document.getElementById('Reading').value;
    } 
     if (document.getElementById('Traveling').checked) {
        hobby = document.getElementById('Traveling').value;
    } 
     if (document.getElementById('Drawing').checked) {
        hobby = document.getElementById('Drawing').value;
    }
    if(document.getElementById('Photography').checked) {
        hobby = document.getElementById('Photography').value;
    }
    let city = document.getElementById('city').value;

    let user ={
        name:name,
        number:number,
        email:email,
        gender:gender,
        hobby:hobby,
        city:city
    }
    let regexname = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    let regexnumber =  /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    let regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexname.test(name)) {
        alert('Please enter a valid name.');
        return;
    }

    if (!regexnumber.test(number)) {
        alert('Please enter a valid number.');
        return;
    }

    if (!regexemail.test(email)) {
        alert('Please enter a valid email.');
        return;
    }

    if (!gender) {
        alert('Please select a gender.');
        return;
    }
    
    if (!hobby) {
        alert('Please select at least one hobby.');
        return;
    }

    if (!city) {
        alert('Please select a city.');
        return;
    }

    alert('Form submitted successfully!');

    console.log(user);
   
}

document.getElementById('StudentData').addEventListener("submit", HandleData)