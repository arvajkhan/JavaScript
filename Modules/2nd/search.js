import { arr } from "./arr.js";
import { display } from "./script.js";

let search = document.querySelector(".search");

window.btn = function () {

    let value = search.value.toLowerCase();

    let filterData = arr.filter(student =>
        student.name.toLowerCase().includes(value) ||
        student.rollNumber.toString().includes(value) ||
        student.course.toLowerCase().includes(value) ||
        student.branch.toLowerCase().includes(value)
    );

    display(filterData);
}