class Ball {
  constructor(x, y, r) {

    this.body = Bodies.circle(x, y, r, ball_options);
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r);
    pop();
  }
}