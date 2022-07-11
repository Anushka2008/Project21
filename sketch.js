var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var ground 
var leftWall, rightWall
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var balls_options={
		isStatic:false,
		resitution: 0.3, 
		friction: 0,
		density: 1.2
	}

	ground= new Ground(800,690,1600,10)
	leftWall= new Ground(1000,635,10,100)
	rightWall= new Ground(1200,635,10,100)
	ball=Bodies.circle(500,100,20,balls_options)
	World.add(world,ball);


	
  

	Engine.run(engine);

}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
ground.display();
leftWall.display();
rightWall.display();
ellipse(ball.position.x, ball.position.y,40,40)
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-60})
	}
}
