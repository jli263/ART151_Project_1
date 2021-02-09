let XSpeed = 5;
let YSpeed = 5;

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

let cnv;

document.onkeydown = checkKey;

let _noise = 0.0;

let sizeLimit = 0;

//Setup the canvas
function setup() {

    alert("ART151 Project 1: Star Glazing" 
    + "\nFormal elements:"
    + "\nThe major formal elements used are color, noise, and movement."
    + "\nI incorporated these elements to make each generative drawing unique even if the user applied the same input."
    + "\nThe direction of the star changes based on noise and user input, while the color changes depending on the arrow keys."
    + "\nHow to interact:"
    + "\nLeft and right arrow to change the star's direction"
    + "\nUp arrow key to change to color to a random darker color"
    + "\nDown arrow key to change the color to a random lighter color"
    + "\nSpace to change to color to black"
    + "\nZ key to decrease the size of the star"
    + "\nX key to increase the size of the star");

    //Set canvas and clicker
    cnv = createCanvas(windowWidth,windowHeight);

    //Set the initial colors
    changeColor(false);

    strokeWeight(1.5);    //Set stroke weight

    background(0,0,0); //Set background
}

function draw() {
    _noise = _noise + 0.01;
    drawStar();
}


function drawStar() {
    
    //Draw the star
    triangle(_triangle1.x1,_triangle1.y1,_triangle1.x2,_triangle1.y2,_triangle1.x3,_triangle1.y3 );
    triangle(_triangle2.x1,_triangle2.y1,_triangle2.x2,_triangle2.y2,_triangle2.x3,_triangle2.y3 );

    //Bounce between max and min width
    if ((_triangle1.x3 >= windowWidth && XSpeed >= 0) || (_triangle1.x1 <= 0 && XSpeed < 0)) {
        if (XSpeed < 0)
            XSpeed = -1 * (noise(_noise) * 6 + 5)
        else
            XSpeed = (noise(_noise) * 6)  + 5

        XSpeed*=-1;
    }

    //Bounce between max and min height
    if ((_triangle2.y2 >= windowHeight && YSpeed >= 0) || (_triangle1.y2 <= 0 && YSpeed < 0)) {
        if (YSpeed < 0)
            YSpeed = -1 * (noise(_noise) * 6 + 5)
        else
            YSpeed = (noise(_noise) * 6)  + 5
        
        YSpeed*=-1;
    }

    //Change the location of the star
    _triangle1.x1+=XSpeed;
    _triangle1.y1+=YSpeed;
    _triangle1.x2+=XSpeed;
    _triangle1.y2+=YSpeed;
    _triangle1.x3+=XSpeed;
    _triangle1.y3+=YSpeed;
    _triangle2.x1+=XSpeed;
    _triangle2.y1+=YSpeed;
    _triangle2.x2+=XSpeed;
    _triangle2.y2+=YSpeed;
    _triangle2.x3+=XSpeed;
    _triangle2.y3+=YSpeed;
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

function checkKey(e) {

    e = e || window.event;
    
    //Check for the keyCode
    if (e.keyCode == 37) {
        YSpeed*=-1;
        XSpeed*=1;
    }
    else if (e.keyCode == 39) {
        YSpeed*=1;
        XSpeed*=-1;
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
   else if (e.keyCode == 88) {
       if(sizeLimit > -2) {
            sizeLimit--;

            _triangle1.x1-=15; 
            _triangle1.y1+=10;
            _triangle1.y2-=15; 
            _triangle1.x3+=15; 
            _triangle1.y3+=10;
            _triangle2.x1-=15; 
            _triangle2.y1-=10;
            _triangle2.y2+=15; 
            _triangle2.x3+=15; 
            _triangle2.y3-=10;
       }
   }
   else if (e.keyCode == 90) {
       if (sizeLimit < 2) {
            sizeLimit++;

            _triangle1.x1+=15; 
            _triangle1.y1-=10;
            _triangle1.y2+=15; 
            _triangle1.x3-=15; 
            _triangle1.y3-=10;
            _triangle2.x1+=15; 
            _triangle2.y1+=10;
            _triangle2.y2-=15; 
            _triangle2.x3-=15; 
            _triangle2.y3+=10;
       }
    }
}