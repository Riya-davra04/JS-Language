
let users = []


const Student = () => {
    document.getElementById('tbody').innerHTML = ''
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].name
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].rnumber
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].mail
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].age
        let td5 = document.createElement('td')
        td5.innerHTML = users[i].school

        tr.append(td1, td2, td3, td4, td5)
        document.getElementById('tbody').append(tr)
    }
}

const HandleData = (e) => {
    e.preventDefault();


    let name = document.getElementById('name').value;
    let rnumber = document.getElementById('rnumber').value;
    let mail = document.getElementById('mail').value;
    let age = document.getElementById('age').value;
    let school = document.getElementById('school').value;

    let user = {
        name: name,
        rnumber: rnumber,
        mail: mail,
        age: age,
        school: school
    }

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

    users.push(user);
    console.log(user)
    Student();
}

document.getElementById('stu').addEventListener("submit", HandleData)