import Navbar from "./navbar.js";

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));

function handleSort(order) {
    let sortedStudents;
    if (order === "lth") {
        sortedStudents = students.sort((a, b) => a.fee - b.fee);
    } else {
        sortedStudents = students.sort((a, b) => b.fee - a.fee);
    }
    displayStudents(sortedStudents);
}
document.getElementById("navbar").innerHTML = Navbar()