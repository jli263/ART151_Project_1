let cnv;
let ellipseX = 30;
let ellipseY = 30;
let ellipseXSpeed = 5;
let ellipseYSpeed = 5;


//Setup the canvas
function setup() {

    //Set canvas and clicker
    cnv = createCanvas(windowWidth,windowHeight);
    cnv.mouseClicked(changeColor);

    background(0,0,0); //Set background
}

function draw() {
    //background(0,0,0);

    drawEllipse();
}

//Draw the ellipse 
function drawEllipse() {

    strokeWeight(3);

    ellipse(ellipseX, ellipseY, 50, 50);

    //Bounce between the max and min width
    if (ellipseX > windowWidth-30 || ellipseX < 30) {
        ellipseXSpeed*=-1;
    }
    //Bounce between the max and min width
    if (ellipseY > windowHeight-30 || ellipseY < 30) {
        ellipseYSpeed*=-1;
    }

    //Move the ellipse
    ellipseX = ellipseX + ellipseXSpeed;
    ellipseY = ellipseY + ellipseYSpeed;
}

//Change fill and stroke color
function changeColor() {
    //Set the color
    fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255));

    //Set the stroke
    stroke(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255));
}