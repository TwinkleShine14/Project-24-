
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	wall1= createSprite(750, 610, 20, 100 )
	wall1.shapeColor = color (245, 27,0)
	wall3= createSprite(550, 610, 20, 100 )
	wall3.shapeColor = color (345, 27,0)
	base2= createSprite(650, 650, 200, 20)
	base2.shapeColor = color (245, 27,0)


	engine = Engine.create();
	world = engine.world;

	Paper1 = new paper (100,400,10);
	

	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	World.add(world, ground);
ground.shapeColor= color ("green")
	wallbase = Bodies.rectangle(650, 640, 200, 20, {isStatic:true})
	World.add(world, wallbase)

	wallleft = Bodies.rectangle(550, 620, 20, 100, {isStatic:true})
	World.add(world, wallleft)

	wallright = Bodies.rectangle(750, 620, 20, 100, {isStatic:true})
	World.add(world, wallright)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Paper1.display();

  drawSprites();
 
  wall1.x=wall1.position.x
  wall1.y=wall1.position.y

  wall3.x=wall3.position.x
  wall3.y=wall3.position.y

  base2.x=base2.position.x
  base2.y=base2.position.y
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.applyForce(Paper1.body,Paper1.body.position, {x:15,y:-15})}
	}