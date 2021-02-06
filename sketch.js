const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,mango14,mango15;
var chain;
var tree,treeImage;
var boy,boyImage;

function preload()
{
	boyImage = loadImage("Sprites/boy.png");
	treeImage = loadImage("Sprites/tree.png");
}

function setup() {
	createCanvas(1200, 600);

	boy = createSprite(200,530,50,50);
	boy.addImage(boyImage);
	boy.scale=0.1;

	


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,590,1200,20);
	stone = new Stone(400,400,40);
	//tree = new Tree(900,330,400,550);
	chain = new Launcher(stone.body,{x:150,y:470});

	mango1 = new Mango(1000,200,40);
	mango2 = new Mango(1000,250,40);
	mango3 = new Mango(950,250,30);
	mango4 = new Mango(800,300,40);
	mango5 = new Mango(820,180,30);
	mango6 = new Mango(900,200,40);
	//mango7 = new Mango(950,90,20,10);
	mango8 = new Mango(800,250,40);
	mango9 = new Mango(750,300,40);
	mango10 = new Mango(820,180,40);
	mango11 = new Mango(960,150,40);
	mango12 = new Mango(850,190,30);
	mango13 = new Mango(900,280,40);
	mango14 = new Mango(1050,300,40);
	mango15 = new Mango(1040,220,34);


	Engine.run(engine);

	tree = createSprite(900,350,50,50);
	tree.addImage(treeImage);
	tree.scale=0.4;
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  drawSprites();
  
  ground.display();
  stone.display();
  //tree.display();
  chain.display();

  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
  detectCollision(mango6,stone);
  detectCollision(mango8,stone);
  detectCollision(mango9,stone);
  detectCollision(mango10,stone);
  detectCollision(mango11,stone);
  detectCollision(mango12,stone);
  detectCollision(mango13,stone);
  detectCollision(mango14,stone);
  detectCollision(mango15,stone);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  //mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();

  
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});
}
function mouseReleased(){
    chain.fly();
}
function detectCollision(lmango,lstone){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r +lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
  if(keyCode == 32){
    Matter.Body.setPosition(stone.body,{x:150,y:470});
    chain.attach(stone.body);
  }
}