const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobone, bobtwo, bobthree, bobfour, bobfive, roof;

var ropeOne, ropeTwo, ropeThree, ropeFour, ropeFive;

function preload() {

}

function setup() {
    createCanvas(500, 500);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    roof = new Roof(250, 200);

    bobone = new Bob(150, 400, 50);
    bobtwo = new Bob(200, 400, 50);
    bobthree = new Bob(250, 400, 50);
    bobfour = new Bob(300, 400, 50);
    bobfive = new Bob(350, 400, 50);

    ropeOne = new Rope(bobone.body, roof.body, -100, 0);
    ropeTwo = new Rope(bobtwo.body, roof.body, -50, 0);
    ropeThree = new Rope(bobthree.body, roof.body, 0, 0);
    ropeFour = new Rope(bobfour.body, roof.body, 50, 0);
    ropeFive = new Rope(bobfive.body, roof.body, 100, 0);

    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(255);
    roof.display();

    ropeOne.display();
    ropeTwo.display();
    ropeThree.display();
    ropeFour.display();
    ropeFive.display();

    bobone.display();
    bobtwo.display();
    bobthree.display();
    bobfour.display();
    bobfive.display();

    drawSprites();

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(bobone.body, bobone.body.position, { x: -50, y: -45 });
    }
}