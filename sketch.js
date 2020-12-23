var Bullet,wall;
var speed,weight;
var thickness;
function setup() {

  createCanvas(800,400);
  Bullet=createSprite(50, 200, 80,20);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  Bullet.velocityX=speed;
  Bullet.shapeColor="white";
  wall=createSprite(700,200,40,200);
  wall.shapeColor="grey";
}

function draw() {
  background(0);
  if(Bullet.isTouching(wall)) {
    Bullet.velocityX=0;
    var D=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(D>10){
      wall.shapeColor="red";
    }
   else{
     wall.shapeColor="green";
   }
   

    
  } 
  drawSprites();
}