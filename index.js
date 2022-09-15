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


  function displayForecast() {     
    let forecastElement = document.querySelector("#forecast");
   
    let forecastHTML = `<div class="row">`;
    let days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
days.forEach(function (day) {
  forecastHTML = forecastHTML +
           `        
              <div class="col-2">
                <div class="weather-forecast-date">${day}</div>
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  alt=""
                  width="42"
                />
                <div class="weather-forecast-temperatures">
                  <span class="weather-forecast-temperature-max"> 18° </span>
                  <span class="weather-forecast-temperature-min"> 12° </span>
                </div>
              </div> 
      `;
});
  forecastHTML = forecastHTML + `</div>`;  
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
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
displayForecast();

/*----function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(
            forecastDay.temp.max
          )}° </span>
          <span class="weather-forecast-temperature-min"> ${Math.round(
            forecastDay.temp.min
          )}° </span>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}------*/