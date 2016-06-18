class Engine{

  constructor(){



  }


  start(){
    var renderer = new Renderer(1920,1080)
    renderer.startRender();
    renderer.setBackgroundColor("#000000")
    var update = new Update()
    var audioHandler = new AudioHandler()
    update.startUpdate()
  }
}
