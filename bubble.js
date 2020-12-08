class Bubble{

  constructor(position){
    this.acc = createVector(-0.005,-0.004);
    this.vel = createVector(random(-0.001,0), random(0,0.001));
    this.pos = position.copy();
  }

  fly(){
    this.update();
    this.blow();
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.contactEdge();
  }

  contactEdge(){
    if(this.pos.y > height){
      this.vel.y *= -1;
      this.pos.y = height;
    }
  }
  blow(){
    noStroke();
    fill(255,80);
    ellipse(500,300,random(30,70));
  }

}
