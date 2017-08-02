function saladIngredient() {
  this.x = width / 2; // starts at middle of window
  this.y = 20;
  this.r = 30;
  this.width = 30;
  this.height = 10;

  this.show = function() {
    fill(100, 255, 100);
    rectMode(CENTER);
    rect(this.x, this.y, this.width * 2, this.height * 2);
    // ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.grow = function() {
    // this.r = this.r + 1;
    this.width = this.width + 2;
    this.height = this.height + 1;
  };

  this.setDir = function(dir) {
      this.xdir = dir;
  };

  // this.move = function(dir) {
  //   this.x += this.xdir * 3;
  // };
}
