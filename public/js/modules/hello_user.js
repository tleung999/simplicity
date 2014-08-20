Module.HelloUser = function() {
  this.init = function() {
    $(this).on('load', function() {
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      //cleans up the main container
      $("#main-container").empty();
        var view = new Module.HelloUser.View();

        setTimeout(function() {
          $("#main-container").empty();
      $(document).trigger('next');
    },3500);
      });
  };
  this.init();
};

Module.HelloUser.View = function () {
  // clear background image
  $(document.body).css("background-image", "none");

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
  // get user name from facebook
  var fullName = currentUserInfo.fbprofile.name

  if( fullName !== undefined) {
    var firstName = fullName.split(" ")[0]
  };

  var helloUserWithName = "<h1 class='animated bounceInRight' style='font-family:Helvetica;color:black'>Hello " + firstName+ "! <br> You are " + compliment + "!</h1>";
  var helloUserNoName = "<h1 class='animated bounceInRight' style='font-family:Helvetica;color:black'>Hello! <br> You are " + compliment + "!</h1>";
  setTimeout(function(){
    if(fullName === undefined){
      $("#main-container").append(helloUserNoName);
    }
    else {
      $("#main-container").append(helloUserWithName);
      }
  }, 500)
};
