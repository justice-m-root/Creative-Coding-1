//variables go up here
var x = 50
var y = 40
var a = 224
var b = 77
var c = 30
var mousey = 0
var mousex = 0
var diameter = 80
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  fill(44, 22, 234);
  rect(c, 20, 55, 55, 20);
  c++;
  if (c >= 800) {
    c -= 800;
  }
  stroke('white');
  strokeWeight(20);
  point(a, b);
  a++;
  if (a >= 800) {
    a -= 800;
    b += 100;
  }
  circle(x, y, diameter);
  if (x == 800) {
    textSize (32);
    fill ('red');
    text ('You Win!');
  }
ellipse(mousex, mousey, 15, 50);
textSize (32);
fill('yellow');
text('Exit', 800, y);

}
function mouseClicked() 
{  
  mousex = mouseX;
  mousey = mouseY;

}
function keyPressed() {
  if (key == 'd') {
    x += 15;
  }
  else if (key == 'a') {
    x -= 15;
  }
}