var bg,bgimg
var spacecraft,spacecraftimg
var stoneimg
var obsgrp,shootgrp
var shootimg
var score = 0
var gamestate = "story"

function preload(){
bgimg = loadImage("724712.jpg")
spacecraftimg = loadImage("download.png")
stoneimg = loadImage("st2.png") 
stoneimg2 = loadImage("st1.png") 
shootimg = loadImage("ooo.png")
img1 = loadImage("1.png")
img2 = loadImage("2.png")
img3 = loadImage("3.png")
img4 = loadImage("4.png")
img5 = loadImage("5.png")
img6 = loadImage("7.png")
}

function setup() {
  createCanvas(500, 500);
  bg = createSprite(200,200,1,1)
  bg.addImage(bgimg)
  bg.x = bg.width/2
  bg.velocityX = -4
 spacecraft = createSprite(60,200,3,3)

   
obsgrp = createGroup()
shootgrp = createGroup()
}

function draw() {
background ("white") 

  if (keyDown("space")&& gamestate === "story"){
    gamestate = "play"
  }
   
  
  if (gamestate === "play"){
   
  spacecraft.addImage(spacecraftimg)
  spacecraft.scale = 0.3
      
    if (keyDown("up")){
    spacecraft.y -=6
  }
  if (keyDown("down")){
    spacecraft.y +=6
  }
  if (keyDown("space")){
    spawnshoot()
  }
  
  if (shootgrp.isTouching(obsgrp)){
    score += 5
    shootgrp.destroyEach()
    obsgrp.destroyEach()
  }
if (obsgrp.isTouching(spacecraft)){
  obsgrp.destroyEach()
  score-=3
}
    spawnobstacle()
  }
  
  if (bg.x<0){
    bg.x = bg.width/2
  }
  

  drawSprites()
   textSize(15)
  fill("white")
    if (gamestate === "story"){
    text ("HI! it is the story",170,200)
      text(" of the game there was a astronaut who lost his way",30,250)
           text("Plese help him!",170,300)
    
  }
 
text("Score:"+score,430,30)
}

function spawnobstacle(){
  if (frameCount% 80 === 0){
  var obstacle = createSprite(500,random(0,400),1,1)
  obstacle.addImage(stoneimg)
    obstacle.velocityX = random(-7,-10)
    var rand = Math.round(random(1,8));
    switch(rand) {
      case 1: obstacle.addImage(img1);
              break;
      case 2: obstacle.addImage(img2);
              break;
      case 3: obstacle.addImage(img3);
              break;
      case 4: obstacle.addImage(img4);
              break;
      case 5: obstacle.addImage(img5);
              break;
      case 6: obstacle.addImage(img6);
              break;
      case 7: obstacle.addImage(stoneimg);
              break;
      case 8: obstacle.addImage(stoneimg2);
              break;
      default: break;
    }
    obstacle.scale = 0.2
    obstacle.lifetime = 400/obstacle.velocityX
    obsgrp.add(obstacle)
}}

function spawnshoot(){
  if (frameCount % 2 === 0){
  var shoot = createSprite(0,0,0,0)
  shoot.x = spacecraft.x+50
  shoot.y = spacecraft.y
  shoot.velocityX = 9
  shoot.addImage(shootimg)
  shoot.scale = 0.25
    shootgrp.add(shoot)
}}