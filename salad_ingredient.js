function saladIngredient() {
  this.x = width / 2; // starts at middle of window
  this.y = 20;
  this.r = 30;

  this.show = function() {
    fill(100, 255, 100);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.grow = function() {
    this.r = this.r + 1;
  };

  this.setDir = function(dir) {
      this.xdir = dir;
  };

  // this.move = function(dir) {
  //   this.x += this.xdir * 3;
  // };
}
