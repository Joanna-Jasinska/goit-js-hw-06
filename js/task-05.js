const userInput = document.querySelector("input#name-input");
const userNameDisplay = document.querySelector("#name-output");

userInput.addEventListener(
  "keypress",
  () => (userNameDisplay.innerText = userInput.value)
);
