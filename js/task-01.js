//
//
const ul = document.querySelector("#categories");
const li = ul.children;
const categories = document.querySelectorAll("#categories h2");
const elements = document.querySelectorAll(".item li");
const catTextTable = [...categories].map((v) => v.innerText);
const eleTextTable = [...elements].map((v) => v.innerText);
const listOfCategories = [
  ...[...document.querySelectorAll("#categories")][0].children,
];
const oList = document.querySelectorAll("#categories")[0].children;
//const cat = [...listOfCategories].map((v, i, t) => [...v]);
//-------------------------------------------
//childElementCount
//innerText, children
const cSum = (o, i) => o[i].childElementCount;
const cLength = (o) => o.length;
const kids = (o, i) => o[i].children;

function getTxt(table) {
  return table.innerText;
}
function getChildNum(o) {
  return o.childElementCount;
}
//-------------------------------------------
console.log(kids(kids(oList, 0), 1));
console.log(kids(oList, 0));
console.log(cSum(oList, 1));
console.log(listOfCategories[0].children);
console.log(listOfCategories);
//console.log(eleTextTable);
//-------------------------------------------
console.log(
  [...li][0].innerText[0] +
    `Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5`
);
