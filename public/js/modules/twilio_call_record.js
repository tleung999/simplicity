Module.TwilioCallRecord = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      console.log("loading twilio app to play record");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting twilio app to play record");
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your View Render here
      var twilioCallRecordController = new Module.TwilioCallRecord.Controller()
      // Module.View.render();
      twilioCallRecordController.init();
      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("twilio app to call ending");
        $(document).trigger('next');
      },50000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

// USE THIS FRAMEWORK FOOLS

Module.TwilioCallRecord.Controller = function(){
  this.view = new Module.TwilioCallRecord.View()
  this.model = new Module.TwilioCallRecord.Model()

  this.init = function(){
    this.model.getCallRecord();
    this.view.render()
  }
};

Module.TwilioCallRecord.Model = function() {
  
  this.getCallRecord = function(){
    console.log('fetching record...')

    var ajax = $.ajax({
      type: 'get',
      url: 'http://secure-temple-4125.herokuapp.com/call/record',
      dataType: 'json'
    }).done(function(data){
      console.log ('record fetched')
      $(document).trigger('record', data)
      
    })
  }
};

Module.TwilioCallRecord.View = function() {
  this.render = function() {
  $(document.body).css("background-image", 'none');
  $(document).on('record', this.appendRecord)
  }
  this.appendRecord = function(event, data){
    console.log('append record')
    $(document.body).append("<iframe src='" + data.record + "'></iframe>");
  }
};