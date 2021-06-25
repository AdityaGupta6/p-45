
var gamestate=0
var form
var enemy,enemyGroup,enemyImg1,enemyImg2,enemyImg3,enemyImg4,enemy2,enemyGroup2,enemy3,enemyGroup3,enemy4,enemyGroup4;
var player,playerImg;
var bullet,bulletImg,bulletGroup
var destroyImg,destroyPlayer
var score=0
var sound,sound2,sound3;
var win,winImg
var name;
function preload() {
  enemyImg1=loadImage("alien1.png")
  enemyImg2=loadImage("alien2.png")
  enemyImg3=loadImage("alien3.png")
  enemyImg4=loadImage("alien4.png")
  playerImg=loadImage('player.png')
  bulletImg=loadImage("bullet.png")
  destroyImg=loadImage("destroy.png")
  gameEndImg=loadImage("gameover.png")
winImg=loadImage('you.png')
  sound=loadSound("dead.wav")
  sound2=loadSound("dead2.wav")
  sound3=loadSound("win.mp3")
}





function setup() {
  createCanvas(800,600);
  enemyGroup = new Group()
  enemyGroup2 = new Group()
  enemyGroup3 = new Group()
  enemyGroup4 = new Group()


  bulletGroup=new Group()
  form= new Form ()
  player=createSprite(400,550,50,50)
  player.addImage(playerImg)
  player.scale=0.3
  player.visible=false
  keyPressed()
  
}

function draw() {
  background("blue"); 
  if (gamestate===0) {
    form.display();
  } 
  else if (gamestate===1) {

    player.visible=true
    
    if (keyCode===39) {
      player.x+=8
    }
    else if (keyCode===37) {
      player.x-=8
      
    }
    
    if (player.isTouching(enemyGroup)||player.isTouching(enemyGroup2)||player.isTouching(enemyGroup3)|player.isTouching(enemyGroup4)) {
      player.destroy()
      sound2.play()

      destroyPlayer=createSprite(10,550,50,50)
      destroyPlayer.x=player.x
      destroyPlayer.addImage(destroyImg)
 gamestate=2
    }

    if (bulletGroup.isTouching(enemyGroup)) {
      enemyGroup.destroyEach()
      score++;
      sound.play()
    }
    else if(bulletGroup.isTouching(enemyGroup2)){
      enemyGroup2.destroyEach()
      score++;
      sound.play()


    }
    else if(bulletGroup.isTouching(enemyGroup3)){
      enemyGroup3.destroyEach()
      score++;
      sound.play()

    }
    else if(bulletGroup.isTouching(enemyGroup4)){
      enemyGroup4.destroyEach()
      score++;
      sound.play()

    }
    if (player.x>780) {
      player.x-=15
    } 
    else if(player.x<10) {
      player.x+=15
    }
    if (score===20) {
      sound3.play()
      gamestate=3
    }
    drawEnemy()
// player.debug=true;
player.setCollider("rectangle",0,0,player.width-200,player.height-150);
    fill("red")
    textSize(20)
    text("Hello "+name+"  Press Space to shot the alien spaceship",50,30)
    fill("green")
    textSize(40)
    text("Score : "+score,600,100)



  }
else if(gamestate===2){
 
  gameEnd=createSprite(400,300,50,50)
  gameEnd.addImage(gameEndImg)
  gameEnd.scale=0.7
enemyGroup.setVelocityYEach(0)
enemyGroup2.setVelocityYEach(0)
enemyGroup3.setVelocityYEach(0)
enemyGroup4.setVelocityYEach(0)
enemyGroup.setLifetimeEach(-1);
enemyGroup2.setLifetimeEach(-1);
enemyGroup3.setLifetimeEach(-1);
enemyGroup4.setLifetimeEach(-1);
bulletGroup.destroyEach()


}
else if(gamestate===3){
  player.destroy()
  enemyGroup.setVelocityYEach(0)
enemyGroup2.setVelocityYEach(0)
enemyGroup3.setVelocityYEach(0)
enemyGroup4.setVelocityYEach(0)
enemyGroup.setLifetimeEach(-1);
enemyGroup2.setLifetimeEach(-1);
enemyGroup3.setLifetimeEach(-1);
enemyGroup4.setLifetimeEach(-1);
bulletGroup.destroyEach()
win=createSprite(400,300,50,50);
win.addImage(winImg)

}
  drawSprites();
}
















function keyPressed() {
  if (keyCode == 32) {
    bullet = createSprite(80, 510, 10, 40)
    bullet.addImage(bulletImg)
    bullet.x=player.x
    bullet.scale = 0.6
    bullet.velocityY = -7
    bullet.lifetime=100;
    bulletGroup.add(bullet)
    if (gamestate==0||gamestate==2||gamestate==3) {
      bullet.visible=false
      
    }
    else if (gamestate==0) {
      bullet.visible=true
      
    }
  }
  

}





function drawEnemy() {
  if (frameCount % 100== 0) {
    enemy = createSprite(400, 0, 40, 40);

    enemy.x= Math.round(random(50, 750))
    enemy.addImage(enemyImg1)

    enemy.scale = 0.4
    enemy.velocityY = +7;
    
    enemy.lifetime = 100;
    enemyGroup.add(enemy)
  }
  if (frameCount%70===0) {
    
    enemy2 = createSprite(400, 0, 40, 40);
  
    enemy2.x= Math.round(random(50, 750))
enemy2.addImage(enemyImg2)
    enemy2.scale = 0.4
    enemy2.velocityY = +7;
    
    enemy2.lifetime = 100;
    enemyGroup2.add(enemy2)
  }
  if (frameCount%140===0) {
    
    enemy3 = createSprite(400, 0, 40, 40);
  
    enemy3.x= Math.round(random(50, 750))
    enemy3.addImage(enemyImg3)

    enemy3.scale = 0.4
    enemy3.velocityY = +7;
    
    enemy3.lifetime = 100;
    enemyGroup3.add(enemy3)
  }
  if (frameCount%240===0) {
    
    enemy4 = createSprite(400, 0, 40, 40);
  
    enemy4.x= Math.round(random(50, 750))
enemy4.addImage(enemyImg4)
    
    enemy4.scale = 0.4
    enemy4.velocityY = +7;
    
    enemy4.lifetime = 100;
    enemyGroup4.add(enemy4)
  }
    
}









