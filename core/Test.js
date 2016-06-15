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


var engine = new Engine()
engine.start()
var sprite0 = new Sprite(20, 20, 50, 60, "house.png", 0)
var sprite1 = new VamohACalmano(100,100, 200,100, "images.jpg",2)
var sprite3 = new VamohACalmano(100,100,400,200, "images.jpg",3)
var sprite2 = new Sprite(300, 300, 200, 400, "scream.jpg",1)
var sprite4 = new VamohACalmano(140,140,200,100, "house.png", 4,3,3)

setTimeout(function(){new VamohACalmano(200,200, 20, 30, "scream.jpg", -1,5,5)},1000)
