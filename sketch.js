var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png") 
  //loadAnimation de boy (niño)
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png")
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path = createSprite(200, 180, 400, 20)
 path.addImage("path.png", pathImg)
 //agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;
path.y = path.width/2
//crear sprite de boy (niño)
boy = createSprite(50, 120, 20,50)
boy.addAnimation("running", boyImg)
boy.scale=0.8;
 //agregar animación para boy

// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible  = false
////establecer visibilidad como false (falso) para límite izquierdo
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible  = false
//establecer visibilidad como false (falso) para límite derecho

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.MouseX
  

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
