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
function game(playerSelection){
    let computerSelection=computerPlay();
    result=playRound(playerSelection,computerSelection)+`[Computer Selection:${computerSelection}]`;
    let liElement=document.createElement("li");
    liElement.textContent=result;
    if(result.startsWith("You Win")){
        liElement.style.color="green";
        let winSum=document.querySelector(".res-sum:nth-child(1) > span:nth-child(2)").textContent;
        document.querySelector(".res-sum:nth-child(1) > span:nth-child(2)").textContent=parseInt(winSum)+1;
    }
    else if(result.startsWith("You Lose")){
        liElement.style.color="red";
        let loseSum=document.querySelector(".res-sum:nth-child(2) > span:nth-child(2)").textContent;
        document.querySelector(".res-sum:nth-child(2) > span:nth-child(2)").textContent=parseInt(loseSum)+1;
    }else{
        let drawSum=document.querySelector(".res-sum:nth-child(3) > span:nth-child(2)").textContent;
        document.querySelector(".res-sum:nth-child(3) > span:nth-child(2)").textContent=parseInt(drawSum)+1;
    }
    document.querySelector('#results > ol').appendChild(liElement);
}

let rockBtn=document.querySelector("#rock");
let paperBtn=document.querySelector("#paper");
let scissorsBtn=document.querySelector("#scissors");

rockBtn.addEventListener("click", function(e){
    e.target.style.background="blue";
    paperBtn.style.background="#555555";
    scissorsBtn.style.background="#555555";
    game("rock");
})
scissorsBtn.addEventListener("click", function(e){
    e.target.style.background="blue";
    paperBtn.style.background="#555555";
    rockBtn.style.background="#555555";
    game("scissors");
})
paperBtn.addEventListener("click", function(e){
    e.target.style.background="blue";
    rockBtn.style.background="#555555";
    scissorsBtn.style.background="#555555";
    game("paper");
})