class Bubble{
  constructor(position){
    this.acceleration = createVector(random(-0.09,0),random(-0.07,0));
    this.velocity = createVector(random(-1,0), random(-1,0));
    this.position = position.copy();
    this.synth = new p5.MonoSynth();
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

  contactEdge() {
    if (this.position.y < 30 || this.position.x<30 ) {
      let tones = ["C3","E3", "G3", "C4", "E4", "G4", "C6", "D6", "E6"];
      this.synth.triggerAttack(tones[floor(random(9))]);
      this.synth.triggerRelease(random(0.1, 0.8));


    }
  }

  blow(){
    noStroke();
    fill(255,80);
    ellipse(this.position.x,this.position.y,70,70);
  }

   pop() {
    if (this.position.y < 30|| this.position.x<30) {
      return true;
    } else {
      return false;
    }
  }
}