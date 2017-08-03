function badIngredient() {
  // this.x = x;
  // this.y = y;

  this.x = random(width);
  this.y = random(-500, -50);
  this.yspeed = random(2, 5);

  this.r = 7;
  this.toDelete = false;

  this.show = function() {
    fill(255, 100, 100);
    // ellipse(this.x, this.y, this.r * 2, this.r * 2);
    ellipse(this.x, this.y, this.r * 5, this.r * 1.5);
  };

  // this.fall = function() {
  //   this.y = this.y + this.yspeed;
  // }

  this.hits = function(ingredient) {
    // var d = dist(this.x, this.y, ingredient.x, ingredient.y);
    // console.log(d);
    // if (d < this.r + ingredient.r) { // if sum of radius of drop and ingredient is greater than relative distance, then drop is within ingredient
    var d = dist(this.x, this.y, bowl.x, bowl.y);
    // console.log(d);
    if (d < this.r + bowl.width / 2) { // if sum of radius of drop and ingredient is greater than relative distance, then drop is within ingredient
      return true;
    } else {
      return false;
    }
  };

  this.destroy = function() {
    this.toDelete = true;
  };

  this.fall = function() {
    this.y = this.y + 3; // - 1 moves drop up

    if (this.y > height) {
      this.y = random(-500, -50);
    }
  };
}
