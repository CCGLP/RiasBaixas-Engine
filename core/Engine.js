class Engine{

  constructor(){



  }


  start(){
    var renderer = new Renderer(600,600,2500,2500)
    renderer.startRender();
    renderer.setBackgroundColor("#000000")
    var update =  new Update()
    var audioHandler = new AudioHandler()
    update.startUpdate()
  }
}
