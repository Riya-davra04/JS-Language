import getValue from "../Components/helper.js";
import Navbar from "../Components/Nevbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let users = JSON.parse(localStorage.getItem("users")) || [];

const handleData = (e) => {
    e.preventDefault();

    let user = {
        username: getValue(".username"),
        email: getValue(".email"),
        password: getValue(".password"),
    };

    let Email = users.some((ele) => ele.email == user.email);

    if (Email) {
        alert("Email is already registered. Please enter a different email.");
        
    } else {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Sign up successful!");
        window.location.href = "/Project/Home.html";
    }
};

document.querySelector("#userData").addEventListener("submit", handleData);
