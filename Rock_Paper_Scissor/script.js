const startbtn = document.getElementById("start-container");
const startGame = () => {
  startbtn.style.display = "none";
};

let game = ["Rock", "Paper", "Sissor"];
let count = 0;
let computer = 0;
let human = 0;
const playing = (index) => {
  const compIndex = Math.floor(Math.random() * 3);
  check(index, compIndex);
  document.getElementById("visual").innerHTML = `${game[compIndex]}`;
  count++;
  if (count > 10) {
    finalResult();
    setInterval(() => {
      location.reload();
    }, 5000);
  }
};

const check = (i, j) => {
  if (i === j) {
    document.getElementById("result").innerHTML = `match Tie`;
  } else if (i === 0 && j === 2) {
    document.getElementById("result").innerHTML = `you're winner`;
    human++;
  } else if (i === 1 && j === 0) {
    document.getElementById("result").innerHTML = `you're winner`;
    human++;
  } else if (i === 2 && j === 1) {
    document.getElementById("result").innerHTML = `you're winner`;
    human++;
  } else {
    document.getElementById("result").innerHTML = "you lose";
    computer++;
  }

  return human, computer;
};

const finalResult = () => {
  document.getElementById("visual").innerHTML = `Game Over`;
  document.getElementById(
    "result"
  ).innerHTML = `your score is ${human} and computer score is ${computer}`;
};
