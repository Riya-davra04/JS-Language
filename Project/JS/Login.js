import getValue from "../Components/helper.js";
import Navbar from "../Components/Nevbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let isLogin = localStorage.getItem("isLogin") == "true";

if (isLogin) {
    
    document.getElementById("userData").innerHTML = `
        <button id="logoutButton">Logout</button>
    `;
} else {
    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const handleLogin = (e) => {
        e.preventDefault();

        let user = {
            email: getValue(".email"),
            password: getValue(".password"),
        };

        let isMatched = users.filter(
            (ele) => ele.email == user.email && ele.password == user.password
        );

        if (isMatched.length > 0) {
            alert("Login successfully");
            localStorage.setItem("username", isMatched[0].username);
            localStorage.setItem("isLogin", true);

           
            document.getElementById("navbar").innerHTML = Navbar();

            
            document.getElementById("userData").innerHTML = `
                <button id="logoutButton">Logout</button>
            `;
        } else {
            alert("Login failed. Please check your credentials.");
        }
    };

    document.querySelector("#userData").addEventListener("submit", handleLogin);
}

const logout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    alert("You have logged out successfully.");
    document.getElementById("navbar").innerHTML = Navbar();
    location.reload();
};

const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
    logoutButton.addEventListener("click", logout);
}
