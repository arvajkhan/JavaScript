export function display(data) {

    let result = document.querySelector(".result");

    let show = "";

    data.forEach((student) => {
        show += `
            <div class="card">
                <h3>${student.name}</h3>
                <p>${student.rollNumber}</p>
                <p>${student.course}</p>
                <p>${student.branch}</p>
            </div>
        `;
    });

    result.innerHTML = show;
}