const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const iList = [];
// for (let i = 0; i < ingredients.length; i++) {
//   iList.push(document.createElement("li"));
//   iList[i].textContent = ingredients[i];
//   iList[i].classList.add("item");
//   document.querySelector("ul#ingredients").append(...iList);
// }

for (const i of ingredients) {
  iList.push(document.createElement("li"));
  iList[iList.length - 1].textContent = i;
  iList[iList.length - 1].classList.add("item");
  document.querySelector("ul#ingredients").append(...iList);
}

//z for na for of w tym przypadku srsly jaka to roznica? XD
//i tak trzeba wyciągać index
