// Using p5 JS framework which has a setup and draw function so it starts the program and draws loops for animation over and over again
var bowl;
var ingredient;
var drops = [];

// CONSTRUCTOR FUNCTION
function setup() {
  createCanvas(500, 600);
  bowl = new saladBowl();
  ingredient = new saladIngredient();
  // drops = new Drop(width / 2, height / 2);
}

// fcn is always being called
function draw() {
  background(51);
  bowl.show();
  bowl.move();
  ingredient.show();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
  }

  if (drops.hits(ingredient)) {
    let count = 0;
    if (count === 0) {
      ingredient.grow();
      console.log("hits");
    }
      count++;
  }
}

function keyReleased() {
  bowl.setDir(0);
}

function keyPressed() {
  if (key === " ") {
    var drop = new Drop(width / 2, height / 2); // height is bottom of the screen
    drops.push(drop);
  }
  if (keyCode === RIGHT_ARROW) {
    bowl.setDir(1); // the idea is that bowl is always moving, but you're only setting direction when key is pressed
  } else if (keyCode === LEFT_ARROW) {
    bowl.setDir(-1);
  }
}
