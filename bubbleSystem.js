class BubbleSystem {

  constructor(position) {
    this.origin = position.copy();
    this.bubbles = [];
  }

  addBubble() {
    let r = random(1);
    if (r < 0.6) {
      this.bubbles.push(new Bubble(this.origin));
    } else { 
      this.bubbles.push(new Bubble50(this.origin));
      this.bubbles.push(new Bubble60(this.origin));
    }
  }
  fly() {
    for (let bubble of this.bubbles) {
      bubble.fly();
    }
    this.bubbles = this.bubbles.filter(bubble =>!bubble.pop());
  }
}
