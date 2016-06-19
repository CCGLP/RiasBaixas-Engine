class TextSprite extends GameObject{
  constructor(text, positionX, positionY, renderOrder, color){
    super()
    this.text = text;
    this.positionX = positionX;
    this.positionY = positionY;
    this.renderOrder = renderOrder;
    this.color = color;
    window.renderer.addNewElementToRender(this)
  }


  static changeCanvasFont(font){
    window.renderer.ctx.font = font;
  }

  static changeCanvasTextAlign(textalign){
    window.renderer.ctx.textAlign = textalign
  }

  tick(){
    super.tick()
  }
}
