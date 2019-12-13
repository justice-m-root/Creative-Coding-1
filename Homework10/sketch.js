var x = 150;
var a = 130;
var b = 250;
var c = 300;
var d = 135;
var e = 90;
var f = 32;
var movement = 1;
var movementa = 13;
var movementb = 25;
var movementc = 100;
var movementd = 40;
var movemente = 5;
var movementf = -5;
function setup() {
  createCanvas(300, 500);
  movement = Math.floor(Math.random() * 10 + 1);
  movementa = Math.floor(Math.random() * 10 + 1);
  movementb = Math.floor(Math.random() * 10 + 1);
  movementc = Math.floor(Math.random() * 10 + 1);
  movementd = Math.floor(Math.random() * 10 + 1);
  movemente = Math.floor(Math.random() * 10 + 1);
  movementf = Math.floor(Math.random() * 10 + 1);
}
function draw() {
  background(115, 60, 50);
  circle(x, 100, 80);
  if(x >= 300 || x <= 0)
  {
    movement *= -1; 
  }
  x += movement;
  fill(189, 187, 187);
  triangle(120, b, 150, 140, 180, b);
  if (b >= 300 || b >= 0)
  {
    movementb *= -1;
  }
  b += movementb;
  line(a, 250, a, 300);
  if (a >= 300 || a <= 0) {
    movementa *= -1;
  }
  a += movementa;
  line(170, b, 170, c);
  if (b >= 300 || b <= 0)
  {
    movementb *= -1;
  }
  b += movementb;
  if (c >= 300 || c <= 0)
  {
    movementc *= -1;
  }
  b += movementc;
  stroke('black'); // Change the color
  strokeWeight(3); // Make the points 10 pixels in size
  point(d, e);
  if (d >= 300 || d <= 0)
  {
    movementd *= -1;
  }
  d += movementd;
  if (e >= 300 || e <= 0)
  {
    movementd *= -1;
  }
  e += movementd;
  point(155, 90);
  rect(140, 180, 35, 40);
  line(160, 170, 160, 190);
  textSize(f);
  if (f >= 25 || f <=25)
  {
    movemente * 5;
  }
  f += movemente;
  if (f <= 0 || f >=0)
  {
    movementf * -5;
  }
  f = movementf;
  text('Curly Girl', 150, 30);
  textSize(25);
  text('-Justice Root', 150, 400);
}