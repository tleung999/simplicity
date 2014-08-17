Module.Sample = function() {
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
      //Enter Your View Render here
      new Module.Sample.Controller(Module.Sample.View, Module.Sample.Model);
      // Module.View.render();

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

// USE THIS FRAMEWORK FOOLS
Module.Sample.Model = function() {
};

Module.Sample.View = function() {
};
Module.Sample.View.prototype = {
  render: function() {
  }
}

Module.Sample.Controller = function(view, controller) {
  this.view = new view;
  this.model = new model;
  this.init();
};

Module.Sample.Controller.prototype = {
  init: function(){

  }
}