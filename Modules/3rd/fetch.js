export function getStudents() {
    return fetch("data.json")
        .then((response) => response.json());
}