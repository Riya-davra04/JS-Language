let users = []

const Delete = (index) => {
    users.splice(index, 1);
    Dragon();
};

const Dragon = () => {
    document.getElementById('tbody').innerHTML = ''
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].name
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].colour
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].size
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].price
        let td5 = document.createElement('td')
        td5.innerHTML = users[i].quantity
        let td6 = document.createElement('td')
        td6.innerHTML = "remove";
        td6.addEventListener("click", () => Delete(i));

        tr.append(td1, td2, td3, td4, td5, td6)
        document.getElementById('tbody').append(tr)
    }
}

const HandleData = (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let colour = document.getElementById('colour').value;
    let size;
    if (document.getElementById('Small').checked) {
        size = document.getElementById('Small').value;
    } 
    else if (document.getElementById('Medium').checked) {
        size = document.getElementById('Medium').value;
    } 
    else if (document.getElementById('Large').checked) {
        size = document.getElementById('Large').value;
    }
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;

    let user = {
        name: name,
        colour: colour,
        size: size,
        price: price,
        quantity: quantity
    }

    if (name.length < 2) {
        alert("Enter valid name.");
        return;
    }
    if(!colour)
    {
        alert("Please Select Colour.");
        return;
    }
    if(!size)
    {
        alert("Please Select Size.");
        return;
    }
    if(!price)
    {
        alert("Please Select Price.");
        return;
    }
    if(!quantity)
    {
        alert("Please Select Quantity.");
        return;
    }
    users.push(user);
    console.log(user)
    Dragon();
}

document.getElementById('userData').addEventListener("submit", HandleData)
