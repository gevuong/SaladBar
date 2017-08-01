function saladBowl () {
  this.x = width / 2; // starts at middle of window

  this.show = function() {
    rect(this.x, 20, 20, 20, 20);
  };
}
