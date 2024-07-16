let users = []

const Delete = (index) =>
{
    users.splice(index,1);
    uimaker();
};

const AllRemove =() =>
{
    users = [];
    uimaker();
};
const uimaker = () => {
    document.getElementById('tbody').innerHTML = ''
    let totalsalary = 0;
    for (let i =0 ; i<users.length ; i++)
    {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].username;
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].number;
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].email;
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].salary;
        totalsalary += parseFloat(users[i].salary);
        let td5 =document.createElement('td')
        td5.innerHTML = "remove";
        td5.addEventListener("click",() => Delete(i));
        // let td6 = document.createElement('td')
        if(i==0)
        {
            td5.innerHTML = "Delete All";
            td5.addEventListener("click", AllRemove);
        }
       
        tr.append(td1,td2,td3,td4,td5)
        document.getElementById('tbody').append(tr)
    }
    document.getElementById('totalNo').innerText = `Total No :  ${users.length}`
    document.getElementById('totalsalary').innerText = `Total salary :  ${totalsalary}`
}

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
    console.log(user);
    uimaker();
}

document.getElementById('userData').addEventListener("submit",handleData)
