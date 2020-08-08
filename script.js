const countdownToStartBattle = () => {
  const matchTimer = document.querySelector(".match-timer");
  let seconds = 4;
  let timer = setInterval(() => {
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

    if (askPlayer === true) {
      location.reload();
    } else {
      location.reload();
    }
  }, 6000);
};

const playerChoosesPaper = document
  .querySelector(".paper")
  .addEventListener("click", (e) => {
    const playersChoice = document.querySelector(".player-choice");
    playersChoice.innerHTML = "You chose PAPER!";

    const paperBackground = document.querySelector(".paper");
    paperBackground.style.backgroundColor = "#1b6ca8";

    const aiAnnouncement = document.querySelector(".ai-announcement");
    aiAnnouncement.style.visibility = "visible";

    aiChoosesRandom();
    countdownToStartBattle();
    playAgain();
  });

const playerChoosesScissor = document
  .querySelector(".scissor")
  .addEventListener("click", (e) => {
    const playersChoice = document.querySelector(".player-choice");
    playersChoice.innerHTML = "You chose SCISSOR!";

    const scissorBackground = document.querySelector(".scissor");
    scissorBackground.style.backgroundColor = "#1b6ca8";

    const aiAnnouncement = document.querySelector(".ai-announcement");
    aiAnnouncement.style.visibility = "visible";

    aiChoosesRandom();
    countdownToStartBattle();
    playAgain();
  });

const playerChoosesRock = document
  .querySelector(".rock")
  .addEventListener("click", (e) => {
    const playersChoice = document.querySelector(".player-choice");
    playersChoice.innerHTML = "You chose ROCK!";

    const rockBackground = document.querySelector(".rock");
    rockBackground.style.backgroundColor = "#1b6ca8";

    const aiAnnouncement = document.querySelector(".ai-announcement");
    aiAnnouncement.style.visibility = "visible";

    aiChoosesRandom();
    countdownToStartBattle();
    playAgain();
  });

const aiChoosesRandom = () => {
  const aiRock = document.querySelector(".ai-rock");
  const aiPaper = document.querySelector(".ai-paper");
  const aiScissor = document.querySelector(".ai-scissor");

  let randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);

  if (0 <= randomNumber && randomNumber < 34) {
    return setTimeout(() => {
      aiScissor.style.display = "none";
      aiPaper.style.display = "none";
    }, 4000);
  }

  if (34 <= randomNumber && randomNumber < 67) {
    return setTimeout(() => {
      aiRock.style.display = "none";
      aiScissor.style.display = "none";
    }, 4000);
    return;
  }

  if (67 <= randomNumber && randomNumber < 100) {
    return setTimeout(() => {
      aiRock.style.display = "none";
      aiPaper.style.display = "none";
    }, 4000);
    return;
  }
};
