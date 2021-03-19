var path,boy,ornament;
var pathImg,boyImg,ornamentImg1,ornamentImg2,ornamentImg3,ornamentImg4;
var treasureCollection = 0;
var cashG,diamondG,swordG,jwelleryG;
var PLAY = 1;
var gameState = PLAY;
var score = 0;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  ornamentImg1 = loadImage("cash.png");
  ornamentImg2 = loadImage("diamonds.png");
  ornamentImg3= loadImage("jwell.png");
  ornamentImg4= loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
  
  boy.setCollider("rectangle",0,0,boy.width,boy.height);
  boy.debug = true;
  
  
  ornamentGroup = new Group();

}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(gameState === PLAY){
    
     if (cashG.isTouching(boy)) {
      cashG.destroyEach();
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
    }
      score = score+ Math.round(frameCount/60);
  }
    
    
    
    
    
    
    
   ornamentSpawn(); 
    
    
    
  }
  
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  

    

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function ornamentSpawn(){
  if(frameCount%70===0){
     ornament = createSprite(random(50,500),0) 
    ornament.velocityY = 2;
    var rand = Math.round(random(1,4))
    switch(rand){
        case 1:ornament.addImage(ornamentImg1);
        ornament.scale = 0.07;
        break;
         case 2:ornament.addImage(ornamentImg2);
        ornament.scale = 0.05;
        break;
        case 3:ornament.addImage(ornamentImg3);
        ornament.scale = 0.07;
        break;
        case 4:ornament.addImage(ornamentImg4);
        ornament.scale = 0.07;
        break;
        default:break;
    }
    ornamentGroup.add(ornament);
    
     }
 }

