Module.PhysicsTransition = function() {
  var self = this;
  this.init = function() {
    $(this).on('load', function() {
      console.log("loading sample app");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting sample app");
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your Module Controller here
      new Module.PhysicsTransition.Controller(Module.PhysicsTransition.View
                                              ,Module.PhysicsTransition.Model);

      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("sample app ending");
        $(document).trigger('next');
      },30000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

Module.PhysicsTransition.Model = function(){
  this.colorArray =  ['#95D3E2'
                      ,'#254D78'
                      ,'#825D75'
                      ,'#F23E32'
                      ,'#FAB562'
                      ,'#D2E594'
                      ,'#476054'
                      ,'#FEDB74'
                      ,'#4D4550'
                      ,'#E7E3E3'];
  this.transitionArray = ['js/ball_roll.js']
}

Module.PhysicsTransition.Model.prototype = {
  produceRandomColor: function(){
    var colorArrayLength = this.colorArray.length;
    var randomIndex = Math.floor((Math.random() * colorArrayLength));
    return this.colorArray[randomIndex];
  },

  produceRandomTransition: function(){
    var transitionArrayLength = this.transitionArray.length;
    var randomIndex = Math.floor((Math.random() * transitionArrayLength));
    return this.transitionArray[randomIndex];
  }
}
// -------------------------------------------------------------- //
// -------------------------------------------------------------- //
Module.PhysicsTransition.Controller = function(view, model) {
  this.view  = new view;
  this.model = new model;
  this.init();
}

Module.PhysicsTransition.Controller.prototype = {
  init: function(){
    var color = this.model.produceRandomColor();
    var transition = this.model.produceRandomTransition();
    this.view.cleanSlate();
    this.view.render(color, transition);
  }
}

// ------------------------------------------------- //
// ------------------------------------------------- //

Module.PhysicsTransition.View = function() {}

Module.PhysicsTransition.View.prototype = {
  render: function(color, transition){
    this.addBackgroundColor(color);
    this.addCanvas();
    this.addTransition(transition);
  },

  cleanSlate: function(){
    this.removeBackground();
  },

  removeBackground: function(){
    // remove the background image if exists
    $(document.body).css("background-image", "none")
  },

  addBackgroundColor: function(color) {
    // add background color
    $(document.body).css("background-color", color)
  },

  addCanvas: function(){
    var canvas = $('<canvas>').addClass('viewpoint')
    $('#main-container').append(canvas)
  },

  addTransition: function(transition){
    var source = $('<script>').attr('src', transition)
    $('body').append(source)
  }
}
