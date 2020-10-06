var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200, 200, 50, 80);
 fixedRect.shapeColor = "red";
 movingRect = createSprite(400, 200, 80, 30);
movingRect.shapeColor = "blue";
rect1 = createSprite(500,100,50,50)
rect2 = createSprite(200,100,50,50)
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
if (isTouching(rect1,rect2)){
  rect1.shapeColor = "green"
  rect2.shapeColor = "brown"
}else{
  rect1.shapeColor = "red";
  rect2.shapeColor = "blue"; 
}
  
  
  
  
  
  
  
  
  drawSprites();
}
function isTouching(object1,object2){
if(object1.x - object2.x < object2.width/2 + object1.width/2 &&  object2.x - object1.x < object2.width/2 + object1.width/2 
  && object1.y - object2.y < object2.height/2 + object1.height/2 &&  object2.y - object1.y < object2.height/2 + object1.height/2){
return true;

  }else {return  false;
  }
   
}  

