let bubbleSystem;
let tool;

function setup(){
  createCanvas(600,400);

  tool = new Tool();
    bubbleSystem = new BubbleSystem(createVector(width/2,50));

  
}

function draw(){
  background(149,219,255);
      tool.run();
    bubbleSystem.fly();
}

function mousePressed(){
  bubbleSystem.origin = createVector(500,300);
  bubbleSystem.addBubble();
}