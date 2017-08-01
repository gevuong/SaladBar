function saladBowl () {
  this.x = width / 2; // starts at middle of window
  this.xdir = 0;

  this.show = function() {
    fill(255);
    rect(this.x, height-20, 20, 20);
  };

  this.setDir = function(dir) {
      this.xdir = dir;
  };

  this.move = function(dir) {
    this.x += this.xdir * 3;
  };
}
