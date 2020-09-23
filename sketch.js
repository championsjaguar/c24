const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1,box3,box4,log2,pig2,log3,log4,box5,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,320,50,50);
    box2 = new Box(720,320,50,50);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(610,350);
    log1=new Log(610,300,270,PI/2);
    box3 = new Box(500,240,50,50);
    box4 = new Box(720,240,50,50);
    pig2 =new Pig(610,300);
    log2=new Log(610,220,270,PI/2);
    box5 = new Box(610,160,50,50);
    log3=new Log(550,150,120,PI/6);
    log4=new Log(700,150,120,-PI/7);
    bird1=new Bird(300,300);


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();

}