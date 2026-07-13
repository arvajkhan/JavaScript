
let result = document.querySelector(".form")
let search = document.querySelector("#searchInput")
let show = "";
let allproduct = [];
fetch("https://dummyjson.com/users?utm_source=chatgpt.com").
  then((res) => {
    return res.json();
  }).then((data) => {
    data.users.forEach(element => {
      allStudents.push(student);
      show += `<div class="col-12 col-sm-6 col-lg-4 mb-4">
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
  })

// function btn() {
//   let output = "";
//   let filter = allproduct.forEach((element) => {
//     return element.
//   })
// }