let result = document.querySelector(".result");
fetch("data.json").then(res => res.json())
.then((data)=>{

    let show = "";

    data.forEach((student) => {

        show += `
        <div class="card">
            <img src="${student.image}" width="120">

            <h2>${student.name}</h2>

            <p>Roll No : ${student.rollNumber}</p>

            <p>Age : ${student.age}</p>

            <p>Course : ${student.course}</p>

            <p>Branch : ${student.branch}</p>

            <hr>
        </div>
        `;

    });

    result.innerHTML = show;

})
.catch((error) => {
    console.log(error);
});