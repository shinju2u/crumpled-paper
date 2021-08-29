const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
// create ball options

// create ball  body
	
// create ground, right and left side wall using ground class
	

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
// display the ball ,ground, right and left side wall

 
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}
