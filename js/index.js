var playerSelection;
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
function playerPlay (playerSelection, computerSelection) {

    var selection = playerSelection.toLowerCase();
    return playerSelection = selection;
    
}