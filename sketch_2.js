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
let charcterSpeedX = 3;

// states is meant to be start page.
let states = 'start page';
let message1 = "EASY";
let message2 = "MEDIUM";
let message3 = "HARD";
let message4 = "Score: "

let score = 0;
let counter = 2;

let button1Left = (500 - 180);
let button1Right = (500 + 175);
let button1Top = (100 - 50);
let button1Down = (100 + 50);

let button2Left = (500 - 180);
let button2Right = (500 + 175);
let button2Top = (250 - 50);
let button2Down = (250 + 50);

let button3Left = (500 - 180);
let button3Right = (500 + 180);
let button3Top = (500 - 50);
let button3Bottom = (500 + 50);

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
}

// Create a canvas and generate random ball
function setup(){
    createCanvas(1000,500);
    // Class for the apples
    apple = new Ball(random(0, 1000), 250, 0, 255, 0, 2);
    ballArray.push(apple);
    // Class for the character
    character = new Ball(characterXpos, characterYpos, 0, 255, 0, 1);
    ballArray2.push(character);
    rectMode(CENTER);
    imageMode(CENTER);
    textAlign(CENTER);
}


function draw() {
    if (states == "start page"){
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
            ballArray[i].yPos += ballArray[i].speedValue;

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
            character.xPos -= character.speedValue;
        }

        if (keyIsDown(RIGHT_ARROW)){
            character.xPos += 3;
            character.xPos += character.speedValue;

        }
        

        appleLeft = apple.xPos - 35;
        appleRight = apple.xPos + 35;
        appleTop = apple.yPos - 35;
        appleBottom = apple.yPos + 35;

        characterLeft = character.xPos - 30;
        characterRight = character.xPos + 30;
        characterTop = character.yPos - 30;
        characterBottom = character.yPos + 50;


        if (appleLeft > characterRight || appleRight < characterLeft || appleTop > characterBottom || appleBottom < characterTop){
        
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

}

function mouseClicked(){
    if (mouseX > button1Left && mouseX < button1Right && mouseY > button1Top && mouseY < button1Down){
        states = 'main page';
    }

    if (mouseX > button2Left && mouseX < button2Right && mouseY > button2Top && mouseY < button2Down){
        states = 'main page';
    }

    if (mouseX > button3Left && mouseX < button3Right && mouseY > button3Top && mouseY < button3Bottom){
        states = 'main page';
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
