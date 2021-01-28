class myEllipse {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    show() {
        ellipse(this.x, this.y, this.w, this.h);        //Draw the ellipse
    }
}

let _ellipse = {
    X : 30,
    Y : 30,
    XSpeed : 5,
    YSpeed : 5
};

let ellipseArray = [];

let mappedMouseY = 0;

let cnv;

document.onkeydown = checkKey;

//Setup the canvas
function setup() {

    //Set canvas and clicker
    cnv = createCanvas(windowWidth,windowHeight);
    cnv.mouseClicked(changeColor);

    //Set the initial colors
    changeColor();

    strokeWeight(2);    //Set stroke weight

    background(0,0,0); //Set background
}

function draw() {

    mappedMouseY = map(mouseY, 0, windowHeight, 0, 128);

    //background("#ffffff01");

    drawEllipse();
}

//Draw the ellipse 
function drawEllipse() {

    let e = new myEllipse(_ellipse.X,_ellipse.Y,50,50);
    e.show();
    
    /*  NOT USED
    ellipseArray.push(e);

    console.log(ellipseArray.length);

    for (let i = 0; i < ellipseArray.length; i++) {
        ellipseArray[i].show();
    }

    if (ellipseArray.length > 2000) {
        ellipseArray.splice(0,2);
    } */
 
    //Bounce between the max and min width
    if (_ellipse.X > windowWidth-30 || _ellipse.X < 30) {
        _ellipse.XSpeed*=-1;
    }
    //Bounce between the max and min width
    if (_ellipse.Y > windowHeight-20 || _ellipse.Y < 20) {
        _ellipse.YSpeed*=-1;
    }

    //Move the ellipse
    _ellipse.X = _ellipse.X + _ellipse.XSpeed;
    _ellipse.Y = _ellipse.Y + _ellipse.YSpeed;
}

function changeColor() {
    //Set the color
    fill(Math.floor(Math.random() * 255) + mappedMouseY, Math.floor(Math.random() * 255) + mappedMouseY, Math.floor(Math.random() * 255) + mappedMouseY);

    //Set the stroke
    stroke(Math.floor(Math.random() * 255) + mappedMouseY, Math.floor(Math.random() * 255) + mappedMouseY, Math.floor(Math.random() * 255) + mappedMouseY, 50);
}

//Change fill and stroke color -- NOT USED
function changeColorAndRot() {
   
    changeColor();

    let randNum = Math.floor(Math.random() * 4);

    if (randNum == 0){
        _ellipse.YSpeed*=-1;
        _ellipse.XSpeed*=-1;
    }
    else if (randNum == 1 || randNum == 3) {
        _ellipse.YSpeed*=1;
        _ellipse.XSpeed*=-1;
    }
    else if (randNum == 2 || randNum == 4) {
        _ellipse.YSpeed*=-1;
        _ellipse.XSpeed*=1;
    }
}

function checkKey(e) {

    e = e || window.event;
    
    //Check for the keyCode
    if (e.keyCode == 37) {
        _ellipse.YSpeed*=-1;
        _ellipse.XSpeed*=1;
    }
    else if (e.keyCode == 39) {
        _ellipse.YSpeed*=1;
        _ellipse.XSpeed*=-1;
    }
    else if(e.keyCode == 32) {
        //Set color to black
        fill(0);
        stroke(0);
    }
   else if (e.keyCode == 38) {

   }
   else if (e.keyCode == 40) {

   }
}