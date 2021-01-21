let cnv;

class myEllipse {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    setX(x) {
        this.x = x;
    }

    show() {
        strokeWeight(2);        //Set stroke weight
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

document.onkeydown = checkKey;

//Setup the canvas
function setup() {

    //Set canvas and clicker
    cnv = createCanvas(windowWidth,windowHeight);
    cnv.mouseClicked(changeColorAndRot);

    //Set the initial colors
    changeColor();

    background(0,0,0); //Set background
}

function draw() {
    //background(0,0,0);

    drawEllipse();
}

//Draw the ellipse 
function drawEllipse() {

    let e = new myEllipse(_ellipse.X,_ellipse.Y,50,50);
    ellipseArray.push(e);

    e.show();
    //ellipse(_ellipse.X, _ellipse.Y, 50, 50);        //Draw the ellipse

    console.log(ellipseArray.length);

   /* if (ellipseArray.length > 100) {
        ellipseArray.
        ellipseArray.splice(0,1);
    } */

    //Bounce between the max and min width
    if (_ellipse.X > windowWidth-30 || _ellipse.X < 30) {
        _ellipse.XSpeed*=-1;
    }
    //Bounce between the max and min width
    if (_ellipse.Y > windowHeight-30 || _ellipse.Y < 30) {
        _ellipse.YSpeed*=-1;
    }

    //Move the ellipse
    _ellipse.X = _ellipse.X + _ellipse.XSpeed;
    _ellipse.Y = _ellipse.Y + _ellipse.YSpeed;
}

function changeColor() {
    //Set the color
    fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255));

    //Set the stroke
    stroke(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255), 50);
}

//Change fill and stroke color
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

    function checkKey(e) {

        console.log("hel");

        e = e || window.event;

        if (e.keyCode == '37') {
            _ellipse.YSpeed*=1;
            _ellipse.XSpeed*=-1;
        }
        else if (e.KeyCode == '39') {
            _ellipse.YSpeed*=-1;
            _ellipse.XSpeed*=1;
        }
    }
}