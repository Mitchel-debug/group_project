// Declare all variables
let ballArray = [];
let ballArray2 = [];
let appleImage;
let backgroundImage;
let characterXpos = 500;
let characterYpos = 400;
let numOfApples = 0;
let apple;
let character;
let charcterSpeedX = 1;

// states is meant to be start page.
let states = 'start page';
let message1 = "EASY";
let message2 = "MEDIUM";
let message3 = "HARD";
let message4 = "Score: "
let message5 = "Tap to start!"

let score = 0;
let appleSpeed = 2;
let speedCharacter = 0.5;

let button1Left = (500 - 180);
let button1Right = (500 + 175);
let button1Top = (100 - 50);
let button1Down = (100 + 50);

let button2Left = (500 - 180);
let button2Right = (500 + 175);
let button2Top = (250 - 50);
let button2Down = (250 + 50);

// 500, 400, 350, 100, 25
let button3Left = (500 - 180);
let button3Right = (500 + 180);
let button3Top = (400 - 50);
let button3Bottom = (400 + 50);
// 500, 475, 350, 100, 25
let button4Left = 500 - 180;
let button4Right = 500 + 180;
let button4Top = 475 - 50;
let button4Bottom = 475 + 50;

let appleLeft;
let appleRight;
let appleTop;
let appleBottom;

let characterLeft;
let characterRight;
let characterTop;
let characterBottom;

// Loads the images
function preload(){
    appleImage = loadImage("images/apple.png");
    backgroundImage = loadImage("images/background_2.png");
    charaterImage = loadImage("images/character.png"); 
    mainPageImage = loadImage("images/background_2.jpg");   
    playButtonImage = loadImage("images/play_button.png");
    gameOverImage = loadImage("images/game_over_PNG57.png");
    gameOverScreen = loadImage("images/game-over-screen.png");
    appleImageGameOver = loadImage("images/pngegg (2).png")
}

// Create a canvas and generate random ball
function setup(){
    createCanvas(1000,500);
    // Class for the apples
    apple = new Ball(random(0, 1000), 250, 0, 255, 0, appleSpeed);
    ballArray.push(apple);
    // Class for the character
    character = new Ball(characterXpos, characterYpos, 0, 255, 0, speedCharacter);
    ballArray2.push(character);
    rectMode(CENTER);
    imageMode(CENTER);
    textAlign(CENTER);
}


function draw() {
    if (states == "control page"){
        background(0);
        image(mainPageImage, 500, 250, 1000, 500);
        rect(500, 250, 350, 300, 25)
    }
    else if (states == "start page"){
        background(0);
        image(mainPageImage, 500, 250, 1000, 500);
        fill(255,225,100);
        stroke(255);
        rect(500, 100, 350, 100, 25);
        fill(237, 175, 109);
        rect(500, 250, 350, 100, 25);
        fill(242, 110, 34);
        rect(500, 400, 350, 100, 25);

        fill(0);
        textSize(40);
        text(message1, 500, 110);
        text(message2, 500, 265);
        text(message3, 500, 415);

        image(charaterImage, 310, 430, 150, 100);
        image(appleImage, (500+175), 430, 75, 75);
    }

    else if (states == 'main page'){
        background(0);
        image(backgroundImage, 500, 250, 1000, 500);

        // appleImages = image(appleImage, ballArray[i].xPos, ballArray[i].yPos, 50, 50);
        for(let i=0; i < ballArray.length; i++){
            fill(ballArray[i].redValue,ballArray[i].greenValue, ballArray[i].redValue);
            image(appleImage , ballArray[i].xPos, ballArray[i].yPos, 70, 70);
            ballArray[i].yPos += appleSpeed;
            console.log(ballArray);
            if(ballArray[i].yPos > 525) {
                ballArray[i].xPos = random(0, 1000);
                ballArray[i].yPos =-25;
                // ballArray.splice(i, i)
    
            }
            if (ballArray[i].xPos > 1000){
                ballArray[i].xPos = 250;
            }
        }

        image(charaterImage, character.xPos, character.yPos, 200, 100);
        // character.xPos += character.speedValue;
        if (keyIsDown(LEFT_ARROW)){
            character.xPos -= 3;
            character.xPos -= speedCharacter;
        }

        if (keyIsDown(RIGHT_ARROW)){
            character.xPos += 3;
            character.xPos += speedCharacter;

        }
        

        appleLeft = apple.xPos - 35;
        appleRight = apple.xPos + 35;
        appleTop = apple.yPos - 35;
        appleBottom = apple.yPos + 35;

        characterLeft = character.xPos - 30;
        characterRight = character.xPos + 30;
        characterTop = character.yPos - 30;
        characterBottom = character.yPos + 50;

        if (appleBottom > 525){
            states = "game over";
        }

        else if (appleLeft > characterRight || appleRight < characterLeft || appleTop > characterBottom || appleBottom < characterTop){
        
        }


        else {
            apple.yPos = -25;
            apple.xPos = random(25, 975);
            score += 1
        }
        fill(0);
        textSize(20);
        text(message4 + score, 50, 45);

    }

    else if (states == "game over"){
        apple.yPos = 0;
        background(204, 204, 0);
        image(gameOverImage, 500, 200, 1000, 500);
        image(appleImageGameOver, 900, 310, 100, 100);
        text(message4 + score, 500, 380);


        fill(204, 204, 0);
        noStroke();
        rect(500, 475, 350, 100, 25);
        fill(0);
        textSize(25);
        text(message5, 500, 475);
        
    }

}

function mouseClicked(){
    if (mouseX > button1Left && mouseX < button1Right && mouseY > button1Top && mouseY < button1Down && states == "start page"){
        states = 'main page';
    }

    else if (mouseX > button2Left && mouseX < button2Right && mouseY > button2Top && mouseY < button2Down && states == "start page"){
        states = 'main page';
        appleSpeed = 3;
        speedCharacter = 0.8;
    }

    else if (mouseX > button3Left && mouseX < button3Right && mouseY > button3Top && mouseY < button3Bottom && states == "start page"){
        states = 'main page';
        appleSpeed = 5;
        speedCharacter = 1;
    }

    else if (mouseX > button4Left && mouseX < button4Right && mouseY > button4Top && mouseY < button4Bottom && states == 'game over'){
        states = "start page";
    }


}
class Ball {
    constructor(x, y, r, g, b, speed){
        this.xPos=x;
        this.yPos=y;
        this.redValue=r;
        this.greenValue=g;
        this.blueValue=b;
        this.speedValue=speed;
    }
}
