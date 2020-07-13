const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper;
var ground;
var engine;
var world;
var bodies;
//var bin;
var bin2;

function setup() {

	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,250);
	ground = new Ground(600,680,1200,20);
	//bin = new Bin(750,680);
	bin2 = new Bin(930,635);

  
}

function draw() {

  background(255);

  Engine.update(engine);
paper.display();
ground.display();
//bin.display();
bin2.display();
  drawSprites();
 
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-90});
    }
    
}
