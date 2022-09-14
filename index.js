  function FormatData(timestamp) {
let data = new Date(timestamp);
let hours = data.getHours();
if (hours < 10) {
 hours = `0${hours}`;   
}
let minutes = data.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[data.getDay()];
return `${day}  ${hours}:${minutes}`;
  }  
  
  function showTemperature(response) {
console.log(response.data);
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.name;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp); 
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let visibilityElement = document.querySelector("#visibility");
  visibilityElement.innerHTML = response.data.visibility;

  celsiusTemperature = response.data.main.temp;

 let dataElement = document.querySelector("#data");
 dataElement.innerHTML = FormatData(response.data.dt * 1000);

let iconElement = document.querySelector("#icon");
iconElement.setAttribute(
  "src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
);
 iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {              
let apiKey = "e0a32f92a140f9f879e0f5724934e532";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
  }
 
  function  handleSubmit(event) {
event.preventDefault();
let cityInput = document.querySelector("#city-input"); 
search(cityInput.value);
  }     

   function displayFahrenheiTemperature(event) { 
   let temperatureElement = document.querySelector("#temperature"); 
   let fahrenheiTemperature =  celsiusTemperature * 9 / 5 + 32;
   console.log(fahrenheiTemperature);
   temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
   }

   function displayCelsiusTemperature(event) {
   let temperatureElement = document.querySelector("#temperature");  
   temperatureElement.innerHTML = Math.round(celsiusTemperature);
   console.log(celsiusTemperature);
   }
 
let  celsiusTemperature = null;
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);   
 
let fahrenheiLink = document.querySelector("#fahrenhei-link");
fahrenheiLink.addEventListener("click", displayFahrenheiTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Kyiv");
displayFahrenheiTemperature(77);
