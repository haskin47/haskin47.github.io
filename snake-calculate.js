
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

var gameboardX = 50;
var gameboardY = 50;

var snakeX = (blockSize * 5) + gameboardX;
var snakeY = (blockSize * 5) + gameboardY;
var moveX = 0;
var moveY = 0;
var snakeBody = [];

var foodX;
var foodY; 

var gameover = false;

window.onload = function() {
    gameboard = document.getElementById('game-board');
    gameboard.height = ( (rows) * blockSize );
    gameboard.width = ( (cols) * blockSize );
    

    context = gameboard.getContext("2d"); 

    Spawn();

    //GameOver();

    document.addEventListener("keydown", function onPress(press){Movement(press);});

    setInterval(Draw, 1000/10);

    
}

function GameOver(){
    //console.log("Gameover = " + gameover);
    /*if(gameover == true)
    {
        //  rgb(35, 57, 78)
        context.fillStyle = ;
        context.fillRect(25, 25, gameboard.width, gameboard.height);

    }
    else return;*/
}

function Draw() {
    if(gameover == true){ 
        //  Game over screen?    
        GameOver();
        return; 
    }

    context.fillStyle = "grey";
    context.fillRect(gameboardX, gameboardY, 
        gameboard.width, gameboard.height);


    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if(snakeX == foodX && snakeY == foodY){
        console.log("EAT MY CHILD");
        snakeBody.push([foodX, foodY]);
        Spawn();
    }

    for (let i = snakeBody.length-1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) snakeBody[0] = [snakeX, snakeY];


    context.fillStyle = "lime";
    snakeX += moveX * blockSize;
    snakeY += moveY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    for(let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //  GAME OVER
    if(snakeX < gameboardX || snakeX >= ((cols) * blockSize) || 
        snakeY < gameboardY || snakeY >= ((rows) * blockSize) ){
        gameover = true;
        console.log("Boop");

        alert("GAME OVER\nPlease refresh page to play again.");

        gameover = true;

    }

    //console.log("width: " + ( ((cols) * blockSize) ) );

    for(let i = 0; i < snakeBody.length; i++){
        
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameover = true;
            console.log("I'm here");
            alert("GAME OVER\nPlease refresh page to play again.");
            gameover = true;
        }
    }


}

function Movement(n){
    
    if(gameover == false) event.preventDefault();
    
    if (n.key == "ArrowUp" && moveY != 1) {
        moveX = 0;
        moveY = -1;
    }
    else if (n.key == "ArrowDown" && moveY != -1) {
        moveX = 0;
        moveY = 1;
    }
    else if (n.key == "ArrowLeft" && moveX != 1) {
        moveX = -1;
        moveY = 0;
    }
    else if (n.key == "ArrowRight" && moveX != -1) {
        moveX = 1;
        moveY = 0;
    }
}


function Spawn() {
    //  Ran into a bug, and not sure why its happening. 
    //  So I'm just going to make sure it never happens.
    
    foodX = (Math.floor(Math.random() * cols) * blockSize) + gameboardX;
    foodY = (Math.floor(Math.random() * rows) * blockSize) + gameboardY;

    if (foodX >= 500) foodX -= 50;
    if (foodY >= 500) foodY -= 50;
   
    console.log("Food coords: " + foodX + ", " + foodY);
        
}