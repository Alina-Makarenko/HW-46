// 1---
const buttonEl = document.querySelector(".btn");
const inputEl = document.querySelector('[type="text"]');
buttonEl.textContent = inputEl.value
// 2
const imgEl = document.querySelector(".photo");
imgEl.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOx-R278aLA2aEWKByAsOo6JotkOvm1fyCA&s";
// 3
const linkEl = document.querySelector(".link");
linkEl.href = "https://znohub.online/courses";
console.log(linkEl);

const img2El = document.querySelector(".photos");
img2El.alt = "line5678";
console.log(img2El);
// 4
const listEl = document.querySelector(".list")
const firstCh = listEl.firstElementChild;
firstCh.textContent = "tytyty";
console.log(firstCh);

