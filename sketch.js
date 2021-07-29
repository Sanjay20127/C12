var garden,rabbit,apple,orange;
var gardenImg,rabbitImg,appleImg,orangeImg;
var selectSprite = Math.round(random(1,2));
function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
}
function setup()
{
  
  createCanvas(400,400);
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  if(frameCount%80 == 0)
  {
    if(selectSprite == 1)
    {
      spawnApples();
    }
    if(selectSprite == 2)
    {
      spawnOranges();
    }
  }
}
function draw()
{
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  spawnApples();
  drawSprites();
  
}
function spawnApples()
{
  if(frameCount%80 == 0)
  {
    apple= createSprite(random(50,350),40,10,10);
    apple= addImage(appleImg);
    apple.scale= 0.9
    apple.velocityY=4;
  }
}
function spawnOranges()
{
  if(frameCount%80 === 0)
  {
    orange= createSprite(random(50,350),40,10,10);
    orange= addImage(orangeImg);
    orange.scale= 0.9
    orange.velocityY=4;
  }
}