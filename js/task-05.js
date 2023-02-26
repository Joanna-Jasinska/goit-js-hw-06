const userInput = document.querySelector("input#name-input");
const userNameDisplay = document.querySelector("#name-output");

userInput.addEventListener(
  "keyup",
  () =>
    (userNameDisplay.innerText = userInput.value.trim()
      ? userInput.value.trim()
      : "Anonymous")
);
