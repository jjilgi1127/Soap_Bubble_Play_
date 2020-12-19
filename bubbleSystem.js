class BubbleSystem {

  constructor(position) {
    this.origin = position.copy();
    this.bubbles = [];
  }

  addBubble() {
    let r = random(1);
    if (r < 0.5) {
      this.bubbles.push(new Bubble(this.origin));
    } else {
      this.bubbles.push(new Bubble50(this.origin));
    }
  }
  fly() {
    for (let bubble of this.bubbles) {
      bubble.fly();
    }
    this.bubbles = this.bubbles.filter(bubble =>!bubble.pop());
  }
}
