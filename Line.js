class Line extends Bubble{

  constructor(position){

    super(position);

    this.w = 12
  }
    display() {
  // rectMode(CENTER);
  // fill(255, this.lifespan);
  stroke(255, this.lifespan);
  strokeWeight(2);
  push();
  translate(this.position.x, this.position.y);
  var theta = map(this.position.x, 0, width, TWO_PI*-2, TWO_PI * 2);
  rotate(theta);
  line(0, 0, 1, 1);
  // point(0, 0);
  pop();
}
}
