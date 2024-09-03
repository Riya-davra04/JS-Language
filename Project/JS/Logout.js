document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("logout")?.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLogin");
        localStorage.removeItem("username");
        document.getElementById("navbar").innerHTML = Navbar();
        window.location.href = "/Project/Home.html"; // Redirect to home after logout
    });
});
