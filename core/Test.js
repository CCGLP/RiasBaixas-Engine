class VamohACalmano extends Sprite{
  constructor(width,height,positionX, positionY, spriteImage, renderOrder = 0, velocityX = 1, velocityY = 1){
    super(width,height,positionX, positionY, spriteImage, renderOrder)
    this.velocityX = velocityX;
    this.velocityY = velocityY
  }
  tick(){
    super.tick()
    this.positionX += this.velocityX;
    this.positionY += this.velocityY;

  }
}
class MoveCamera extends GameObject{
  constructor(){
    super()
    this.speedX = 0;
    this.speedY = 0;
  }

  tick(){
    super.tick()
    window.renderer.camera.positionX += this.speedX;
    window.renderer.camera.positionY += this.speedY;
  }
}

var engine = new Engine()
engine.start()
var sprite0 = new Sprite(20, 20, 50, 60, "house.png", 0)
var spriteLejos = new Sprite (100, 100, -200, -200, "house.png", 0)
var sprite1 = new VamohACalmano(100,100, 200,100, "images.jpg",2)
var sprite3 = new VamohACalmano(100,100,400,200, "images.jpg",3)
var sprite2 = new Sprite(300, 300, 200, 400, "scream.jpg",1)
var sprite4 = new VamohACalmano(140,140,200,100, "house.png", 4,3,0)
var moveCamera = new MoveCamera();
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 37){
    window.renderer.camera.positionX -=10;
  }
  else if (event.keyCode == 38){
    window.renderer.camera.positionY -=10;
  }
  else if (event.keyCode == 39){
    window.renderer.camera.positionX+=10;
  }
  else if (event.keyCode == 40){
    window.renderer.camera.positionY +=10;
  }
});
TextSprite.changeCanvasFont("40px Comic Sans MS")
var text = new TextSprite("hola", 10 , 20, 10, "white");
var text2 = new TextSprite("Hola, yo tenía un barco", 200,450,2,"white")
var nX = 01920;
var nY = 0;
var arr = []
/*for (var i = 0; i < 200; i++){
  for (var j = 0; j< 200; j++){
    arr[i] = new Sprite(10,10, nX, nY, "images.jpg", -1);
    nX+=10;
  }
  nX = 1920;
  nY+=10;
}
*/

//window.audioHandler.setAudio("oggTest.ogg")
//var g = window.audioHandler.setAudio("greys.mp3")



setTimeout(function(){new VamohACalmano(200,200, 20, 30, "scream.jpg", -1,5,5)},1000)
