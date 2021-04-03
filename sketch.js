var wall, thickness
var bullet, speed, weight
var wall_options

function setup(){
   createCanvas(1600,400);
   speed = random(223,321)
   weight = random(30,52)
    thickness = random(22,83)
    bullet = createSprite(50, 200,50,20)
    wall = createSprite(350,200, thickness,height/2)
    bullet.velocityX = speed
}

function draw(){
  background("black")
  if(hasCollided(bullet, wall)){
    wall.depth = -1
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    bullet.velocityX = 0
    if(damage < 10){
       wall.shapeColor = "green"
    }
    if(damage > 10){
       wall.shapeColor = "red"
    }
  }
  drawSprites()
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
  return true
  }
  return false
}