const sizeInput = document.querySelector("input#font-size-control");
const textToResize = document.querySelector("span#text");
textToResize.style.fontSize = `${sizeInput.value}px`;
function setSize(size) {
  textToResize.style.fontSize = `${size}px`;
}
sizeInput.addEventListener("input", () => setSize(sizeInput.value));
