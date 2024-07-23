
let users = []

const Delete = (index) => {
    users.splice(index, 1);
    Student();
    Sales()
};

const FeeAmount = (course) => {
    if (course == "DataScience") {
        return 75000;
    } else if (course == "AI") {
        return 60000;
    } else if (course == "CyberSecurity") {
        return 45000;
    } else if (course == "WebDevloper") {
        return 105000;
    } else {
        return 0;
    }
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

    let dataScienceCount = 0;
    let aiCount = 0;
    let cyberSecurityCount = 0;
    let webDeveloperCount = 0;
    let dataScienceTotalFees = 0;
    let aiTotalFees = 0;
    let cyberSecurityTotalFees = 0;
    let webDeveloperTotalFees = 0;

   
    for (let i = 0; i < users.length; i++) {
        let course = users[i].course;
        let fee = FeeAmount(course);

        if (course == "DataScience") {
            dataScienceCount++;
            dataScienceTotalFees += fee;
        } else if (course == "AI") {
            aiCount++;
            aiTotalFees += fee;
        } else if (course == "CyberSecurity") {
            cyberSecurityCount++;
            cyberSecurityTotalFees += fee;
        } else if (course == "WebDevloper") {
            webDeveloperCount++;
            webDeveloperTotalFees += fee;
        }
    }
   
    let tr1 = document.createElement('tr');
    let td1_1 = document.createElement('td');
    td1_1.innerHTML = "DataScience";
    let td2_1 = document.createElement('td');
    td2_1.innerHTML = dataScienceCount;
    let td3_1 = document.createElement('td');
    td3_1.innerHTML = dataScienceTotalFees;
    tr1.append(td1_1, td2_1, td3_1);
    body.append(tr1);


    let tr2 = document.createElement('tr');
    let td1_2 = document.createElement('td');
    td1_2.innerHTML = "AI";
    let td2_2 = document.createElement('td');
    td2_2.innerHTML = aiCount;
    let td3_2 = document.createElement('td');
    td3_2.innerHTML = aiTotalFees;
    tr2.append(td1_2, td2_2, td3_2);
    body.append(tr2);

  
    let tr3 = document.createElement('tr');
    let td1_3 = document.createElement('td');
    td1_3.innerHTML = "CyberSecurity";
    let td2_3 = document.createElement('td');
    td2_3.innerHTML = cyberSecurityCount;
    let td3_3 = document.createElement('td');
    td3_3.innerHTML = cyberSecurityTotalFees;
    tr3.append(td1_3, td2_3, td3_3);
    body.append(tr3);

 
    let tr4 = document.createElement('tr');
    let td1_4 = document.createElement('td');
    td1_4.innerHTML = "WebDevloper";
    let td2_4 = document.createElement('td');
    td2_4.innerHTML = webDeveloperCount;
    let td3_4 = document.createElement('td');
    td3_4.innerHTML = webDeveloperTotalFees;
    tr4.append(td1_4, td2_4, td3_4);
    body.append(tr4);
};

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
        alert("Please select a Course");
        return;
    }
    if (fees.length <= 0) {
        alert("Please select CourseFees");
        return;
    }

    users.push(user);
    console.log(user)
    Student();
    Sales();
}

document.getElementById('userData').addEventListener("submit", HandleData)