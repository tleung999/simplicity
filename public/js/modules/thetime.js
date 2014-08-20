Module.TheTime = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      console.log("loading TheTime app");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting TheTime app");
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your View Render here
      new Module.TheTime.Controller(Module.TheTime.View, Module.TheTime.Model);
      // Module.View.render();

      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("TheTime app ending");
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
Module.TheTime.Model = function() {
};

Module.TheTime.View = function() {
};
Module.TheTime.View.prototype = {
  render: function(){
    $("#main-container").addClass("background-image");
    $("#main-container").append('<embed id="clock" class="disabled" src="http://localtimes.info/swf/clock_widget.swf" FlashVars="UTCtime=-7&ghb=0&colourScheme=&colourWidget=FFFFFF&colourTime=000000&target_url=http://localtimes.info/north america/United States/California/Los Angeles/widget/&ham=0&sep=0&wek=0&wkf=0&mon=0&gid=0&rnd=0&text1=Los Angeles Time" menu="false" wmode="transparent" quality="high" scale="exactfit" bgcolor="#ffffff" width="200" height="50" name="clock_widget" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></embed>');
  },
};

Module.TheTime.Controller = function(view, model) {
  this.view = view;
  this.model = model;
  this.init();
    };
  })();

