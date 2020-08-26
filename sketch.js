var fixedObject, movingObject;



function setup() {
  createCanvas(400,400);

  fixedObject=createSprite(100,200,50,50);
  fixedObject.shapeColor="purple"
  
  movingObject=createSprite(300,200,50,50);
  movingObject.shapeColor="purple"
  
}

function draw() {

  background(0,0,0);  
  movingObject.x=mouseX
  movingObject.y=mouseY
  movingObject.debug=true;
  if (movingObject.x-fixedObject.x<movingObject.width/2+fixedObject.width/2
    
    && fixedObject.x-movingObject.x<movingObject.width/2+fixedObject.width/2
    &&movingObject.y-fixedObject.y<movingObject.height/2+fixedObject.height/2
    
    && fixedObject.y-movingObject.y<movingObject.height/2+fixedObject.height/2
    
    ) {
movingObject.shapeColor="green";
fixedObject.shapeColor="green";


  }
  else{
    movingObject.shapeColor="purple";
    fixedObject.shapeColor="purple";

  }
  drawSprites();
}