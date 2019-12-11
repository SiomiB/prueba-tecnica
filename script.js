//Siomara Belen Acevedo Rojo
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userScore = document.getElementById("score-1");
var score1 = 0;
var score2 = 0;
var opc = 0;
var leftMove = document.getElementById("left-move");
var rightMove = document.getElementById("right-move");
var message = document.getElementById("message")
var line = document.getElementById("line");


let computerMove=()=>{
    var moves = ['Piedra', 'Papel', 'Tijeras'];
    var rdmNum = Math.floor(Math.random()*3);
    return moves[rdmNum];
}

let game=(userMove)=>{
    var computer = computerMove();
    switch(userMove){
        case "Piedra":
            if(computer == "Piedra"){
                opc = 0;
                rightMove.innerHTML = "<i class='far fa-hand-rock'></i>";
            } else if(computer == "Papel"){
                opc = -1;
                rightMove.innerHTML = "<i class='far fa-hand-paper'></i>";
            } else if(computer == "Tijeras"){
                opc = 1;
                rightMove.innerHTML = "<i class='far fa-hand-scissors'></i>";
            }
            console.log(computer);
            console.log(opc);
            break;
        case "Papel":
                if(computer == "Piedra"){
                    opc = 1;
                    rightMove.innerHTML = "<i class='far fa-hand-rock'></i>";
                } else if(computer == "Papel"){
                    opc = 0;
                    rightMove.innerHTML = "<i class='far fa-hand-paper'></i>";
                } else if(computer = "Tijeras"){
                    opc = -1;
                    rightMove.innerHTML = "<i class='far fa-hand-scissors'></i>";
                }
                console.log(computer);
                console.log(opc);
                break;
        case "Tijeras":
                if(computer == "Piedra"){
                    opc = -1;
                    rightMove.innerHTML = "<i class='far fa-hand-rock'></i>";
                } else if(computer == "Papel"){
                    opc = 1;
                    rightMove.innerHTML = "<i class='far fa-hand-paper'></i>";
                } else if(computer = "Tijeras"){
                    opc = 0;
                    rightMove.innerHTML = "<i class='far fa-hand-scissors'></i>";
                }
                console.log(computer);
                console.log(opc);
                break;
    }
}

let score=()=>{
    if(opc>0){
        score1++;
        userScore.innerHTML = score1 + "-" + score2;
        message.innerHTML = "Ganaste"
    } else if(opc<0){
        score2++;
        userScore.innerHTML = score1 + "-" + score2;
        message.innerHTML = "Perdiste"
    } else if(opc==0){
        userScore.innerHTML = score1 + "-" + score2;
        message.innerHTML = "Empate"
    }
}

let hideMessage=()=>{
    leftMove.style.display = 'none';
    rightMove.style.display = 'none';
    message.style.display = 'none';
    line.style.display = 'block';
}

let showMessage=()=>{
    score();
    message.style.display = 'block';
    leftMove.style.display = 'none';
    rightMove.style.display = 'none';
    line.style.display = 'none';
    setTimeout(hideMessage, 1000);
}

    hideMessage();

    rock.addEventListener('click', rock_click =()=>{
        game("Piedra");
        leftMove.innerHTML = "<i class='far fa-hand-rock'></i>"
        leftMove.style.display = 'block';  
        rightMove.style.display = 'block';      
        setTimeout(showMessage, 1000);

    });
    paper.addEventListener('click', paper_click=()=>{
        game("Papel");
        leftMove.innerHTML = "<i class='far fa-hand-paper'></i>"
        leftMove.style.display = 'block';
        rightMove.style.display = 'block';         
        setTimeout(showMessage, 1000);
    });
    scissors.addEventListener('click', scissors_click=()=>{
        game("Tijeras");
        leftMove.innerHTML = "<i class='far fa-hand-scissors'></i>"
        leftMove.style.display = 'block';
        rightMove.style.display = 'block';        
        setTimeout(showMessage, 1000);
    })
