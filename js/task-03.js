const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("ul.gallery");
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.flexDirection = "row";
gallery.style.listStyleType = "none";
for (let i = 0; i < images.length; i++) {
  gallery.append(document.createElement("li"));
  const galleryLi = document.querySelectorAll("ul.gallery li")[i];
  galleryLi.append(document.createElement("img"));
  galleryLi.style.objectFit = "cover";
  galleryLi.style.width = "300px";
  const img = galleryLi.firstChild;
  img.src = images[i].url;
  img.alt = images[i].alt;
  img.style.height = "100%";
  img.style.width = "100%";
}
