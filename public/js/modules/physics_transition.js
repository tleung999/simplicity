Module.PhysicsTransition = function() {
  var self = this;
  this.init = function() {
    $(this).on('load', function() {
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your Module Controller here
      new Module.PhysicsTransition.Controller(Module.PhysicsTransition.View
                                              ,Module.PhysicsTransition.Model);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

Module.PhysicsTransition.Model = function(){
  this.transitionArray = ['js/transitions/ball_roll.js','js/transitions/crazy_dominoes.js'];
}

Module.PhysicsTransition.Model.prototype = {
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
    var transition = this.model.produceRandomTransition();
    this.view.render(transition);
  }
}

// ------------------------------------------------- //
// ------------------------------------------------- //

Module.PhysicsTransition.View = function() {}

Module.PhysicsTransition.View.prototype = {
  render: function(transition){
    this.addTransition(transition);
  },

  addTransition: function(transition){
    var physics = $('<script>').attr('src', 'js/libraries/physicsjs-0.6.0/physicsjs-full-0.6.0.min.js')
    var source = $('<script>').attr('src', transition)
    $('body').append(physics)
    $('body').append(source)
  }
}
