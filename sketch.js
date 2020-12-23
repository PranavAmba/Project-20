var car,wall;
var speed,weight

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,10,400);

  wall.shapeColor=color(80,80,80);

  car.velocityX=speed;

  console.log(speed);
  console.log(weight);

  
}

function draw() {
  background(255,25,25); 
  stopWhenCollided(car,wall); 
  drawSprites();
}
function stopWhenCollided(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
     object1.velocityX =0;
     excitute();
 
}
console.log(object1.x,object2.x)
}
function excitute(){
  var deformation = 0.5*weight*speed*speed/22500
  if(deformation<100){
    car.shapeColor="green"
  }
  if(deformation>100 && deformation<180){
    car.shapeColor="yellow"
  }
  if(deformation>180){
    wall.shapeColor="red"
  }
  }