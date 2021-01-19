
let ellipseX = 30;
let ellipseY = 30;
let ellipseXSpeed = 5;
let ellipseYSpeed = 5;

//Setup the canvas
function setup() {
    createCanvas(windowWidth,windowHeight);
    background(0,0,0);

}


function draw() {
    //background(0,0,0);

    drawEllipse();
    //Added a circle
    //circle(500, 400, 60);
}

//Draw the ellipse 
function drawEllipse() {

    //Set the color
    fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255));

    //Set the stroke
    stroke(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255));
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

    ellipseX = ellipseX + ellipseXSpeed;
    ellipseY = ellipseY + ellipseYSpeed;
}