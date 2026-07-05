let button = document.querySelector("#fetchBtn");
let temp = document.querySelector("#temp");

button.addEventListener("click", async function () {

  temp.innerText = "Loading...";

  try {

    let response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=27.49&longitude=77.67&current=temperature_2m"
    );

    let data = await response.json();

    console.log(data);

    let temperature = data.current.temperature_2m;

    temp.innerText = `Temperature: ${temperature} °C`;

  } catch (error) {

    temp.innerText = "Failed to fetch temperature";

    console.log(error);
  }

});