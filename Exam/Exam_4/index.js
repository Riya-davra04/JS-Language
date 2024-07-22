
let users = []

const Delete = (index) =>
    {
        users.splice(index,1);
        Student();
        
    };
    
const Student = () => {
    document.getElementById('tbody').innerHTML = ''
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].name
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].grid
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].course
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].number
        let td5 = document.createElement('td')
        td5.innerHTML = users[i].fees
        let td6 = document.createElement('td')
        td6.innerHTML = "remove";
        td6.addEventListener("click", () => Delete(i));


        tr.append(td1, td2, td3, td4, td5, td6)
        document.getElementById('tbody').append(tr)
    }
}

const Sales = () => {
    document.getElementById('body').innerHTML = '';

    let courseData = {};

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let fees = user.fees;
        let feeAmount = "";
        for (let j = 0; j < fees.length; j++) {
            if (!isNaN(fees[j]) && fees[j] !== ' ') {
                feeAmount += fees[j];
            }
        }
        if (!courseData[user.course]) {
            courseData[user.course] = { count: 0, totalFees: 0 };
        }
        courseData[user.course].count++;
        courseData[user.course].totalFees += Number(feeAmount);
    }

    for (let course in courseData) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = course;
        let td2 = document.createElement('td');
        td2.innerHTML = courseData[course].count;
        let td3 = document.createElement('td');
        td3.innerHTML = courseData[course].totalFees;

        tr.append(td1, td2, td3);
        document.getElementById('body').append(tr);
    }
}

const HandleData = (e) => {
    e.preventDefault();


    let name = document.getElementById('name').value;
    let grid = document.getElementById('grid').value;
    let course = document.getElementById('course').value;
    let number = document.getElementById('number').value;
    let fees = document.getElementById('fees').value;

    let user = {
        name: name,
        grid: grid,
        course: course,
        number: number,
        fees: fees
    }

    if (name.length < 2) {
        alert("Please enter a valid name");
        return;
    }
    if (number.length != 10) {
        alert("Please enter a valid phone number");
        return;
    }
    if (grid.length != 4) {
        alert("Please enter a valid GR _ID");
        return;
    }
    if (course.length <= 0) {
        alert("Please enter a valid Course");
        return;
    }
    if (fees.length <= 0) {
        alert("Please enter a valid Fees");
        return;
    }

    users.push(user);
    console.log(user)
    Student();
}

document.getElementById('userData').addEventListener("submit", HandleData)