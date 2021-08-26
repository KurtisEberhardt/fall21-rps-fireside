let winConditions = {
    scissors:[
        'paper'
    ],
    paper: [
        'rock'
    ],
    rock: [
        'scissors'
    ]
}
let options = ['rock', 'paper', 'scissors']

//if-else-if chain
function playGame(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return 'You tie!'
        //NOTE document getelembyid would go in the returns for the if statements
    }else if(playerChoice =='paper' && computerChoice =='rock' || playerChoice == 'scissors' && computerChoice == 'paper' || playerChoice =='rock' && computerChoice == 'scissors'){
        return 'You win!'
    }else return 'You lose!'
}

//tenary+dictonary

function ternary(playerChoice){
    let computerChoice = options[(Math.floor(Math.random() * 3))]
    playerChoice == computerChoice ? console.log('Tie!') : winConditions[computerChoice].includes(playerChoice) ? console.log('You win!') : console.log('You lose!')
}

//switch statemnet, 2 separate functions

function compLogic(){
    let computerChoice = Math.floor(Math.random() * 3)
    switch(computerChoice){
        case 0:
            return 'scissors'
        case 1: 
            return 'rock'
        case 2: 
            return 'paper'
    }
}

function play(playerChoice){
    let computerChoice = compLogic()
    if(winConditions[playerChoice] == computerChoice){
    console.log('You win!')
    }else if(winConditions[computerChoice] == playerChoice){
    console.log('You lose!')
    }else console.log('You tied!')
}
