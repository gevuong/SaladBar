// Using p5 JS framework which has a setup and draw function so it starts the program and draws loops for animation over and over again
let bowl;
let ingredient;
let drops = [];
// let img;

// CONSTRUCTOR FUNCTION
function setup() {
  createCanvas(500, 600);
  bowl = new saladBowl();
  ingredient = new saladIngredient();
  // img = loadImage("images/background.png");

  for (var i = 0; i < 6; i++) {
    drops[i] = new Drop()
  }
}

// fcn is always being called
function draw() {
  background(51);
  // image(img, 0, 0);
  // image(img, 0, height / 2, img.width, img.height);
  bowl.show();
  bowl.move();
  // ingredient.show();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].fall();
    if (drops[i].hits(bowl)) {
      console.log("hits");
      bowl.grow();
      drops[i].destroy();
    }
  }

  // want to delete drop beginning at the end of the array
  for (var i = drops.length - 1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
}

function keyReleased() {
  bowl.setDir(0);
}

function keyPressed() {
  // if (key === " ") {
  //   var drop = new Drop(ingredient.x, ingredient.y); // height is bottom of the screen
  //   drops.push(drop);
  // }
  if (keyCode === RIGHT_ARROW) {
    bowl.setDir(1); // the idea is that bowl is always moving, but you're only setting direction when key is pressed
  } else if (keyCode === LEFT_ARROW) {
    bowl.setDir(-1);
  }
}
