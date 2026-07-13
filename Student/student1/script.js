
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
                        </div>
                    </div>
                </div>
     `

    });
    result.innerHTML = show;
  }).catch((error) => {
    console.log(error);
  });
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
          </div>
        </div>
      </div>
    `;
  } else {
    result.innerHTML = `<h3>Student Not Found</h3>`;
  }
}