class Dust extends Bubble{

  constructor(position){

    super(position);

    this.w = 12
  }
    display() {
      noStroke();
  push();
  translate(this.position.x, this.postion.y);
  var theta = map(this.position.x, 0, width, TWO_PI*-2, TWO_PI * 2);
  rotate(theta);
  line(0, 0, 1, 1);
  // point(0, 0);
  pop();
}
}
