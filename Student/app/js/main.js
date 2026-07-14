import {
    fetchStudents,
    addStudent,
    getStudents
}
from "./api.js";


import {
    searchStudents
}
from "./search.js";


import {
    deleteStudent
}
from "./delete.js";


const studentContainer =
    document.querySelector("#studentContainer");


const searchInput =
    document.querySelector("#searchInput");


const nameInput =
    document.querySelector("#name");


const emailInput =
    document.querySelector("#email");


const ageInput =
    document.querySelector("#age");


const addBtn =
    document.querySelector("#addBtn");



let currentStudents = [];



function displayStudents(students) {

    studentContainer.innerHTML = "";


    students.forEach((student) => {

        let card =
            document.createElement("div");


        card.classList.add("student-card");


        card.innerHTML = `

            <h3>
                ${student.firstName}
                ${student.lastName || ""}
            </h3>

            <p>
                <strong>Email:</strong>
                ${student.email}
            </p>

            <p>
                <strong>Age:</strong>
                ${student.age}
            </p>

            <p>
                <strong>University:</strong>
                ${student.university || "New Student"}
            </p>

            <button
                class="delete-btn"
                data-id="${student.id}"
            >
                Delete
            </button>

        `;

        studentContainer.appendChild(card);
    });
}
async function loadStudents() {
    currentStudents =
        await fetchStudents();
    displayStudents(currentStudents);
}
loadStudents();
searchInput.addEventListener("input", () => {

    let searchValue =
        searchInput.value;


    let result =
        searchStudents(
            currentStudents,
            searchValue
        );


    displayStudents(result);

});



addBtn.addEventListener("click", () => {

    let name =
        nameInput.value.trim();


    let email =
        emailInput.value.trim();


    let age =
        ageInput.value;


    if (!name || !email || !age) {

        alert("Please fill all fields");

        return;

    }


    currentStudents =
        addStudent(name, email, age);


    displayStudents(currentStudents);


    nameInput.value = "";

    emailInput.value = "";

    ageInput.value = "";

});



studentContainer.addEventListener("click", (event) => {

    if (
        event.target.classList.contains("delete-btn")
    ) {

        let id =
            Number(event.target.dataset.id);


        currentStudents =
            deleteStudent(
                currentStudents,
                id
            );


        displayStudents(currentStudents);

    }

});