import Navbar from "./navbar.js";

document.getElementById('navbar').innerHTML = Navbar()
document.getElementById('student-form').addEventListener('submit',(e) => {
    e.preventDefault();

    let name = document.getElementById('floatingname').value;
    let email = document.getElementById('floatingInput').value;
    let phone = document.getElementById('floatingphno').value;
    let course = document.getElementById('floatingcourse').value;
    let fee = document.getElementById('floatingfee').value;

    const student = { name, email, phone, course, fee };

    
    let students = JSON.parse(localStorage.getItem('students')) || [];

    students.push(student);

    localStorage.setItem('students', JSON.stringify(students));

    alert('Student Registered Successfully');
    this.reset();
});
