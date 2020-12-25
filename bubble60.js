
class Bubble60 extends Bubble{

  constructor(position){
   super(position);
  }
  
  blow(display){
    noStroke();
    fill(230,166,230,80);
    ellipse(this.position.x,this.position.y,60,60);
  }
}