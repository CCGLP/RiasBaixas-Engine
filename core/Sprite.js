class Sprite extends GameObject{
  constructor(width,height,positionX, positionY, spriteImage, renderOrder = 0){
    super()
    this.image = new Image(width, height)
    this.image.src = spriteImage
    this.image.width = width;
    this.image.height = height;
    this.renderOrder = renderOrder
    console.log(this.image.width +"," + this.image.height)
    window.renderer.addNewElementToRender(this);
    this.positionX = positionX;
    this.positionY = positionY;
    this.speedX = 0;
    this.speedY = 0;

  }

  speedByFrame(speedX, speedY){
    this.speedX = speedX;
    this.speedY = speedY;
  }

  tick(){
    super.tick()
  }
}
