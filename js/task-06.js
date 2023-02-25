const input = document.querySelector("#validation-input");
const limit = input.getAttribute("data-length");
function validate(htmlObject, limit) {
  if (htmlObject.value.length != limit) {
    if (htmlObject.classList.contains("valid")) {
      htmlObject.classList.remove("valid");
    }
    return htmlObject.classList.add("invalid");
  }
  if (htmlObject.classList.contains("invalid")) {
    htmlObject.classList.remove("invalid");
  }
  htmlObject.classList.add("valid");
}

input.addEventListener("blur", () => validate(input, limit));
