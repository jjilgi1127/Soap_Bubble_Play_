class Bubble{

  constructor(position){
    this.acceleration = createVector(0,0.15);
    this.velocity = createVector(random(-2,2), random(-2,0));
    this.position = position.copy();
  }

  fly(){
    this.update();
    this.blow();
  }

  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.contactEdge();
  }

  contactEdge(){
    if(this.position.y > height){
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }
  blow(){
    noStroke();
    fill(255,80);
    ellipse(500,300,random(30,70));
  }

}
