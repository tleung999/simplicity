
Module.Tony = function() {
  var self = this;
  this.init = function() {
    $(this).on('load', function() {
      console.log("loading tony app")
      //preload some stuff to get your module ready
      var request = $.ajax({
        url: "http://www.gw2spidy.com/api/v0.9/json/gem-price",
        type: 'GET',
      });
      request.done(function(data) {
        self.data = data;
        $(document).trigger('loaded');
      });
    });

    $(this).on('start', function() {
      console.log("starting tony app");
      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        //Enter Your View render here
        Module.View.render(self.data);
        console.log("tony app ending");
        $(document).trigger('next');
      },3000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

Module.View = {
  render: function(data) {
      //This is where your ajax data is appended to the DOM
      $(document.body).css("background-image", "none")
      $(document.body).css("background-color", "#FFFFFF")
      $('#main-container').append('<p style="color:blue; font-size: xx-large">' + data.result.gem_to_gold + '</p>');
  }
};

