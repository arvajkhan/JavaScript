export function searchStudents(data, value) {

    value = value.toLowerCase();

    return data.filter((student) =>
        student.name.toLowerCase().includes(value) ||
        student.rollNumber.toString().includes(value) ||
        student.course.toLowerCase().includes(value) ||
        student.branch.toLowerCase().includes(value)
    );

}