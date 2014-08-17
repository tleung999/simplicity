
function MainController(world, view, bodyConstructor){
  this.world = world;
  this.view = view;
  this.bodyConstructor = bodyConstructor;
  this.init();
}

MainController.prototype = {
  init: function(){}
}

function MainView(){}
function BodyConstructor(){}


Physics(function(){
  var world = this;
  var mainController = new MainController(world
                                          ,MainView
                                          ,BodyConstructor);

})

