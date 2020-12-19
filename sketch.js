let bubbleSystem;

function setup(){
  createCanvas(600,400);
  bubbleSystem = new BubbleSystem(createVector(width/2,50));


}

function draw(){
  background(149,219,255);
    bubbleSystem.fly();
}

function mousePressed(){
  bubbleSystem.origin = createVector(500,300);
  bubbleSystem.addBubble();
}
