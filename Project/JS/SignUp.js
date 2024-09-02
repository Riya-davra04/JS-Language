import getValue from "../Components/helper.js";
import Navbar from "../Components/Nevbar.js";

document.getElementById("navbar").innerHTML = Navbar()
let users = JSON.parse(localStorage.getItem("users")) || []
const handleData = (e) => {
    e.preventDefault();

    let user = {
        username: getValue(".username"),
        email: getValue(".email"),
        password: getValue(".password"),
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href="/Project/Home.html"

};

document.querySelector("#userData").addEventListener("submit", handleData);