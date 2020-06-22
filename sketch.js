var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ball,ground;
var box1, box2, box3 ,B1, B2, B3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 200);


	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 180, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 ball = new Ball(100, 50);


	
	box1 = createSprite(500, 185, 200, 20);
	box2 = createSprite(400, 150, 20, 100);
	box3 = createSprite(600, 150, 20, 100);
	box1.shapeColor = "green";
	box2.shapeColor = "green";
	box3.shapeColor = "green";

	B1 = Bodies.rectangle(box1.x, box1.y, box1.width, box1.height , {isStatic:true} );
	World.add(world, B1);
	
	B2 = Bodies.rectangle(box2.x, box2.y, box2.width, box2.height , {isStatic:true} );
	World.add(world, B2);
	
	B3 = Bodies.rectangle(box3.x, box3.y, box3.width, box3.height , {isStatic:true} );
	World.add(world, B3);
  
  
	Engine.run(engine);

}


function draw() {
  ellipseMode(RADIUS);
  background(180);
  ball.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:12, y:-12})
	}
}


