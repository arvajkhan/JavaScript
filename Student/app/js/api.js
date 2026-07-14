let students = [];

async function fetchStudents() {

    try {

        let response = await fetch("https://dummyjson.com/users");

        let data = await response.json();

        students = data.users;

        return students;

    } catch (error) {

        console.log("API Error:", error);

        return [];

    }

}


function addStudent(name, email, age) {

    let newStudent = {

        id: Date.now(),

        firstName: name,

        email: email,

        age: age

    };


    students.unshift(newStudent);


    return students;

}


function getStudents() {

    return students;

}


export {
    fetchStudents,
    addStudent,
    getStudents
};