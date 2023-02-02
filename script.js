//VARIABLE

const win = document.getElementById("win");

const lose = document.getElementById("lose");

const draw = document.getElementById("draw");

let user = document.getElementById("user");

let computer = document.getElementById("computer");

let rock_btn = document.querySelector(".rock");

let paper_btn = document.querySelector(".paper");

let scissors_btn = document.querySelector(".scissors");

let background = document.getElementById("gamefield");

//ACTIONS///

//ROCK

rock_btn.onclick = function () {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
  computer.classList.add(computerChoice);

  user.classList.remove("rock");
  user.classList.remove("paper");
  user.classList.remove("scissors");
  user.classList.add("shake");
  computer.classList.add("shake");
  user.classList.add("rock");

  if ("rock" === computerChoice) {
    background.addEventListener("animationend", drawScreen);
  } else if (
    ("rock" === "rock" && computerChoice === "scissors") ||
    ("rock" === "paper" && computerChoice === "rock") ||
    ("rock" === "scissors" && computerChoice === "paper")
  ) {
    background.addEventListener("animationend", winScreen);
  } else {
    background.addEventListener("animationend", loseScreen);
  }
};

//PAPER

paper_btn.onclick = function () {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
  computer.classList.add(computerChoice);

  user.classList.remove("rock");
  user.classList.remove("paper");
  user.classList.remove("scissors");
  user.classList.add("shake");
  computer.classList.add("shake");
  user.classList.add("paper");

  if ("paper" === computerChoice) {
    background.addEventListener("animationend", drawScreen);
  } else if (
    ("paper" === "rock" && computerChoice === "scissors") ||
    ("paper" === "paper" && computerChoice === "rock") ||
    ("paper" === "scissors" && computerChoice === "paper")
  ) {
    background.addEventListener("animationend", winScreen);
  } else {
    background.addEventListener("animationend", loseScreen);
  }
};

//SCISSORS

scissors_btn.onclick = function () {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
  computer.classList.add(computerChoice);

  user.classList.remove("rock");
  user.classList.remove("paper");
  user.classList.remove("scissors");
  user.classList.add("shake");
  computer.classList.add("shake");
  user.classList.add("scissors");

  if ("scissors" === computerChoice) {
    background.addEventListener("animationend", drawScreen);
  } else if (
    ("scissors" === "rock" && computerChoice === "scissors") ||
    ("scissors" === "paper" && computerChoice === "rock") ||
    ("scissors" === "scissors" && computerChoice === "paper")
  ) {
    background.addEventListener("animationend", winScreen);
  } else {
    background.addEventListener("animationend", loseScreen);
  }
};

//EVENT

user.addEventListener("animationend", shakeEnd);

computer.addEventListener("animationend", shakeEnd);

function shakeEnd() {
  user.classList.remove("shake");
  computer.classList.remove("shake");
}

function winScreen() {
  win.classList.remove("hidden");
  setTimeout(function () {
    window.location.reload();
  }, 1000);
}

function loseScreen() {
  lose.classList.remove("hidden");
  setTimeout(function () {
    window.location.reload();
  }, 1000);
}

function drawScreen() {
  draw.classList.remove("hidden");
  setTimeout(function () {
    window.location.reload();
  }, 1000);
}
