function saladIngredient() {
  this.x = width / 2; // starts at middle of window
  this.y = 20;

  this.show = function() {
    fill(100, 255, 100);
    ellipse(this.x, this.y, 60, 40);
  };

  this.setDir = function(dir) {
      this.xdir = dir;
  };

  // this.move = function(dir) {
  //   this.x += this.xdir * 3;
  // };
}
