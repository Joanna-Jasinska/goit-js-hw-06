const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const value = document.querySelector("#value");
function add(x) {
  counterValue += x;
  value.innerText = counterValue;
}
buttonDecrement.addEventListener("click", () => add(-1));
buttonIncrement.addEventListener("click", () => add(1));
