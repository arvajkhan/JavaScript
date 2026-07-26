import { getPhotos } from "./api.js";
import { searchData } from "./search.js";

const cards = document.querySelector(".cards");
const search = document.querySelector(".search");

let allPhotos = [];

function display(data){

    cards.innerHTML="";

    data.forEach((photo)=>{

        cards.innerHTML += `
        
        <div class="card">

            <img src="${photo.thumbnailUrl}">

            <h4>${photo.title}</h4>

        </div>

        `;

    });

}

async function loadData(){

    allPhotos = await getPhotos();

    display(allPhotos);

}

loadData();

search.addEventListener("input",()=>{

    const result = searchData(allPhotos,search.value);

    display(result);

});