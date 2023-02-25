const form = document.querySelector(".login-form");
const inputList = document.querySelectorAll(".login-form input");
let loginData = {};
function sendForm(e) {
  e.preventDefault();
  if (checkForm()) {
    for (let i = 0; i < inputList.length; i++) {
      loginData[inputList[i].name] = inputList[i].value;
    }
    console.log(loginData);
    form.reset();
  }
}
function checkForm() {
  for (let i = 0; i < inputList.length; i++) {
    if (!inputList[i].value) {
      alert("Wszystkie pola powinny zostać wypełnione.");
      return false;
    }
  }
  return true;
}
form.addEventListener("submit", sendForm);
