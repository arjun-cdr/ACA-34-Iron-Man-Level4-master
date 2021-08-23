var bg, backgroundImg;
var ironMan, ironManImg;
var stoneImg;
var ground1,ground2;
var diamondGroup,diamondImg;
var spikeGroup,spikeImg;
var score=0;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironManImg = loadImage("images/iron.png");
  stoneImg=loadImage("images/stone.png");
  diamondImg=loadImage("images/diamond.png");
  spikeImg=loadImage("images/spikes.png");

}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  bg.velocityY=3;

  ironMan=createSprite(200,350,20,50);
  ironMan.scale=0.3;
  ironMan.addImage(ironManImg);

  ground1=createSprite(500,600,1000,10);
  ground1.visible=false;
  ground2=createSprite(500,0,1000,10);
  ground2.visible=false;

  stoneGroup=new Group();
  diamondGroup=new Group();
  spikeGroup=new Group();

}

function draw() {
  if (bg.y>550){
    bg.y=bg.width/4;
  }
  ironMan.collide(ground1);
  ironMan.collide(ground2);

  if(keyDown("up")){
    ironMan.velocityY=-10;
  }
  if(keyDown("down")){
    ironMan.velocityY=+10;
  }
  if(keyDown("left")){
    ironMan.x=ironMan.x-5;
  }
  if(keyDown("right")){
    ironMan.x=ironMan.x+5;
  }
 generateSones();
 for(var i=0;i<(stoneGroup).length;i++){
  var temp=(stoneGroup).get(i);
  if(temp.isTouching(ironMan)){
      ironMan.collide(temp);
  }
 }
 generateDiamonds()
 for(var i=0;i<(diamondGroup).length;i++){
  var temp=(diamondGroup).get(i);
  if(temp.isTouching(ironMan)){
      score++;
      temp.destroy();
      temp=null;
  }
 }

 generateSpikes()
 for(var i=0;i<(spikeGroup).length;i++){
  var temp=(spikeGroup).get(i);
  if(temp.isTouching(ironMan)){
    score=score-5;
    temp.destroy();
    temp=null;
  }
 }
 drawSprites();
 text("Total Score : "+score, 600,70);
}
function generateSones(){
  if(frameCount%70===0){
    console.log(frameCount);
     var stone=createSprite(random(0,1000),0,random(40,100),20);
     stone.addImage(stoneImg);
     stone.scale=random(1.0,1.2);
     stone.velocityY=random(2,4);
     stone.lifetime=350;
     stoneGroup.add(stone);
}
}

function generateDiamonds(){
  if(frameCount%70===0){
    console.log(frameCount);
     var diamond=createSprite(random(0,1000),0,random(40,100),20);
     diamond.addImage(diamondImg);
     diamond.scale=0.5;
     diamond.velocityY=random(2,4);
     diamond.lifetime=350;
     diamondGroup.add(diamond);

  }
}

function generateSpikes(){
  if(frameCount%70===0){
    console.log(frameCount);
     var spike=createSprite(random(0,1000),0,random(40,100),20);
     spike.addImage(spikeImg);
     spike.scale=0.5;
     spike.velocityY=random(2,4);
     spike.lifetime=350;
     spikeGroup.add(spike);

  }
}