const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const iList = [];
for (let i = 0; i < ingredients.length; i++) {
  iList.push(document.createElement("li"));
  iList[i].textContent = ingredients[i];
  iList[i].classList.add("item");
  document.querySelector("ul#ingredients").append(...iList);
}

//console.log(iList);
