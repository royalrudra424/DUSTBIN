
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1;
var dustbin1, dustbin2, dustbin3 , ball1;
var dustbin_img;

function preload(){
  dustbin_img=loadImage("bin.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;

  ball1 = new Ball(250,320,70);

  dustbin1=new dustbin(900,410,15,220);
  dustbin2 = new dustbin(1060,410,15,220);

  ground1 =new ground(600,392.5,1200,15); 
}
function draw() {
  background("grey");

  Engine.update(engine);
  ball1.display();
  dustbin1.display();
  dustbin2.display();
  ground1.display();
}

function keyPressed()
{
  if(keyCode === UP_ARROW){
    Body.applyForce(ball1.body,ball1.body.position,{x:900,y:-900});
  }

}

