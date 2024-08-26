let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara= document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const GenCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawgame = () => {
  console.log("game was draw");
  msg.innerText = "Game was Draw. Play again";
  msg.style.backgroundColor = "#081b31";
};
const showwinner = (userwin, userchoice, CompChoice) => {
  if (userwin) {
   userscore++;
   userscorepara.innerText = userscore;
    console.log("You win!");
    msg.innerText = `You Win! Your ${userchoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
   compscore++;
   compscorepara.innerText = compscore;
    console.log("You lose!");
    msg.innerText = `You Lose!  ${CompChoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("user choice =", userchoice);
  //generate computer choice
  const CompChoice = GenCompChoice();
  console.log("CompChoice =", CompChoice);

  if (userchoice === CompChoice) {
    //draw game
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //scissors ,paper
      userwin = CompChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock ,scissors
      userwin = CompChoice === "scissors" ? false : true;
    } else {
      //rock ,paper
      userwin = CompChoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, CompChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
