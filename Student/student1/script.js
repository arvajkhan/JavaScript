
let result = document.querySelector(".form")
let search = document.querySelector("#searchInput")
let show = "";
let allStudents = [];
fetch("https://dummyjson.com/users?utm_source=chatgpt.com").
  then((res) => {
    return res.json();
  }).then((data) => {

    data.users.forEach(student => {
      allStudents.push(student);
      show += `<div class="col col-12 col-sm-6 col-lg-3 mb-4">
                    <div class="card h-100 shadow">
                        <img src="${student.image}" class="card-img-top" >
                        <div class="card-body">
                            <h4> ${student.firstName} ${student.lastName} </h4>
                            <p>Age: ${student.age}</p>
                            <p> Email: ${student.email}</p>
                            <p>Phone: ${student.phone}</p>
                            <p>Address: ${student.address.city},${student.address.country}</p>
                            <button class="btn btn-primary">
                                View Profile
                            </button>
                            <button onclick="deleteStudent(${student.id})">
  Delete
</button>
                        </div>
                    </div>
                </div>
     `

    });
    result.innerHTML = show;
  }).catch((error) => {
    console.log(error);
  });


function btn() {
  let searchValue = search.value.toLowerCase();

  let student = allStudents.find((student) => {
    let fullName = `${student.firstName} ${student.lastName}`.toLowerCase();

    return (
      fullName === searchValue ||
      student.phone === search.value ||
      student.email.toLowerCase() === searchValue
    );
  });

  if (student) {
    result.innerHTML = `
      <div class="col col-12 col-sm-6 col-lg-3 mb-4">
        <div class="card h-100 shadow">
          <img src="${student.image}" class="card-img-top">
          <div class="card-body">
            <h4>${student.firstName} ${student.lastName}</h4>
            <p>Age: ${student.age}</p>
            <p>Email: ${student.email}</p>
            <p>Phone: ${student.phone}</p>
            <p>Address: ${student.address.city}, ${student.address.country}</p>
            <button class="btn btn-primary">View Profile</button>
                                        <button onclick="deleteStudent(${student.id})">
  Delete
</button>
          </div>
        </div>
      </div>
    `;
  } else {
    result.innerHTML = `<h3>Student Not Found</h3>`;
  }
}


function deleteStudent(id) {

  allStudents = allStudents.filter((student) => {

    return student.id !== id;

  });

  showStudents(allStudents);
}
// function btn() {
//   let searchValue = search.value.toLowerCase();

//   let student = allStudents.find((item) => {
//     let fullName = `${item.firstName} ${item.lastName}`.toLowerCase();

//     return (
//       fullName === searchValue ||
//       item.phone === search.value ||
//       item.email.toLowerCase() === searchValue
//     );
//   });

//   let students = student ? [student] : [];

//   result.innerHTML = students.map((item) => {
//     return `
//       <div class="col-12 col-sm-6 col-lg-3 mb-4">
//         <div class="card h-100 shadow">

//           <img src="${item.image}" class="card-img-top">

//           <div class="card-body">

//             <h4>${item.firstName} ${item.lastName}</h4>

//             <p>Age: ${item.age}</p>

//             <p>Email: ${item.email}</p>

//             <p>Phone: ${item.phone}</p>

//             <p>Address: ${item.address.city}, ${item.address.country}</p>

//             <button class="btn btn-primary">
//               View Profile
//             </button>

//           </div>
//         </div>
//       </div>
//     `;
//   }).join("");

//   if (students.length === 0) {
//     result.innerHTML = `<h3>Student Not Found</h3>`;
//   }
// }


// function btn() {
//   let searchValue = search.value.toLowerCase();
//   let output = "";

//   let filter = allStudents.filter((student) => {

//     let fullName = `${student.firstName} ${student.lastName}`.toLowerCase();

//     return (
//       fullName === searchValue ||
//       student.phone === search.value ||
//       student.email.toLowerCase() === searchValue
//     );
//   });

//   filter.forEach((student) => {
//     output += `
//       <div class="col col-12 col-sm-6 col-lg-3 mb-4">
//         <div class="card h-100 shadow">
//           <img src="${student.image}" class="card-img-top">

//           <div class="card-body">
//             <h4>${student.firstName} ${student.lastName}</h4>
//             <p>Age: ${student.age}</p>
//             <p>Email: ${student.email}</p>
//             <p>Phone: ${student.phone}</p>
//             <p>Address: ${student.address.city}, ${student.address.country}</p>

//             <button class="btn btn-primary">
//               View Profile
//             </button>
//           </div>
//         </div>
//       </div>
//     `;
//   });

//   result.innerHTML = output;
// }
