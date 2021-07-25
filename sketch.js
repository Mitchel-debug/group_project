let ballArray = [];
let appleImage;
let backgroundImage;
let characterXpos = 500;
let characterYpos = 400;

// Loads the images
function preload(){
    appleImage = loadImage("images/apple.png");
    backgroundImage = loadImage("images/background_2.png");
    charaterImage = loadImage("images/character.png");    
}

// Create a canvas and generate random ball
function setup(){
    createCanvas(1000,500);
    for (let i = 0; i < 1; i++) {
        let temp = new Ball(random(0, 1000), 250, 0, 255,0, random(2, 5));
        ballArray.push(temp);
    }

}
function draw() {
    background(backgroundImage);
    // appleImages = image(appleImage, ballArray[i].xPos, ballArray[i].yPos, 50, 50);
    for(let i=0; i < ballArray.length; i++){
        fill(ballArray[i].redValue,ballArray[i].greenValue, ballArray[i].redValue);
        image(appleImage , ballArray[i].xPos, ballArray[i].yPos, 75, 75);
        ballArray[i].yPos += ballArray[i].speedValue;
        if(ballArray[i].yPos > 525) {
            ballArray[i].yPos =-25;
            // ballArray.splice(i, i)
    
        }
    }

    image(charaterImage, characterXpos, characterYpos, 200, 100);

    if (keyIsDown(LEFT_ARROW)){
        characterXpos -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)){
        characterXpos += 3;
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
