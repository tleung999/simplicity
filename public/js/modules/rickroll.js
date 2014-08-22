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
      var rickroll = new Module.RickRoll.Controller(Module.RickRoll.View);
      // Module.View.render();

      rickroll.view.displayIntro();

      setTimeout(function(){
        $('#audio')[0].volume = 0;
        rickroll.init();
      }, 6000);

      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        $('#audio')[0].volume = 1;
        $(document).trigger('next');
      },27000);
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
    $('#main-container').append('<center><video autoplay><source src="/video/RickRoll.mp4" type="video/mp4"></source></video></center>');
  },
  displayIntro: function(){
    // clear background image
    $(document.body).css("background-image", "none");
    var message = "Times have changed...or do you still dance like this?";
    var module_intro = "<h1 class='animated bounceInRight' style='font-family:Helvetica;color:black'>" + message + "</h1>";

    setTimeout(function(){
      $("#main-container").append(module_intro);
      }, 500);

    setTimeout(function(){
      $("#main-container").empty();
    },5500);
  }
};

Module.RickRoll.Controller = function(view) {
  this.view = new view;
};

Module.RickRoll.Controller.prototype = {
  init: function(){
    this.view.render();
  },
};
