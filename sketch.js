
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7;
var  box8,box9,box10,box11,box12;
var ground1,ground2,ground3;
var hexagon1,slingshot1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// row1
	push ();
	fill ("pink");
	 box1=new Box(450,570,50,50);
	 box2 = new Box(500,570,50,50);
	 box3 = new Box(550,570,50,50);
	 box4 = new Box(600,570,50,50);
	 box5 = new Box(650,570,50,50);
	 box6 = new Box(700,570,50,50);
	 box7 = new Box(750,570,50,50);
     pop ();
	 //row2
	 box8=new Box(500,540,50,50);
	 box9=new Box(550,540,50,50);
	 box10=new Box(600,540,50,50);
	 box11=new Box(650,540,50,50);
	 box12=new Box(700,540,50,50);

     //row4
	 box13=new Box(550,510,50,50);
	 box14=new Box(600,510,50,50);
	 box15=new Box(650,510,50,50);

	 box16=new Box(600,490,50,50);


	box17 = new Box(820,270,40,40);
	box18 = new Box(860,250,40,40);
	box19 = new Box(900,250,40,40);
	box20 = new Box(940,250,40,40);
	box21 = new Box(980,270,40,40);

	box22 = new Box(860,270,40,40);
	box23 = new Box(900,250,40,40);
	box24 = new Box(940,270,40,40);

	box25 = new Box(900,200,40,40);







     hexagon1=new hexagon(150,500,30);

	 slingshot1=new slingShot(hexagon1.body,{x:150,y:500});

	 ground1=new ground(600,600,370,10);
	 ground2=new ground(600,780,1200,20);
	 ground3 = new ground(900,300,220,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();



  slingshot1.display();

  hexagon1.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(hexagon1.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	  slingshot1.fly();
	}
	function keyPressed(){
		if(keyCode===32){
			slingshot1.attach(hexagon1.body);
		}
	}
