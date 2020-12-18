class BubbleSystem {

  constructor(position) {
    this.origin = position.copy();
    this.bubbles = [];
  }

  addbubble() {
    let r = random(1);
    if (r < 0.5) {
      this.bubbles.push(new Bubble(this.origin));
    } else {

      this.bubbles.push(new dust(this.origin));
    }
  }

  blow() {
    for (let bubble of this.bubbles) {
      bubble.blow();
    }
  }
}
