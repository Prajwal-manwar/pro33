const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles;
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight = 300;
var score = 0;
var count = 0;
var gameState = "start";

function preload() {}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("lightblue");
  text(mouseX+","+mouseY, 30, 75);
  textSize(18);
  text("Score : " + score, 20, 40);
  fill("white");

  textSize(25);
  fill("blue");
  text("You have 5 chances to increase your score", 150, 320);

  textSize(23);
  text("500", 20, 640);
  text("400", 100, 640);
  text("300", 180, 640);
  text("200", 260, 640);
  text("100", 340, 640);
  text("100", 420, 640);
  text("200", 500, 640);
  text("300", 580, 640);
  text("400", 660, 640);
  text("500", 740, 640);
  Engine.update(engine);
  ground.display();

  if (gameState == "end") {
    textSize(90);
    text("GameOver", 150, 300);
    //return
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 760) {
      
            if (particle.body.position.x < 80) {
                    score = score + 500;
                    particle = null;

                if (count >= 5) gameState = "end";
      }

            else if (particle.body.position.x > 730 && particle.body.position.x < 800) {
                    score = score + 500;
                    particle = null;

                if (count >= 5) gameState = "end";}

            else if (particle.body.position.x > 650 && particle.body.position.x < 730) {
                    score = score + 400;
                    particle = null;

                if (count >= 5) gameState = "end";}

            else if (particle.body.position.x > 570 && particle.body.position.x < 650) {
                      score = score + 300;
                      particle = null;

                if (count >= 5) gameState = "end";}

            else if (particle.body.position.x > 490 && particle.body.position.x < 570) {
                      score = score + 200;
                      particle = null;

                if (count >= 5) gameState = "end";}
    
            else if (particle.body.position.x > 410 && particle.body.position.x < 490) {
                      score = score + 100;
                      particle = null;

                  if (count >= 5) gameState = "end";}
            else if (particle.body.position.x > 330 && particle.body.position.x < 410) {
                      score = score + 100;
                      particle = null;

                  if (count >= 5) gameState = "end";}
            else if (particle.body.position.x > 250 && particle.body.position.x < 330) {
                      score = score + 200;
                      particle = null;

                  if (count >= 5) gameState = "end";}
            else if (particle.body.position.x > 170 && particle.body.position.x < 250) {
                      score = score + 300;
                      particle = null;

                  if (count >= 5) gameState = "end";}
            else if (particle.body.position.x > 90 && particle.body.position.x < 170) {
                      score = score + 400;
                      particle = null;

                  if (count >= 5) gameState = "end";}
    
    }

  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}

function mousePressed() {
  if (gameState !== "end") {
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}
