var bullet, wall,thickness;
var speed, weight,damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,thickness,height/2)
  

}
function draw() {
  background(114,133,225); 
  bullet.velocityX = speed;
  
  wall.shapeColor = color(80,80,80)

  if(collided(bullet,wall)){
    bullet.velocityX = 0;

    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)

    if(damage>10){
      wall.shapeColor = color(255,0,0)
    }
  else{
    if(damage<10){
      wall.shapeColor = color(0,255,0)
    }
  }
  }
 
  drawSprites();
}

function collided(lbullet,lwall){
bulletEdge = lbullet.x + lbullet.width;
wallEdge = lwall.x;
if(bulletEdge>=wallEdge){
  return true
}
return false
}