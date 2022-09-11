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

let dataElement = document.querySelector("#data");
dataElement.innerHTML = FormatData(response.data.dt * 1000);
  }

function search(city) {              
let apiKey = "e0a32f92a140f9f879e0f5724934e532";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
  }
 
  function  handleSubmit(event) {
event.preventDefault();
let cityInput = document.querySelector("#city-input");
console.log(cityInput.value);
search(cityInput.value);
  }     
      
  let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);   
 
 function displayFahrenheitTemperature(event)  {
let temperatureElement = document.querySelector("#temperature");
let fahrenheitTemperature = (celsiusTemperature * 9)/5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature); 
 }

 function displayCelsiusTemperature(event) {
   let temperatureElement = document.querySelector("#temperature");  
   temperatureElement.innerHTML = Math.round(celsiusTemperature);
 }



let  celsiusTemperature = null;
let fahrenheitLink = document.querySelector("#search-form");
fahrenheitLink.addEventListener("submit", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#fahrenhei-form");
fahrenheitLink.addEventListener("submit", displayFahrenheitTemperature);

/*----//Challenge 3   When submitting the form, alert the value of the username and email inputs

function signUp(event) {
  event.preventDefault();
  let inputName = document.querySelector("#username-input");
  let inputEmail = document.querySelector("#email-input");
  console.log(inputName.value);
  console.log(inputEmail.value);
  alert(`Welcome ${inputName.value}, your emale: ${inputEmail.value}`);
}
let form = document.querySelector("#signup-form");
form.addEventListener("submit", signUp)------------ */
