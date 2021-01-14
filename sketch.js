function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    background(0,0,0);

    //Added a circle
    let c = color('magenta');
    fill(c);
    noStroke();
    circle(500, 400, 60);
}