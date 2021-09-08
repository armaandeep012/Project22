const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var rope;

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  var roof_options = {
    isStatic: true
  }

  con = Matter.Constraint.create({
    bodyA: roof,
    pointA: { x: 0, y: 0 },
    bodyB: bob1,
    pointB: { x: 0, y: 0 }
  })

  World.add(world, con);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  roof = Bodies.rectangle(400, 100, 230, 20, roof_options);
  World.add(world, roof);

  var ball_options = {
    isStatic: true
}

  bob1 = Bodies.circle(200, 200, 35, ball_options);


  Engine.run(engine);


}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  rect(roof.position.x, roof.position.y, 230, 20);
  //call display() to show ropes here
  ellipseMode(CENTER);
  ellipse(this.body.position.x,y,r);
  //create ellipse shape for multiple bobs here
  bob1.display();

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x, con.pointA.y, ball.position.x, ball.position.y);
  pop();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
