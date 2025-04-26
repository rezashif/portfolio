const element = document.getElementById("deserts");
const firstChild = element.firstElementChild;//cake
firstChild.style.backgroundColor = "pink"

const ulElements = document.querySelectorAll("ul");
console.log(ulElements);
ulElements.forEach((i) => {
const firstChild = i.firstElementChild;
firstChild.style.backgroundColor = "springgreen";
});