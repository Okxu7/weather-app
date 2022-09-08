//Challenge 1She Codes Plus Logo     When clicking this button, alert "Hooray!"

function degrees() {
  alert("Hooray!");
}

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
form.addEventListener("submit", signUp);
