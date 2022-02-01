const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, npc1;
var backgroundImg,platform;
var pc1, slingshot;


var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

    //box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    npc1 = new Npc(810, 350);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    box5 = new Box(810,160,70,70);

    pc1 = new Pc(200,50);

    //log6 = new Log(230,180,80, PI/2);
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
   // box1.display();
    box2.display();
    ground.display();
    npc1.display();
    npc1.score();

    box3.display();
    box4.display();

    box5.display();

    pc1.display(); 

    chooseCharacter();
}



async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bgf.gif";
    }
    else{
        bg = "sprites/bgf.gif";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

function chooseCharacter(){
    if(keyCode === 79){
        pc1.changeAnimation("sprites/jotaro.gif");
    }
}