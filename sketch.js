const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImage = loadImage("images/GamingBackground.png");
}

function setup() {
	createCanvas(900,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (200, 500, 700, 15);
  superhero= new Superhero(120,50,100,100);
  attach=new Throw(superhero.body,{x:120,y:45});
  block1 = new Block(360,315,50,50);  
  block2 = new Block(280,200,50,50);
  block3 = new Block(280,200,50,50);
  block4 = new Block(280,200,50,50);
  block5 = new Block(280,200,50,50);
  block6 = new Block(280,200,50,50);
  block7 = new Block(280,210,50,50);
  block8 = new Block(360,315,50,50);
  block9 = new Block(360,315,50,50);
  block10 = new Block(360,315,50,50);
  block11 = new Block(360,315,50,50);
  block12 = new Block(430,315,50,50);
  block13 = new Block(430,315,50,50);
  block14 = new Block(430,315,50,50);
  monster = new Monster(360,200,100,100);
  
  

	Engine.run(engine);
  
}


function draw() {
  
  background(backgroundImage);

  
   superhero.display();
  ground.display();
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  monster.display();
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

//function mouseReleased(){
	//attach.fly();
//}



