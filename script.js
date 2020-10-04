const playerChoosesPaper = document
  .getElementById("paper")
  .addEventListener("click", runGame);
const playerChoosesScissor = document
  .getElementById("scissor")
  .addEventListener("click", runGame);
const playerChoosesRock = document
  .getElementById("rock")
  .addEventListener("click", runGame);

let playerChoice;
let aiChoice;

function runGame() {
  playerChoice = event.target.getAttribute("alt");

  playerPick(playerChoice);
  aiChoosesRandom();
  countdownToStartBattle();
  playAgain();
}

const countdownToStartBattle = () => {
  const matchTimer = document.querySelector(".match-timer");
  let seconds = 4;
  setInterval(() => {
    seconds--;
    matchTimer.innerHTML = `Starting in... ${seconds}`;
    if (seconds < 0) {
      return matchTimer.remove();
    }
  }, 1000);
};

const playAgain = () => {
  setTimeout(() => {
    let askPlayer = confirm("Want to Play Again?");

    if (askPlayer) {
      return location.reload();
    }
  }, 6000);
};

const playerPick = (choice) => {
  playersChoice = document.querySelector(".player-choice");
  playersChoice.innerHTML = `You chose ${choice}`;

  // const choiceBackground = document.getElementById(`${choice}`);
  // choiceBackground.style.backgroundColor = "#1b6ca8";

  const aiAnnouncement = document.querySelector(".ai-announcement");
  aiAnnouncement.style.visibility = "visible";
};

const aiChoosesRandom = () => {
  const aiRock = document.querySelector(".ai-rock");
  const aiPaper = document.querySelector(".ai-paper");
  const aiScissor = document.querySelector(".ai-scissor");

  let randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);

  setTimeout(() => {
    if (0 <= randomNumber && randomNumber < 34) {
      aiScissor.style.display = "none";
      aiPaper.style.display = "none";
      aiChoice = "rock";
    }

    if (34 <= randomNumber && randomNumber < 67) {
      aiRock.style.display = "none";
      aiScissor.style.display = "none";
      aiChoice = "paper";
    }

    if (67 <= randomNumber && randomNumber < 100) {
      aiRock.style.display = "none";
      aiPaper.style.display = "none";
      aiChoice = "scissor";
    }
    gameResult();
  }, 4000);
};

function gameResult() {
  let computerChoice = document.querySelector(".ai-choice");
  let winner = document.querySelector(".winner");
}
