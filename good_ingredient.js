function goodIngredient() {
  this.x = random(width - 30);
  this.y = random(-500, -50);
  this.yspeed = random(2, 5);

  this.r = 9;
  this.toDelete = false;

  this.show = function() {
    fill(100, 255, 100);
    image(imgSpinach, this.x, this.y, 40, 40);
    image(imgTomato, this.x, this.y);
  };

  this.hits = function(ingredient) {
    // var d = dist(this.x, this.y, ingredient.x, ingredient.y);
    // if (d < this.r + ingredient.r) { // if sum of radius of drop and ingredient is greater than relative distance, then drop is within ingredient
    var d = dist(this.x, this.y, bowl.x, bowl.y);
    if (d < 45 / 2 + bowl.width / 2) { // if sum of radius of drop and ingredient is greater than relative distance, then drop is within ingredient
      return true;
    } else {
      return false;
    }
  };

  this.destroy = function() {
    this.toDelete = true;
  };

  this.fall = function() {
    this.y = this.y + this.yspeed; // - 1 moves drop up

    if (this.y > height) {
      this.y = random(-500, -50);
      this.x = random(width);
    }
  };
}
