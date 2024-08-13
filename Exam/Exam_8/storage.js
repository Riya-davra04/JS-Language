
const Student = () => {
    document.getElementById('tbody').innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        if (key.startsWith('name_')) {
            let rnumber = key.split('_')[1];

            let name = localStorage.getItem('name_' + rnumber);
            let mail = localStorage.getItem('mail_' + rnumber);
            let age = localStorage.getItem('age_' + rnumber);
            let school = localStorage.getItem('school_' + rnumber);

            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.innerHTML = name;
            let td2 = document.createElement('td');
            td2.innerHTML = rnumber;
            let td3 = document.createElement('td');
            td3.innerHTML = mail;
            let td4 = document.createElement('td');
            td4.innerHTML = age;
            let td5 = document.createElement('td');
            td5.innerHTML = school;

            tr.append(td1, td2, td3, td4, td5);
            document.getElementById('tbody').append(tr);
        }
    }
}

const HandleData = (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let rnumber = document.getElementById('rnumber').value;
    let mail = document.getElementById('mail').value;
    let age = document.getElementById('age').value;
    let school = document.getElementById('school').value;

    if (name.length < 2) {
        alert("Please enter a valid name");
        return;
    }
    if (!rnumber) {
        alert("Please enter a valid Roll number");
        return;
    }
    if (!age) {
        alert("Please enter age");
        return;
    }
    if (!school) {
        alert("Please enter school");
        return;
    }

    localStorage.setItem('name_' + rnumber, name);
    localStorage.setItem('mail_' + rnumber, mail);
    localStorage.setItem('age_' + rnumber, age);
    localStorage.setItem('school_' + rnumber, school);

    Student();
}


document.getElementById('stu').addEventListener("submit", HandleData);

document.addEventListener('DOMContentLoaded', Student);
