Module.HelloUser = function() {
  this.init = function() {
    $(this).on('load', function() {
      console.log("loading alex app");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting alex app");
      //cleans up the main container
      $("#main-container").empty();
        //Enter Your View Render here
      var view = new Module.HelloUser.View();

      setTimeout(function() {
        $("#main-container").empty();
        console.log("alex app ending");
      //Your module can only be 30 seconds long, you can remove the timeout if the animation is less than 30 seconds.
      $(document).trigger('next');
    },3500);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.   Use the start function to display your view.   DONT put your view call in the setTimeout.


Module.HelloUser.View = function () {
  var complimentArray = ["stupendous",
                        "exceptional",
                        "beautiful",
                        "dazzling",
                        "enchanting",
                        "first-class",
                        "magnanimous",
                        "magnificent",
                        "marvelous",
                        "radiant",
                        "remarkable",
                        "spectacular",
                        "splendid",
                        "stunning",
                        "tremendous",
                        "unparalleled"];
  var compliment = complimentArray[Math.floor(Math.random() * complimentArray.length)];
  $(document.body).css("background-image", "none");
  var helloUser = "<h1 class='animated bounceInRight' style='font-family:Helvetica;'>Hello " + currentUserInfo.name + "! <br> You are " + compliment + "!</h1>";
  setTimeout(function(){
    $("#main-container").append(helloUser);
  }, 500)
};
