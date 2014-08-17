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
      //Enter Your View Render here
      Module.PhysicsTransition.View.render();

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

Module.PhysicsTransition.View = {
  render: function() {
    this.removeBackground()
    this.addBackgroundColor()
  },

  removeBackground: function(){
    // remove the background image if exists
    $(document.body).css("background-image", "none")
  },
  addBackgroundColor: function() {
    var colorArray = ['#95D3E2'
                      ,'#254D78'
                      ,'#825D75'
                      ,'#F23E32'
                      ,'#FAB562'
                      ,'#D2E594'
                      ,'#476054'
                      ,'#FEDB74'
                      ,'#4D4550'
                      ,'#E7E3E3'];
    var randomColor = colorArray[Math.floor((Math.random() * 10))];
    // add background color
    $(document.body).css("background-color", randomColor)
  }

    // add canvas tag and physics library
};



