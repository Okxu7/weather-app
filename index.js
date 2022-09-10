function showUser(response) {
  let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

}

 

let apiKey = "e0a32f92a140f9f879e0f5724934e532";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=e0a32f92a140f9f879e0f5724934e532&units=metric";
 
axios.get(apiUrl).then(showUser);



//Challenge 1She Codes Plus Logo     When clicking this button, alert "Hooray!"

/*----function degrees() {
  alert("Hooray!");
}
${response.data.name}`
let button = document.querySelector("button");
button.addEventListener("click", degrees);

//Challenge 2    When submitting the form, alert the value of the password input
function input() {
  alert("Your password is inputed");
}

let password = document.querySelector("#password-form");
password.addEventListener("submit", input);

//Challenge 3  When submitting the form, alert the value of the username and email inputs

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
