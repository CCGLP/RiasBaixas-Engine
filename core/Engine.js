class Engine{

  constructor(){



  }


  start(){
    var renderer = new Renderer(300,300,2000,2000)
    renderer.startRender();
    renderer.setBackgroundColor("#000000")
    var update = new Update()
    var audioHandler = new AudioHandler()
    update.startUpdate()
  }
}
