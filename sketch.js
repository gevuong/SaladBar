// Using p5 JS framework which has a setup and draw function so it starts the program and draws loops for animation over and over again
var bowl;

// CONSTRUCTOR FUNCTION
function setup() {
  createCanvas(500, 600);
  bowl = new saladBowl();
}

function draw() {
  background(51);
  bowl.show();
}

function keyReleased() {
  if (key != " ") {
    bowl.setDir(0);
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    bowl.move(1);
  } else if (keyCode === LEFT_ARROW) {
    bowl.move(-1);
  }
}
