Module = {};
Module.Sample = function() {
  this.init = function() {
    $(this).on('load', function() {
      console.log("loading sample app");
      //preload some stuff to get your module ready
    });

    $(this).on('start', function() {
      console.log("starting sample app");
      //put your main application stuff here

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

Module.View = function () {


}
