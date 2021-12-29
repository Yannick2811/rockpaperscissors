let playerScore = 0
let computerScore = 0
const options = document.querySelectorAll("button")

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons () {
    options.forEach(e => {
        e.disabled = true 
    })
}

function playRound(playerSelection) {
    let result = ""
    let computerSelection = computerPlay()

    if((playerSelection === "Rock" && computerSelection === "Scissors") ||
       (playerSelection === "Paper" && computerSelection === "Rock") ||
       (playerSelection === "Scissors" && computerSelection === "Paper")) {
           playerScore += 1
           result = ("You won! " + playerSelection + " beats " + computerSelection + "."
                     + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
            if(playerScore === 5) {
                result += "<br>You won the game! Refresh the page to play another round!"
                disableButtons()
            }
            }else if(playerSelection === computerSelection) {
                result = ("It's a tie! You both chose " + playerSelection + "."
                            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
            }else{
                computerScore += 1
                result = ("You lost! " + computerSelection + " beats " + playerSelection + "."
                        +"<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
                if(computerScore === 5){
                    result += "You lost the game! Refresh the page to play another round!"
                    disableButtons()
                }
            }
            document.getElementById("result").innerHTML = result
       }
    
       options.forEach(options =>{
           options.addEventListener('click', function(){
               playRound(options.value)
           })
       })

