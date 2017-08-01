function saladBowl () {
  this.x = width / 2; // starts at middle of window

  this.show = function() {
    fill(255);
    rect(this.x, height-20, 20, 20);
  };

  this.move = function(dir) {
    this.x += dir;
  };
}
