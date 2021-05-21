let gameTime = 0;
let playerX = [];
let playerO = [];
const grid1 = document.querySelector("#box-1");
grid1.addEventListener("click", playGame, false);

const grid2 = document.querySelector("#box-2");
grid2.addEventListener("click", playGame, false);

const grid3 = document.querySelector("#box-3");
grid3.addEventListener("click", playGame, false);

const grid4 = document.querySelector("#box-4");
grid4.addEventListener("click", playGame, false);

const grid5 = document.querySelector("#box-5");
grid5.addEventListener("click", playGame, false);

const grid6 = document.querySelector("#box-6");
grid6.addEventListener("click", playGame, false);

const grid7 = document.querySelector("#box-7");
grid7.addEventListener("click", playGame, false);

const grid8 = document.querySelector("#box-8");
grid8.addEventListener("click", playGame, false);

const grid9 = document.querySelector("#box-9");
grid9.addEventListener("click", playGame, false);

function playGame() {
  if (this.className === "free" && gameTime % 2 === 0) {
    this.className = "played";
    this.innerHTML = "X";
    playerX.push(this.dataset.gridIndex);
    playerX.sort(function (a, b) {
      return a - b;
    });
    console.log(playerX);
  } else if (this.className === "free" && gameTime % 2 !== 0) {
    this.className = "played";
    this.innerHTML = "O";
    playerO.push(this.dataset.gridIndex);
    playerO.sort(function (a, b) {
      return a - b;
    });
    console.log(playerO);
  }
  gameTime++;
  //checkForWin();
}

const winningArrays = [
  [3, 5, 7],
  [1, 5, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

function checkForWin() {
  for (i = 0; i < winningArrays.length; i++) {
    if (winningArrays[i] === playerX) co;
  }
}
