// import { arr } from "./arr.js";

fetch("arr.js")
fetch("students.json")
.then((response) => response.json())
.then((students) => {

    let show = "";

    students.forEach((student) => {
        show += `
            <div>
                <img src="${student.image}" width="100">
                <h3>${student.name}</h3>
                <p>Roll No : ${student.rollNumber}</p>
                <p>Age : ${student.age}</p>
                <p>Course : ${student.course}</p>
                <p>Branch : ${student.branch}</p>
                <hr>
            </div>
        `;
    });

    result.innerHTML = show;

})
.catch((error) => {
    console.log(error);
});