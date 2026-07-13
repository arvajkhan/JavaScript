const searchForm = document.querySelector("#searchForm");

const searchInput = document.querySelector("#searchInput");


searchForm.addEventListener("submit", function (event) {

  event.preventDefault();


  const searchValue = searchInput.value.trim();


  if (searchValue === "") {

    alert("Please enter something to search");

    return;

  }


  console.log("Searching:", searchValue);

});
let result = document.querySelector(".form")
let show = "";
let allproduct = [];
fetch('/JavaScript/Student/student1/mydata.json').
then((res)=>{
  return res.json();
}).then((data)=>{
  data.users.forEach(element => {
    
  });
})