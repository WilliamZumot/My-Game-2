//variables
var player;
var shapeGroup;
var PLAY = 1;
var END = 0;
var MENU = 3;
var gameState = PLAY;
var score = 0;
var backColor = "white";
var darkMode;
var look = 0;
//var x = 0;

function setup() {
  //Canvas
  createCanvas(displayWidth, displayHeight);
  //Sprites

  darkMode = createSprite(displayWidth/2, displayHeight*0.2, displayWidth*0.1, displayHeight*0.1);

  player = createSprite(displayWidth*0.2,
     displayHeight/2, 
     displayHeight*0.1, 
     displayHeight*0.1)
  shapeGroup = new Group();
  score = 0
}

function draw() {
  //Background
  background(backColor);

  if(mousePressedOver(darkMode)){
    backColor = "black";
  }

  //GAME STATES

  if(gameState === MENU){

    //MENU:

  }
  
  else if(gameState === PLAY){

  spawnShapes();

  if(keyDown("W") || keyDown("UP_ARROW")){
    player.y -= 10;
  }
  if(keyDown("S") || keyDown("DOWN_ARROW")){
    player.y += 10;

  }
  
  }

  drawSprites();
}

function spawnShapes() {
  //write code here to spawn the shapes
  if (frameCount % 40 === 0) {
    var shape = createSprite(displayWidth + displayWidth * 0.2, 120, 20, 10);
    shape.y = Math.round(random(displayHeight * 0.05, displayHeight * 0.95));
    //cloud.addImage(cloudImage);
    shape.scale = random(displayHeight * 0.01, displayHeight * 0.02);
    shape.velocityX = random(-9, -14);
    //shape.shapeColor = "red";

    //generate random colors
    look += 1
    console.log(look);
    //var rand = Math.round(random(1,6));
    switch(look) {
      case 1: shape.shapeColor = "red";
              break;
      case 2: shape.shapeColor = rgb(214, 64, 0);
              break;
      case 3: shape.shapeColor = "orange";
              break;
      case 4: shape.shapeColor = "yellow";
              break;
      case 5: shape.shapeColor = rgb(153, 204, 0)
              break;
      case 6: shape.shapeColor = "green";
              break;
      case 7: shape.shapeColor = rgb(8, 161, 151);
              break;
      case 8: shape.shapeColor = rgb(36, 112, 188);//"darkblue";
              break;
      case 9: shape.shapeColor = rgb(102, 0, 255);
              break;
      case 10: shape.shapeColor = "purple";
              break;
      case 11: shape.shapeColor = rgb(204, 0, 82);
              break;
      /*case 7: shape.shapeColor = "violet";
              color = v;
              break;*/
      default: break;
    }

    if(look === 11){
      look = 0;
    }
    
     //assign lifetime to the variable
    shape.lifetime = displayWidth * 2;
    
    //adjust the depth
    shape.depth = player.depth;
    shape.depth = shape.depth + 1;
    
    //add each cloud to the group
    shapeGroup.add(shape);
  }
}