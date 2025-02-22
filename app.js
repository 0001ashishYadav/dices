const mainConEl = document.getElementById("mainCon");

const addBtnEl = document.getElementById("addBtn");
// addBtnEl.innerText = "Add Dices";

const resetValueBtnEl = document.getElementById("resetValueBtn");

const totalEl = document.getElementById("total");

let totalChar = 2;

let totalOfRanNum = 0;

let totalOfRanNum2 = 0;

function generateRandomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

function makeChar() {
  const ranNum = generateRandomNum();
  totalOfRanNum = totalOfRanNum + ranNum;

  const divEl = document.createElement("div");
  divEl.style.position = "relative";
  divEl.style.display = "flex";
  divEl.style.justifyContent = "center";
  divEl.style.alignItems = "center";

  const chaImgEl = document.createElement("img");
  chaImgEl.src = "./assets/triangle-logo-png.png";
  chaImgEl.height = 200;
  chaImgEl.width = 200;
  divEl.appendChild(chaImgEl);

  const valEl = document.createElement("p");
  valEl.classList.add("ranp");
  valEl.innerText = ranNum;
  divEl.appendChild(valEl);

  // mainConEl.appendChild(divEl);
  totalEl.innerText = `Total Number : ${totalOfRanNum}`;

  return divEl;
}

let characters = [];

addBtnEl.addEventListener("click", (e) => {
  if (characters.length < 6) {
    characters.push(makeChar());
  }

  if (characters.length == 6) {
    addBtnEl.disabled = true;
  }

  for (let i = 0; i < characters.length; i++) {
    mainConEl.appendChild(characters[i]);
  }
});

resetValueBtnEl.addEventListener("click", () => {
  const paras = mainConEl.getElementsByClassName("ranp");
  for (let i = 0; i < paras.length; i++) {
    totalOfRanNum2 = totalOfRanNum2 + generateRandomNum();
    paras[i].innerHTML = generateRandomNum();
  }
  console.log(totalOfRanNum2);
  console.log("hello");
});
