export function deleteStudent(students, id) {

    return students.filter((student) => {

        return student.id !== id;

    });

}