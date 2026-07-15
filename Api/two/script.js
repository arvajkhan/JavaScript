let result = document.getElementById("result");

let allStudents = [];

// Fetch API
fetch("https://dummyjson.com/users")
  .then(res => res.json())
  .then(data => {
    allStudents = data.users;
    display(allStudents);
  });

// Display Function
function display(data) {

  result.innerHTML = "";

  data.forEach(student => {

    result.innerHTML += `
        <div class="card">
            <img src="${student.image}">
            <h3>${student.firstName} ${student.lastName}</h3>
            <p>${student.email}</p>

            <button onclick="deleteStudent(${student.id})">
                Delete
            </button>
        </div>
        `;

  });

}



// Search
function searchStudent() {

  let value = document
    .getElementById("search")
    .value
    .toLowerCase();

  let filter = allStudents.filter(student =>

    student.firstName.toLowerCase().includes(value) ||

    student.lastName.toLowerCase().includes(value)

  );

  display(filter);

}

// Delete
function deleteStudent(id) {

  allStudents = allStudents.filter(student => student.id !== id);

  display(allStudents);

}