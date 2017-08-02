// Using p5 JS framework which has a setup and draw function so it starts the program and draws loops for animation over and over again
var bowl;
var ingredient;
var drop;

// CONSTRUCTOR FUNCTION
function setup() {
  createCanvas(500, 600);
  bowl = new saladBowl();
  ingredient = new saladIngredient();
  drop = new Drop(width / 2, height / 2);
}

// fcn is always being called
function draw() {
  background(51);
  bowl.show();
  bowl.move();
  ingredient.show();
  drop.show();
  drop.move();

  if (drop.hits(ingredient)) {
    ingredient.grow;
    ingredient.show();
    // drop.absorb();
    console.log("hits");
  }
}

function keyReleased() {
  bowl.setDir(0);
}

function keyPressed() {
  // if (key === " ") {
  //   var drop = new Drop(bowl.x, height); // height is bottom of the screen
  //   drops.push(drop);
  // }
  if (keyCode === RIGHT_ARROW) {
    bowl.setDir(1); // the idea is that bowl is always moving, but you're only setting direction when key is pressed
  } else if (keyCode === LEFT_ARROW) {
    bowl.setDir(-1);
  }
}
