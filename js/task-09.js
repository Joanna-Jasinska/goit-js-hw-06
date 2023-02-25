const buttonChangeColor = document.querySelector(".change-color");
const color = document.querySelector("span.color");
const body = document.querySelector("body");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  let c = getRandomHexColor();
  color.innerText = c;
  body.style.backgroundColor = c;
}

buttonChangeColor.addEventListener("click", () => changeColor());
