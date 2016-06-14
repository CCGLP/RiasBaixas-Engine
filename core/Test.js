var drw = new Renderer(800,1000);
drw.startRender();
drw.setBackgroundColor("#000000")
var update = new Update();

var sprite0 = new Sprite(20, 20, 50, 60, "house.png")
var sprite1 = new Sprite(100,100, 200,100, "images.jpg")
var sprite2 = new Sprite(300, 300, 200, 400, "scream.jpg")
update.setUpdateFunction(function () {sprite1.positionX +=0.75})
