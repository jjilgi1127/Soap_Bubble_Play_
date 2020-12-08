class bubbleSystem {

  constructor(position) {
    this.origin = position.copy();
    this.bubbles = [];
  }

  addParticle() {
    let r = random(1);
    if (r < 0.5) {
      this.bubbles.push(new bubble(this.origin));
    } else {
      // this.particles.push(new Confetti(this.origin));
      this.bubbles.push(new Line(this.origin));
    }
  }

  blow() {
    // Run every particle
    // ES6 for..of loop
    for (let bubble of this.bubbles) {
      bubble.blow();
    }

    // Filter removes any elements of the array that do not pass the test
    this.bubbles = this.bubbles.filter(bubble => !bubble.isDead());
  }
}
