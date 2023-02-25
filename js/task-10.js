function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const buttonCreate = document.querySelector("#controls [data-create]");
const buttonDestroy = document.querySelector("#controls [data-destroy]");
const boxContainer = document.querySelector("#boxes");
boxContainer.style.display = "flex";
boxContainer.style.flexWrap = "wrap";
let size = 30;
let increase = 10;

function clearBoxes() {
  boxContainer.innerText = "";
}
function createBoxes(x) {
  for (let i = 0; i < x; i++) {
    boxContainer.append(document.createElement("div"));
    let id = boxContainer.children.length - 1;
    boxContainer.children[id].style.backgroundColor = getRandomHexColor();
    boxContainer.children[id].style.height = `${id * increase + size}px`;
    boxContainer.children[id].style.width = `${id * increase + size}px`;
  }
}
buttonCreate.addEventListener("click", () => createBoxes(input.value || 1));
buttonDestroy.addEventListener("click", () => clearBoxes());
