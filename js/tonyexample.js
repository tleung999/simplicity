Module = {};

Module.Tony = function() {
  this.requestdata = "";
  var self = this;
  this.init = function() {
    $(this).on('load', function() {
      console.log("loading sample app");
      //preload some stuff to get your module ready
      var request = $.ajax({
        url: "http://www.gw2spidy.com/api/v0.9/json/all-items/0",
        type: 'GET',
      });
      request.done(function(data) {
        self.data = data
        $(document).trigger('loaded',data);
      });
    });

    $(this).on('start', function(event, data) {
      console.log("starting sample app");
      //put your main application stuff here
      // console.log (data);
        Module.View.render(self.data);

      setTimeout(function() {
        console.log("sample app ending");
      //Your module can only be 30 seconds long, you can remove the timeout if the animation is less than 30 seconds.
        $(document).trigger('next');
      },3000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.   Use the start function to display your view.   DONT put your view call in the setTimeout.

Module.View = {
  render: function(data) {
    console.log(data)

  }
};