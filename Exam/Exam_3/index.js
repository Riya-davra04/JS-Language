const Emp = () =>
{
    document.getElementById('tbody').innerHTML = ''

    for(let i=0 ; i<users.length ; i++)
    {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML=i+1;
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].empname
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].email
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].dept
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].expyear
        let td5 = document.createElement('td')
        if (users[i].expyear >= 0 && users[i].expyear <= 5)
         {
            td5.innerHTML = 'jun';
        } 
        else 
        {
            td5.innerHTML = 'sen'; 
        }
        let td6 = document.createElement('td')
        td6.innerHTML = users[i].salary


        tr.append(td,td1,td2,td3,td4,td5,td6)
        document.getElementById('tbody').append(tr)
    }
}

let users = []


const handleEmpData = (event) =>
{
    event.preventDefault();

    let empname = document.getElementById('empname').value
    let email = document.getElementById('email').value
    let dept = document.getElementById('dept').value
    let expyear = document.getElementById('expyear').value
    let salary = document.getElementById('salary').value

    const user = {
        empname : empname,
        email : email,
        dept : dept,
        expyear : expyear,
        salary : salary,
    }

    users.push(user);
    console.log(user)
    Emp();
}

document.getElementById('userData').addEventListener("submit",handleEmpData)
