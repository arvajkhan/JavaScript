export function searchStudents(students, searchValue) {

    return students.filter((student) => {

        let fullName =
            `${student.firstName} ${student.lastName || ""}`
            .toLowerCase();


        return fullName.includes(
            searchValue.toLowerCase()
        );

    });

}