// Change Heading
export function changeHeading() {
    const input = document.getElementById("name");
    const heading = document.getElementById("heading");

    if (input.value.trim() === "") {
        heading.innerText = "Please Enter Your Name";
    } else {
        heading.innerText = "Welcome " + input.value;
    }
}

// Clear Heading and Input
export function clearData() {
    document.getElementById("heading").innerText = "Hello Monis";
    document.getElementById("name").value = "";
}