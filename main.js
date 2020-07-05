function computerPlay(){
    let randomNumber=Math.random();
    let result="";
    randomNumber>0.666 ? result="rock" :
    randomNumber>0.333 ? result="paper" : result ="scissors";
    return result;
}
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    let gameResult ="You ";
    let gameResultDef1="Rock beats Scissors";
    let gameResultDef2="Paper beats Rock";
    let gameResultDef3="Scissors beats Paper";
	if(playerSelection===computerSelection){
        gameResult="Draw!";
    }else if(playerSelection==="rock"){
        if(computerSelection==="scissors"){
            gameResult+="Win! ";
            gameResult+=gameResultDef1;
        }else if(computerSelection==="paper"){
            gameResult+="Lose! ";
            gameResult+=gameResultDef2;
        }
    }else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){
            gameResult+="Lose! ";
            gameResult+=gameResultDef1;
        }else if(computerSelection==="paper"){
            gameResult+="Win! ";
            gameResult+=gameResultDef3;
        }
    }else if(playerSelection==="paper"){
        if(computerSelection==="scissors"){
            gameResult+="Lose! ";
            gameResult+=gameResultDef3;
        }else if(computerSelection==="rock"){
            gameResult+="Win! ";
            gameResult+=gameResultDef2;
        }
    }
    return gameResult;
}
function game(){

    console.groupCollapsed("Results");
    for(let i=0; i<5; i++){
        const playerSelection = prompt("Select your hand rock paper or scissors.");
        const computerSelection = computerPlay();
        console.info("computer selection is " + computerSelection);
        let result=playRound(playerSelection, computerSelection);
        document.getElementsByClassName("result")[i].innerHTML=result;
        console.log(result);
    }
    console.groupEnd("Results");
}
game()