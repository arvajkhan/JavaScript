import { arr } from "./arr.js";

let result = document.querySelector(".result");

export function display(data) {

    let show = "";

    data.forEach((student) => {
        show += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 card m-2">
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
}

display(arr);