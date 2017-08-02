function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 7;
  this.toDelete = false;
  
  this.show = function() {
    fill(100, 255, 100);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.hits = function(ingredient) {
    var d = dist(this.x, this.y, ingredient.x, ingredient.y);
    if (d < this.r + ingredient.r) { // if sum of radius of drop and ingredient is greater than relative distance, then drop is within ingredient
      return true;
    } else {
      return false;
    }
  };

  this.destroy = function() {
    this.toDelete = true;
  };

  this.move = function() {
    this.y = this.y - 3; // - 1 moves drop up
  };
}
