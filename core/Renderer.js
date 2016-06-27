class Renderer{

  constructor(width, height){
    if (window.renderer == null){
      window.renderer =  this;
      var realWidth;
      var realHeight;
      if ((typeof width) == "number" && (typeof height) == "number"){
        realWidth = width;
        realHeight = height;
      }
      else{
        realHeight = 800;
        realWidth = 800;
      }

      this.width = realWidth;
      this.height = realHeight;
      this.camera = {positionX : 0, positionY : 0}
      document.write("<canvas id = \"riasBaixasCanvas\" width = \" " + realWidth + "\" height = \" " + realHeight + "\"  > </canvas>")
      this.ctx = document.getElementById("riasBaixasCanvas").getContext("2d");
      this.frameCount = 0
      this.renderElements = []
    }
    else{
      return window.renderer;
    }

  }

  print(){
    console.log(this.image);

  }

  addNewElementToRender(sprite){
    var order = sprite.renderOrder
    var auxOrder;
    var aux;
    var aux2;
    var i= 0;
    var j = 0;
    for (i = 0; i< this.renderElements.length; i++){
      auxOrder = this.renderElements[i].renderOrder
      if (order < auxOrder){
        aux = this.renderElements[i]
        this.renderElements[i] = sprite
        var iterations = this.renderElements.length;
        for (j = i+1; j <= iterations; j++){
          aux2 = this.renderElements[j]
          this.renderElements[j] = aux
          aux = aux2
        }
        return;
      }
    }
    this.renderElements[this.renderElements.length] = sprite;

  }

  cleanScreen(){
    this.ctx.fillRect(-this.camera.positionX,-this.camera.positionY,this.width, this.height);
  }

  renderAll(){
    console.log(this.camera.positionX + "cameraX")
    for (var i = 0; i < this.renderElements.length; i++){
      if (((this.camera.positionX + this.width) > this.renderElements[i].positionX  && this.renderElements[i].positionX > (this.camera.positionX)) && ((this.camera.positionY+ this.height) > this.renderElements[i].positionY  && this.renderElements[i].positionY  > (this.camera.positionY)) ){
        if (this.renderElements[i].text == undefined)
          this.ctx.drawImage(this.renderElements[i].image, this.renderElements[i].positionX, this.renderElements[i].positionY,this.renderElements[i].image.width, this.renderElements[i].image.height);
        else {
          this.ctx.fillStyle = this.renderElements[i].color
          this.ctx.fillText(this.renderElements[i].text, this.renderElements[i].positionX, this.renderElements[i].positionY)
        }
      }
    }

  }

   setBackgroundColor(color) {
    this.color = color;
    this.ctx.fillStyle = color;

  }


  tick(){
     window.renderer.ctx.save()
     window.renderer.ctx.translate(window.renderer.camera.positionX, window.renderer.camera.positionY)
     window.renderer.cleanScreen();
     window.renderer.renderAll();
     window.renderer.ctx.restore();

  }

moveCameraTo(positionX, positionY){
  this.camera.positionX = positionX;
  this.camera.positionY = positionY;
}

   startRender(){
    this.renderRutine  = setInterval(this.tick,1000/60);

  }




}
