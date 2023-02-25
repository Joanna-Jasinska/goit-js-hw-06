//-------------------------------------------
//not doing it this way
//-------------------------------------------

const oList = document.querySelectorAll("#categories")[0].children;
//childElementCount
//innerText, children
const listLength = (o) => o.length;
const list = (o, i = 0) => o[i].children;
const nestedList = (o, i = 0, j = 1) => list(o[i].children, j);
function makeList(o) {
  return [...o].map((v) => v.innerText);
}
//-------------------------------------------
let txt = `Number of categories : ` + listLength(oList);
for (let i = 0; i < listLength(oList); i++) {
  txt += `\n\nCategory: ${makeList(list(oList, i))[0]}
Elements: ${makeList(nestedList(oList, i)).length}
( ${makeList(nestedList(oList, i))} )`;
}
//-------------------------------------------
//doing it this way
//-------------------------------------------
const categoriesCount = document.querySelectorAll("#categories > li").length;
const categoriesTitle = (number) =>
  document.querySelector("#categories").children[number].querySelector("h2")
    .innerText;
const categoriesElementsCount = (number) =>
  document
    .querySelector("#categories")
    .children[number].children[1].querySelectorAll("li").length;

let txt2 = `Number of categories:` + categoriesCount;
for (let i = 0; i < categoriesCount; i++) {
  txt2 +=
    `\n\nCategory: ` +
    categoriesTitle(i) +
    `\nElements: ` +
    categoriesElementsCount(i);
}

//-------------------------------------------
console.log(txt2);
