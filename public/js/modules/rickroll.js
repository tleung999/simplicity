Module.RickRoll = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your View Render here
      var rickroll = new Module.RickRoll.Controller(Module.RickRoll.View);
      // Module.View.render();

      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        $(document).trigger('next');
      },21000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

// USE THIS FRAMEWORK FOOLS
Module.RickRoll.View = function() {
};
Module.RickRoll.View.prototype = {
  render: function() {
    $('#main-container').append('<center><iframe src="http://player.vimeo.com/video/2619976?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1" width="500" height="385" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></center>');
  }
};

Module.RickRoll.Controller = function(view) {
  this.view = new view;
  this.init();
};

Module.RickRoll.Controller.prototype = {
  init: function(){
    this.view.render();
  },
};
