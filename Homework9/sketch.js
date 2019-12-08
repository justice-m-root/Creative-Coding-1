function setup() {
  createCanvas(300,500);
}

function draw() {
  background(115, 60, 50);
  circle(150,100,80)
  fill(189,187,187)
  triangle(120, 250, 150, 140, 180, 250);
  line(130, 250, 130, 300);
  line(170, 250, 170, 300);
  stroke('black'); // Change the color
strokeWeight(3); // Make the points 10 pixels in size
point(135, 90);
point(155, 90);
rect(140,180,35,40);
line(160,170,160,190)
  textSize(32);
  text('Curly Girl', 150, 30);
  textSize(25);
  text('-Justice Root', 150, 400);
}