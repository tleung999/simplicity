Module.TwilioCall = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      console.log("loading twilio app to call");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting twilio app to call");
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your View Render here
      var twilioCallController = new Module.TwilioCall.Controller()
      // Module.View.render();
      twilioCallController.init();
      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("twilio app to call ending");
        $('h1').removeClass('custom animated bounceInRight')
        $('#main-container').removeClass('phone')
        $("#main-container").empty();
        $(document).trigger('next');
      },20000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

// USE THIS FRAMEWORK FOOLS

Module.TwilioCall.Controller = function(){
  this.view = new Module.TwilioCall.View()
  this.model = new Module.TwilioCall.Model()

  this.init = function(){
    this.view.render()
    this.model.makeCall(123) //('5105081935')
  }
};

Module.TwilioCall.Model = function() {

  this.makeCall = function(phone){
    console.log('making call to ' + phone)

    var ajax = $.ajax({
      type: 'get',
      url: 'http://secure-temple-4125.herokuapp.com/call/new',
      data: {phone: phone}
    }).done(function(data){
      console.log ('call completed')
    })
  }
};

Module.TwilioCall.View = function() {
  this.render = function() {
    $('#main-container').addClass('phone')
    $('#main-container').append('<h1>If knowledge is what you truly seek, answer your telephone</h1>')
    $('h1').addClass('custom animated bounceInRight')
  }
};
