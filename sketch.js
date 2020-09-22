var fixedRect,movingRect;
var gameobj1,gameobj2


function setup() {
  var canvas = createCanvas(1200,800);
  movingRect = createSprite(400, 50, 50, 50);
  movingRect.shapeColor= "green";
  movingRect.velocityY=5;
  fixedRect = createSprite(400,700,50,50);
  fixedRect.shapeColor="blue";
  fixedRect.velocityY=-5;
  gameobj1 = createSprite(100,100,50,50);
  gameobj1.shapeColor= "pink";
  gameobj2 = createSprite(200,100,50,50);
  gameobj2.shapeColor="pink";
  
}

function draw() {
  background(0);  
  bounceoff();
  drawSprites();
}
function bounceoff(){
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.velocityY=-(movingRect.velocityY)
    fixedRect.velocityY=-(fixedRect.velocityY)
    }




}


