Module.Alex = function() {
  this.init = function() {
    $(this).on('load', function() {
      console.log("loading alex app");
      //preload some stuff to get your module ready
    });

    $(this).on('start', function() {
      console.log("starting alex app");
      var view = new Module.Alex.View();
      //put your main application stuff here

      setTimeout(function() {
        console.log("alex app ending");

      //Your module can only be 30 seconds long, you can remove the timeout if the animation is less than 30 seconds.
      $(document).trigger('next');
    },3000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.   Use the start function to display your view.   DONT put your view call in the setTimeout.

Module.Alex.View = function () {
  $(document.body).css("background-image", "none")
  // blue
  $(document.body).css("background-color", "#95D3E2");
  var helloWorld = "<h1 style='font-family:Helvetica;left:0;position: absolute;'>Hello " + currentUserInfo.name + "</h1>"
  $('#main-container').append(helloWorld)
}
