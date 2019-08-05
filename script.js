let city = "costa da caparica";
let temperature = document.querySelector("#temperature");

function showTemperature(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerText = Math.round(response.data.main.temp);
}

let apiKey = "f818ee5213a888b0cfd2836bbb855734";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
