import { getStudents } from "./fetch.js";
import { display } from "./card.js";
import { searchStudents } from "./search.js";

let students = [];

getStudents().then((data) => {
    students = data;
    display(students);
});

let btn = document.querySelector(".btn");
let search = document.querySelector(".search");

btn.addEventListener("click", () => {

    let filterData = searchStudents(students, search.value);

    display(filterData);

});