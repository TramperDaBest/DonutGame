var canvasWidth = 640;
var canvasHeight = 480;
var player = 0;
var playerX = 300;
var playerY = 100;
var spritewidth = 32;
var spriteheight = 32;
var speed = 4;
var WeakEnemyX = 300;
var WeakEnemyY = 300;
var WeakEnemy = 0;
var WeakEnemySpeed = 3;
var projectiles;
function preload(){
  bgImg = loadImage("Images/background.png");
  playerImage = loadImage("Images/Player.png");
 WeakEnemyImage = loadImage("Images/WeakEnemy.gif")
projectileImage = loadImage("Images/projectile.png")
}
 
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  player = createSprite(playerX, playerY, spritewidth, spriteheight);
  player.addImage(playerImage,"Images/Player.png");
WeakEnemy = createSprite(WeakEnemyX, WeakEnemyY, spritewidth, spriteheight)
  WeakEnemy.addImage(WeakEnemyImage, "Images/WeakEnemy.gif")
  Enemy = new Group()
  Enemy.add(WeakEnemy)
  projectiles= new Group()
  player.setCollider("rectangle", 0, 0, 40, 40)
  WeakEnemy.setCollider("rectangle", 0, 0, 40, 40)
}
function collisions(){
  WeakEnemy.overlap(projectiles)
  player.collide(WeakEnemy)
}
function mousePressed(){
  var projectile = createSprite(player.position.x, player.position.y)
  projectile.addImage(projectileImage)
projectile.attractionPoint(Math.random()*3+5, mouseX, mouseY)
  projectile.setCollider("rectangle", 0, 0, 40, 40)
  projectiles.add(projectile)
}


function draw() {
 collisions()
  background(bgImg) ;
  drawSprites();
  playerControls()
}
function playerControls(){
  if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
     player.position.x=player.position.x + speed
    if (player.position.x + spritewidth > canvasWidth ){
        player.position.x = canvasWidth - spritewidth/2
        }
     }
  if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
  player.position.x=player.position.x - speed
if (player.position.x < spritewidth/2){
  player.position.x = spritewidth/2
}
  }
  

  if(keyIsDown(UP_ARROW) || keyIsDown(87)){
  player.position.y=player.position.y - speed
    if(player.position.y < spriteheight/2){
      player.position.y = spritewidth/2
    }
} 
if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
  player.position.y=player.position.y + speed
  if(player.position.y + spriteheight/2 > canvasHeight){
     player.position.y = canvasHeight - spritewidth/2
     }
}
if(keyIsDown(32)){
  speed = speed+1
//32 is space
}
  
}
