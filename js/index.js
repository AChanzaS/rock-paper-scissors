var humanSelection;
var computerSelection;

//This is the function of the computer play
function computerPlay() {

    var selection;
    var cases = Math.floor(Math.random() * (4-0+1) + 0);
    
    switch (cases){
        case 1:
            selection = "rock";
            break;

        case 2:
            selection = "paper";
            break;

        case 3:
            selection = "scissors";
            break;
            
    }

    return computerSelection = selection;

}

// The function that takes the results from the computer and the Human plays
function humanPlay (humanSelection) {

    var selection = humanSelection.toLowerCase();
    return humanSelection = selection;
    
}

function humanWins(){
    console.log("Human wins");
}

function computerWins(){
    console.log("Computer wins");
}
function draw(){
    console.log("draw play!");
}

function compare (humanSelection, computerSelection){
    if (humanSelection == "rock" &&  computerSelection == "rock"){
        console.log();
        draw();
    }
    else 
    if (humanSelection == "rock" &&  computerSelection == "paper"){
        console.log();
        computerWins();
    }
    else 
    if (humanSelection == "rock" &&  computerSelection == "scissors"){
        console.log();
        humanWins();
    }
    else 
    if (humanSelection == "paper" &&  computerSelection == "rock"){
        console.log();
        humanWins();
    }
    else 
    if (humanSelection == "paper" &&  computerSelection == "paper"){
        console.log();
        draw();
    }
    else 
    if (humanSelection == "paper" &&  computerSelection == "scissors"){
        console.log();
        computerWins();
    }
    else 
    if (humanSelection == "scissors" &&  computerSelection == "rock"){
        console.log();
        computerWins();
    }
    else 
    if (humanSelection == "scissors" &&  computerSelection == "paper"){
        console.log();
        humanWins();
    }
    else 
    if (humanSelection == "scissors" &&  computerSelection == "scissors"){
        console.log();
        draw();
    }
}