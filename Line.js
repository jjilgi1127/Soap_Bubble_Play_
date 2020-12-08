class Line extends Bubble{

  constructor(position){

    super(pos);

    this.w = 12
  }
    display() {
  stroke(255, 80);
  strokeWeight(2);
  push();
  translate(this.pos.x, this.pos.y);
  var theta = map(this.pos.x, 0, width, TWO_PI*-2, TWO_PI * 2);
  rotate(theta);
  line(0, 0, 1, 1);
  // point(0, 0);
  pop();
}
}
