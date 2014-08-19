Module.TwilioSMS = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      console.log("loading twilio SMS app");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting twilio SMS app");
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your View Render here
      var twilioSMSController = new Module.TwilioSMS.Controller()
      // Module.View.render();

      setTimeout(function() {
        twilioSMSController.init();
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("twilio app ending");
        $(document).trigger('next');
      },10000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

// USE THIS FRAMEWORK FOOLS

Module.TwilioSMS.Controller = function(){
  this.view = new Module.TwilioSMS.View()
  this.model = new Module.TwilioSMS.Model()

  this.init = function(){
    this.view.render()
    var phoneNumbers = ['5105081935'] //, '4158168768', '5105081935']
    this.model.sendMessage(phoneNumbers)
  }
};

Module.TwilioSMS.Model = function() {
  this.sendMessage = function(phoneNumbers){
    console.log('sending message to ' + phoneNumbers)
    var message = 'Hey this is Tony - This is all bull****, I did all the work!!!'

    var ajax = $.ajax({
      type: 'get',
      url: 'http://dry-fortress-5128.herokuapp.com/message/new',
      data: {phone: phoneNumbers, message: message}
    }).done(function(data){
      console.log ('message sent')
    })
  }
};

Module.TwilioSMS.View = function() {
  this.render = function() {
  $(document.body).css("background-image", "none");
  // orange
  $(document.body).css("background-color", "blue");
  // PC: append div here that says "and now..., let there be light!
  $(document.body).prepend('<h1> Check your phone for the real story! </h1>');
  }
};