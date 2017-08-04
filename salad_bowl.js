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
    this.width = this.width + 6;
    this.height = this.height + 1;
  };

  this.shrink = function() {
    this.width = 35;
    this.height = 35;
  };

  this.move = function() {
    console.log(this.x);
    console.log(this.width);
    if (this.x <= this.width && this.xdir === -1) {
    } else if (this.x >= 500 - this.width && this.xdir === 1) {
    } else {
      this.x += this.xdir * 3;
    }
  };
}
