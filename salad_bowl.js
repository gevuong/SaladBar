function saladBowl () {
  this.x = width / 2; // starts at middle of window
  this.y = height - 40;
  this.xdir = 0;
  this.width = 35;
  this.height = 35;

  this.show = function() {
    fill(225);
    arc(this.x, this.y, this.width * 2, this.height * 2, 0, PI, OPEN);
    // arc(x-coord, y-coord, width, height, angle to start, angle to stop, mode)
  };

  this.setDir = function(dir) {
    this.xdir = dir;
  };

  this.grow = function() {
    this.width = this.width + 4;
    this.height = this.height + 1;
  };

  this.shrink = function() {
    this.width = 35;
    this.height = 35;
  };

  this.move = function(dir) {
    this.x += this.xdir * 3;
  };
}
