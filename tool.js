class Tool{
  
  run(){
    this.display();
    this.isText();
    
}
  
  
  display(){
    
      noStroke();
  background(149,219,255);
    fill(215,95,201);
  ellipse(500,300,90,90);
  fill(149,219,255);
  ellipse(500,300,70,70);
  
  rectMode(CENTER);
  fill(215,95,201);
  rect(500,370,10,70);

    
  }
  
  isText(){ 
  textSize(20);
fill(0, 102, 153,180);
text('Please click on the mouse', 10, 380);}
}