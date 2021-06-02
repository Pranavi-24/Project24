const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber;
var stone1,stone2,stone3,stone4,stone5,stone6;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,40,70);
    stone1 = new Stone(500,60,10);
    stone2 = new Stone(520,60,10);
    stone3 = new Stone(540,60,10);
    stone4 = new Stone(560,60,10);
    stone5 = new Stone(580,60,10);
    stone6 = new Stone(600,60,10);
    iron = new Iron(10,10,10,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    plane.display();
    hammer.display();
    rubber.display(); 
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    iron.display();
}