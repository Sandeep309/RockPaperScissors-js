const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      match.classList.remove("fadeOut");
    });
  };

  // Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player_hand");
    const comptHand = document.querySelector(".compt_hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // Computer options
    const comptOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Computer Choice
        const comptNumber = Math.floor(Math.random() * 3);
        const comptChoice = comptOptions[comptNumber];

        setTimeout(() => {
          // Here is where we call compare hands
          compareHands(this.textContent, comptChoice);
          // Update images
          playerHand.src = `assets/${this.textContent}.png`;
          comptHand.src = `assets/${comptChoice}.png`;
        }, 2000);

        // Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        comptHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  // Update score
  const udateScore = () => {
    const playerScore = document.querySelector(".player_score p");
    const comptScore = document.querySelector(".compt_score p");

    playerScore.textContent = pScore;
    comptScore.textContent = cScore;
  };

  // compare hands
  const compareHands = (playerChoice, comptChoice) => {
    // Update text
    const winner = document.querySelector(".winner");
    // Checking for a tie
    if (playerChoice === comptChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //  Check for rock
    if (playerChoice === "rock") {
      if (comptChoice === "scissors") {
        winner.textContent = "Playes Wins";
        pScore++;
        udateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        udateScore();
        return;
      }
    }
    // Check for paper
    if (playerChoice === "paper") {
      if (comptChoice === "scissors") {
        winner.textContent = "Computer wins";
        cScore++;
        udateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        udateScore();
        return;
      }
    }
    // Check for scissors
    if (playerChoice === "scissors") {
      if (comptChoice === "rock") {
        winner.textContent = "Computer wins";
        cScore++;
        udateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        udateScore();
        return;
      }
    }
  };

  // Is call the all inner functions
  startGame();
  playMatch();
};

// Start the game function
game();
