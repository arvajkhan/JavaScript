import { changeHeading, clearData } from "./dom.js";

const changeBtn = document.getElementById("changeBtn");
const clearBtn = document.getElementById("clearBtn");

changeBtn.addEventListener("click", () => {
    changeHeading();
});

clearBtn.addEventListener("click", () => {
    clearData();
});