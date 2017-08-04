// Using p5 JS framework which has a setup and draw function so it starts the program and draws loops for animation over and over again

let bowl;
let goodIngredients = [];
let badIngredients = [];
let specialIngredients = [];
let imgSpinach;
let imgTomato;
let imgPizza;
let imgMushroom;

function preload() {
    imgSpinach = loadImage('images/spinach.png');
    imgTomato = loadImage('images/tomato.png');
    imgPizza = loadImage('images/pizza.png');
    imgMushroom = loadImage('images/mushroom.png');
}

// CONSTRUCTOR FUNCTION
function setup() {
  createCanvas(500, 600);
  bowl = new saladBowl();
  resetGame();
  img = loadImage("images/background.png");
  // img.crossOrigin = "Anonymous";

  // let button = createButton("RESET GAME");
  // button.mousePressed(resetGame);

  // noLoop();
}

function resetGame() {
  for (let i = 0; i < 8; i++) {
    goodIngredients[i] = new goodIngredient();
  }

  for (let j = 0; j < 6; j++) {
    badIngredients[j] = new badIngredient();
  }

  for (let k = 0; k < 1; k++) {
    specialIngredients[k] = new specialIngredient();
  }
}

// fcn is always being called
function draw() {
  // background(51);
  image(img, 0, 0);
  image(img, 0, height, img.width, img.height);
  bowl.show();
  bowl.move();

  for (let i = 0; i < goodIngredients.length; i++) {
    goodIngredients[i].show();
    goodIngredients[i].fall();
    let growCount = 0;
    if (goodIngredients[i].hits(bowl)) {
      bowl.grow();
      growCount++;
      goodIngredients[i].destroy();
    }
    if (growCount === goodIngredients.length) {
      gameOver();
      console.log("YOU WIN!");
    }
  }

  for (let j = 0; j < badIngredients.length; j++) {
    badIngredients[j].show();
    badIngredients[j].fall();
    if (badIngredients[j].hits(bowl)) {
      gameOver(); // which resets game
      console.log("GAME OVER");
      // let button = createButton("RESET GAME");
      // button.mousePressed(resetGame);
    }
  }

  for (let k = 0; k < specialIngredients.length; k++) {
    specialIngredients[k].show();
    specialIngredients[k].fall();
    if (specialIngredients[k].hits(bowl)) {
      specialIngredients[k].destroy();
      bowl.shrink();
      // console.log("GAME OVER");
    }
  }

  // LOGIC TO DELETE INGREDIENT WHEN HITS SALAD BOWL
  // want to delete ingredient starting at the end of the array
  for (let m = goodIngredients.length - 1; m >= 0; m--) {
    if (goodIngredients[m].toDelete) {
      goodIngredients.splice(m, 1);
    }
  }

  for (let n = badIngredients.length - 1; n >= 0; n--) {
    if (badIngredients[n].toDelete) {
      badIngredients.splice(n, 1);
    }
  }

  for (let o = specialIngredients.length - 1; o >= 0; o--) {
    if (specialIngredients[o].toDelete) {
      specialIngredients.splice(o, 1);
    }
  }
}

function gameOver() {
  noLoop();
  // if (keyCode === ENTER) {
  //   console.log("ENTER");
  //   setup();
  // }
}

function keyReleased() {
  bowl.setDir(0);
}

function keyPressed() {
  // if (key === " ") {
  //   var drop = new Drop(ingredient.x, ingredient.y); // height is bottom of the screen
  //   goodIngredients.push(drop);
  // }

  if (keyCode === ENTER) {
    console.log("ENTER");
    setup();
    // resetGame();
    // draw();
    loop();
  }
  if (keyCode === RIGHT_ARROW) {
    bowl.setDir(1); // the idea is that bowl is always moving, but you're only setting direction when key is pressed
  } else if (keyCode === LEFT_ARROW) {
    bowl.setDir(-1);
  }
}
