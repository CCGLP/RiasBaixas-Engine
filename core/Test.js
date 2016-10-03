
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
var x = 600;
var y = 600;
var i = 0;
var arr = []
for (x = 0; x<2000; x+=64){
  for (y = 600; y<2000; y+=64){
    arr[i] = new Sprite(64,64,x,y,"tile_rock.png", 1);
    i++;
  }
}
var tux = new Sprite(64,64, 600,546, "tux_anims/1.png", 2);
tux.speedByFrame(1,0);
tux.addAnimation(["tux_anims/1.png","tux_anims/2.png","tux_anims/3.png","tux_anims/4.png"], 270)
tux.addAnimation(["house.png", "scream.jpg", "tile_rock.png"])

var moveCamera = new MoveCamera();
window.renderer.camera.positionX = 600;
window.renderer.camera.positionY = 100;
window.renderer.setBackgroundColor("#4dd2ff")
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
var text2 = new TextSprite("Hola, yo tenía un barco", 650,600,2,"white")
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


setInterval(function(){window.renderer.camera.positionX += 0.6;}, 16)
