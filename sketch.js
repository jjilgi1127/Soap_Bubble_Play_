let bubbleSystem;

function setup(){
  creatCanvas(600,400);
  bubbleSystem = new bubbleSystem(createVector(width/2,50));
}

function draw(){
  background(149,219,255);
  bubbleSystem.blow();
}

function mouseDragged(e){
  bubbleSystem.origin = createVector(500,300);
  bubbleSystem.addbubble();
  return false;
}
