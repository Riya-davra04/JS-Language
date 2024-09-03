import Navbar from "../Components/Nevbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let isLogin = localStorage.getItem("isLogin") || false;


if (isLogin == false) {
    window.location.href = "/Project/Pages/Login.html"
}