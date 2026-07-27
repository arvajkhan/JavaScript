export async function getStudents() {

    let response = await fetch("./students.json");

    let data = await response.json();

    return data;

}