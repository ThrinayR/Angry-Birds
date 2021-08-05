
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var platform;
var bird
var box1
var box2
var box3
var box4
var box5
var stand1
var stand2
var pig1
var pig2
var log1
var log2
function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(0,780,1600,20);
    platform = new Ground(0,400,400,380);
    bird = new Bird(160,325,75,75);
    box1 = new Box(720,700,80,80);
    box2 = new Box(720,590,80,80);
    box3 = new Box(980,700,80,80);
    box4 = new Box(980,590,80,80);
    box5 = new Box(850,480,80,80);
    stand1 = new Stand(710,670,360,30);
    stand2 = new Stand(710,560,360,30);
    pig1 = new Pig(865,615,50,50);
    pig2 = new Pig(865,727,50,50);
    log1 = new Log(-800,-400,30,-PI/2)
    log2 = new Log(980,380,30,180)
}

function draw(){
    background(0);
    ground.display();
    platform.display();
    bird.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    stand1.display();
    stand2.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    Engine.update(engine);
    



    fill("white")
    text(mouseX+","+mouseY,mouseX,mouseY)
}

