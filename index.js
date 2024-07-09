const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const body = document.querySelector("body");
const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");

let compScore = 0;
let userScore = 0;



const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = () =>  {
    msg.innerText = "Game draw!!";
    msg.style.backgroundColor = "black";
    // body.style.backgroundColor = "yellow";
}


const showWinner = (userWin,userChoise,compChoice) => {
    if(userWin){
        userScore ++;
        userScoreBoard.innerText = userScore;
        msg.innerText = `You win! ${userChoise} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore ++;
        compScoreBoard.innerText = compScore;
        msg.innerText = `Computer win! ${compChoice} beats ${userChoise}`;
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userChoise) => {
    console.log("User Choise = ",userChoise);
    const compChoice = genCompChoice();
    console.log("Computer Choise = ", compChoice);

    if (userChoise === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if(userChoise === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoise === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoise,compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoise = choice.getAttribute("id");
        // console.log("choice", userChoise);
        playGame(userChoise);
    })
})


