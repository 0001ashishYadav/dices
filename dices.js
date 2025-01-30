const mainConEl = document.getElementById("mainCon");

const addBtnEl = document.getElementById("addBtn");
// addBtnEl.innerText = "Add Dices";

const resetValueBtnEl = document.getElementById("resetValueBtn");

const totalEl = document.getElementById("total");

let totalChar = 2;

let totalOfRanNum = 0;

function makeChar() {
  const ranNum = Math.floor(Math.random() * 6) + 1;

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
  valEl.innerText = ranNum;
  divEl.appendChild(valEl);

  // mainConEl.appendChild(divEl);
  totalEl.innerText = `Total Number : ${totalOfRanNum}`;

  return divEl;
}

const characters = [];

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
  for (let i = 0; i < characters.length; i++) {
    console.log(typeof characters[i]);
    const x = Object.keys(characters[i]);
    console.log(x);
  }
});

// makeChar();
