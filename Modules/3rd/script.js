import { getStudents } from "./fetch.js";
import { display } from "./card.js";

getStudents().then((students) => {
    display(students);
});