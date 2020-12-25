
class Bubble50 extends Bubble{

  constructor(position){
   super(position);
  }
  
  blow(display){
    noStroke();
    fill(0,153,255,80);
    ellipse(this.position.x,this.position.y,50,50);
  }
}