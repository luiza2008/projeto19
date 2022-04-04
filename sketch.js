var pou
var piso
var fundo



var gameState = "play"

function preload(){

pou = loadImage("pou.jpg")
fundo = loadImage("pjfundo.jpg")

}

function setup() {
 createCanvas(500,600)

fundo = createSprite(500,600)
fundo.addImage("fundo",pjfundo.jpg)
fundo.velocityY = 1;

pou = createSprite(200,200,50,50);
pou.scale = 0.3;
pou.addImage("pou",pou.jpg);

piso = createSprite (200,200,300,10)
}

function draw() {
 background(0)

 if (gameState === "play") {
    if(keyDown("left_arrow")){
      pou.x = pou.x - 3;
    }
}
if(keyDown("right_arrow")){
        pou.x = pou.x + 3;
      }

if(keyDown("space")){
        pou.velocityY = -10;
      }

      pou.velocityY = pou.velocityY + 0.8

      if(fundo.y > 400){
       fundo.y = 300
}
f (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Fim de Jogo", 230,250)
  }
}

function gerarpiso(){

    if (frameCount % 240 === 0) {
        var piso = createSprite(200, -50);
        var pisoinvisivel = createSprite(200,15);
        pisoinvisivel.width = climber.width;
        pisoinvisivel.height = 2;

        piso.x = Math.round(random(120,400));
        pisoinvisivel.x = door.x;

        piso.velocityY = 1;
        pisoinvisivel.velocityY = 1;

       pou.depth = door.depth;
        pou.depth +=1;
       
        
        piso.lifetime = 800;
        pisoinvisivel.lifetime = 800;
    
        pisoinvisivel.debug = true;
        
      }

}