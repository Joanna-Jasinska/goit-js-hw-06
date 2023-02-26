const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const value = document.querySelector("#value");
function modifyNr(x) {
  counterValue += x;
  value.innerText = counterValue;
}
buttonDecrement.addEventListener("click", () => modifyNr(-1));
buttonIncrement.addEventListener("click", () => modifyNr(1));
