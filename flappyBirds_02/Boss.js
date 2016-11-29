function Boss() {
  this.pos = createVector(350, 300);
  this.r = random(HALF_PI, 3 * HALF_PI);
  
  this.move = function() {
    var v = createVector(cos(this.r), sin(this.r));
    v = v.mult(3);
    this.pos.add(v);
    ellipse(this.pos.x, this.pos.y, 30, 30);
  }
   
  this.hits = function(bird) {
    if (dist(this.pos.x, this.pos.y, bird.x, bird.y) < 60) {
      return true;
    }
    return false;
  }
}