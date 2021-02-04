/* Formal elements:
 * The major formal elements used are shapes, noise, movement. 
 * The star shape moves on its own and will change directions on wall collisions as well as on user input.
 * Furthermore, colors will change randomly depending on the user input. 
 * 
 * How to interact:
 * Left and right arrow to change directions of 
 * Up arrow key to change to color to a random darker color
 * Down arrow key to change the color to a random lighter color
 * Space to change to color to black
 * 
 */ 


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

let _triangle1 = {
    x1 : 20,
    x2 : 45,
    x3 : 75,
    y1 : 65,
    y2 : 20,
    y3 : 65
};

let _triangle2 = {
    x1 : 20,
    x2 : 45,
    x3 : 75,
    y1 : 30,
    y2 : 75,
    y3 : 30
};


let mappedMouseY = 0;

let cnv;

document.onkeydown = checkKey;

let _noise = 0.0;

//Setup the canvas
function setup() {

    //Set canvas and clicker
    cnv = createCanvas(windowWidth,windowHeight);

    //Set the initial colors
    changeColor(false);

    strokeWeight(2);    //Set stroke weight

    background(0,0,0); //Set background
}

function draw() {

    mappedMouseY = map(mouseY, 0, windowHeight, 0, 128);


    _noise = _noise + 0.01;


    drawStar();
}

//Draw the ellipse 
function drawStar() {
    
    triangle(_triangle1.x1,_triangle1.y1,_triangle1.x2,_triangle1.y2,_triangle1.x3,_triangle1.y3 );
    triangle(_triangle2.x1,_triangle2.y1,_triangle2.x2,_triangle2.y2,_triangle2.x3,_triangle2.y3 );

    
    if ((_triangle1.x3 >= windowWidth && _ellipse.XSpeed >= 0) || (_triangle1.x1 <= 0 && _ellipse.XSpeed < 0)) {
        if (_ellipse.XSpeed < 0)
            _ellipse.XSpeed = -1 * (noise(_noise) * 6 + 5)
        else
            _ellipse.XSpeed = (noise(_noise) * 6)  + 5

        _ellipse.XSpeed*=-1;
    }
    //Bounce between the max and min width
    if ((_triangle2.y2 >= windowHeight &&_ellipse.YSpeed >= 0) || (_triangle1.y1 <= 0 && _ellipse.YSpeed < 0)) {
        if (_ellipse.YSpeed < 0)
            _ellipse.YSpeed = -1 * (noise(_noise) * 6 + 5)
        else
            _ellipse.YSpeed = (noise(_noise) * 6)  + 5
        
        _ellipse.YSpeed*=-1;
    }

    _triangle1.x1+=_ellipse.XSpeed;
    _triangle1.y1+=_ellipse.YSpeed;
    _triangle1.x2+=_ellipse.XSpeed;
    _triangle1.y2+=_ellipse.YSpeed;
    _triangle1.x3+=_ellipse.XSpeed;
    _triangle1.y3+=_ellipse.YSpeed;
    _triangle2.x1+=_ellipse.XSpeed;
    _triangle2.y1+=_ellipse.YSpeed;
    _triangle2.x2+=_ellipse.XSpeed;
    _triangle2.y2+=_ellipse.YSpeed;
    _triangle2.x3+=_ellipse.XSpeed;
    _triangle2.y3+=_ellipse.YSpeed;

    /*  NOT USED
    ellipseArray.push(e);

    for (let i = 0; i < ellipseArray.length; i++) {
        ellipseArray[i].show();
    }

    if (ellipseArray.length > 2000) {
        ellipseArray.splice(0,2);
    } */
 

    /*
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
    _ellipse.Y = _ellipse.Y + _ellipse.YSpeed; */
}

function changeColor(type) {

    let init = 0;

    if (type == true) {
        init = Math.floor(Math.random() * 127);
    }

    //Set the color
    fill(Math.floor(Math.random() * 127) + init, Math.floor(Math.random() * 127) + init, Math.floor(Math.random() * 127) + init);

    //Set the stroke
    stroke(Math.floor(Math.random() * 127) + init, Math.floor(Math.random() * 127) + init, Math.floor(Math.random() * 127) + init);
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
        changeColor(false);
   }
   else if (e.keyCode == 40) {
        changeColor(true);
   }
}