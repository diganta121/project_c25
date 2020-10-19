const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var img,img2;
var engine, world;
var bin1,bin2,bin3,ball;
function preload (){
    img = loadImage('crumbled_paper.png') ;
    img2 = loadImage('dustbin_green.png') ;
}
function setup(){
    var canvas = createCanvas(1200,400);        
    engine = Engine.create();
    world = engine.world;
    
        
    bin1 = new Bin(703,360,20,200);
    bin2 = new Bin(750,377,70,20);
    ground = new Ground(600,height,1200,20);
    ball = new Ball(250,300,40,40);
    bin3 = new Bin(800,360,20,200);
}

function draw(){

    background(255);
    Engine.update(engine);
    //image(img2,703,360);
    image(img2,716,260,70,100);
    image(img,ball.x,ball.y)

    bin1.display();
    bin2.display();
    bin3.display();
    ball.display();
    ground.display();
    

   
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:62,y:-105});
	
	 }
   }