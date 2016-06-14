class Update{

  constructor(){
    this.update = setInterval(function(){}, 1000/60);

  }

  setUpdateFunction(method){
    clearInterval(this.update);
    this.update = setInterval(method, 1000/60);
  }
}
