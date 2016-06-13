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
    this.renderElements[this.renderElements.length] = sprite;

  }

  cleanScreen(){
    this.ctx.fillRect(0,0,this.width, this.height);
  }

  renderAll(){
    for (var i = 0; i < this.renderElements.length; i++){
      this.ctx.drawImage(this.renderElements[i].image, this.renderElements[i].positionX, this.renderElements[i].positionY, this.renderElements[i].image.width, this.renderElements[i].image.height);
    }

  }

   setBackgroundColor(color) {
    this.color = color;
    this.ctx.fillStyle = color;

  }


  tick(){
     window.renderer.cleanScreen();
     window.renderer.renderAll();
     console.log(window.renderer.frameCount++);

  }
   startRender(){
    this.renderRutine  = setInterval(this.tick,1000/60);

  }




}
