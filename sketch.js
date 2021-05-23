var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var engine, world;
var snow=[];
var backgroundImg;

function preload(){
  backgroundImg=loadImage("snow1.jpg");

}

function setup() {
  createCanvas(1200, 700);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    
 }
function draw() {
  background(backgroundImg);
  Engine.update(engine); 

 for(var h=0; h < snow.length;h++){
  snow[h].display();
 } 
  drawSprites();
}