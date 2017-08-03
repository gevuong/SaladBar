// Using p5 JS framework which has a setup and draw function so it starts the program and draws loops for animation over and over again
let bowl;
// let ingredient;
let goodIngredients = [];
let badIngredients = [];
let specialIngredients = [];
// let img;

// CONSTRUCTOR FUNCTION
function setup() {
  createCanvas(500, 600);
  bowl = new saladBowl();
  // ingredient = new saladIngredient();

  img = loadImage("images/background.png");
  img.crossOrigin = "Anonymous";

  for (let i = 0; i < 6; i++) {
    goodIngredients[i] = new goodIngredient()
  }

  for (let j = 0; j < 6; j++) {
    badIngredients[j] = new badIngredient()
  }

  for (let k = 0; k < 2; k++) {
    specialIngredients[k] = new specialIngredient()
  }

  // noLoop();
  // redraw();
  // loop();
}

// fcn is always being called
function draw() {
  background(51);
  image(img, 0, 0);
  image(img, 0, height / 2, img.width, img.height);
  bowl.show();
  bowl.move();

  for (let i = 0; i < goodIngredients.length; i++) {
    goodIngredients[i].show();
    goodIngredients[i].fall();
    if (goodIngredients[i].hits(bowl)) {
      // console.log("hits");
      bowl.grow();
      goodIngredients[i].destroy();
    }
  }

  for (let j = 0; j < badIngredients.length; j++) {
    badIngredients[j].show();
    badIngredients[j].fall();
    if (badIngredients[j].hits(bowl)) {
      // gameOver(); // which resets game
      // console.log("GAME OVER");
    }
  }

  for (let k = 0; k < specialIngredients.length; k++) {
    specialIngredients[k].show();
    specialIngredients[k].fall();
    if (specialIngredients[k].hits(bowl)) {
      // gameOver(); // which resets game
      // console.log("GAME OVER");
    }
  }

  // want to delete ingredient starting at the end of the array
  for (let m = goodIngredients.length - 1; m >= 0; m--) {
    if (goodIngredients[m].toDelete) {
      goodIngredients.splice(m, 1);
    }
  }

  for (let n = specialIngredients.length - 1; n >= 0; n--) {
    if (specialIngredients[n].toDelete) {
      specialIngredients.splice(n, 1);
    }
  }
}

function gameOver() {

}

function keyReleased() {
  bowl.setDir(0);
}

function keyPressed() {
  // if (key === " ") {
  //   var drop = new Drop(ingredient.x, ingredient.y); // height is bottom of the screen
  //   goodIngredients.push(drop);
  // }
  if (keyCode === RIGHT_ARROW) {
    bowl.setDir(1); // the idea is that bowl is always moving, but you're only setting direction when key is pressed
  } else if (keyCode === LEFT_ARROW) {
    bowl.setDir(-1);
  }
}
