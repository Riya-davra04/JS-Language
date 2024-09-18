import Navbar from "./navbar.js";

document.getElementById('navbar').innerHTML = Navbar()

document.addEventListener('DOMContentLoaded', function () {
    let studentDataDiv = document.getElementById('student-data');

    
    let students = JSON.parse(localStorage.getItem('students')) || [];

   
    const displayStudents = (studentsList) => {
        studentDataDiv.innerHTML = studentsList.map(student => `
            <div class="student">
                <p>Name: ${student.name}</p>
                <p>Email: ${student.email}</p>
                <p>Phone: ${student.phone}</p>
                <p>Course: ${student.course}</p>
                <p>Fee: ${student.fee}</p>
            </div>
        `).join('');
    };

    
    displayStudents(students);

    
    document.getElementById('lth').addEventListener('click',  () => {
        let sortedStudents = [...students].sort((a, b) => a.fee - b.fee);
        displayStudents(sortedStudents);
    });

    document.getElementById('htl').addEventListener('click',  ()=> {
        let sortedStudents = [...students].sort((a, b) => b.fee - a.fee);
        displayStudents(sortedStudents);
    });

});
