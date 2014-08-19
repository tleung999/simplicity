Module.Wemo = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      console.log("loading wemo app");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting wemo app");
      //cleans up the main main-container
      $("#main-container").empty();
      var view = new Module.Wemo.View();
      var model = new Module.Wemo.Model();

      //PC: Turn on wemoSwitch
      model.wemoSwitch('on');
      //PC: Turn off wemoSwitch after 1 sec
      //setTimeout(model.wemoSwitch('off'), 1000);


      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("wemo app ending");
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
Module.Wemo.View = function () {
  $(document.body).css("background-image", "none");
  // orange
  $(document.body).css("background-color", "#FAB562");
  // PC: append div here that says "and now..., let there be light!
  $(document.body).append('<h1> and now... let there be light! </h1>');
};

Module.Wemo.Model = function(){
  this.wemoSwitch = function(onOff){
    // console.log(onOff);
    var input = onOff;
    var ajax = $.ajax({
      type: 'GET',
      url: 'http://192.168.1.15:9292/on',
      //url: '192.168.1.15:9292/' + onOff
      // crossOrigin: true,
      // dataType: "jsonp",

      data: JSON.stringify({ command: input})
    }).done(function(data){
      console.log(data);
      console.log('ajax request successful');
    });
  };
};