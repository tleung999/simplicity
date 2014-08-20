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
      twilioSMSController.init();
      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("twilio app ending");
        $(document).trigger('next');
        // next module
        $('h1').removeClass('custom animated bounceInRight')
        $("#main-container").empty();
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
    var self = this;
    var phoneNumbers = this.model.getPhoneNumbers()

    phoneNumbers.forEach(function(number) {
      var message = self.model.getRandomMessage()
      self.model.sendMessage(number, message)
    });

  }
};

Module.TwilioSMS.Model = function() {
  this.sendMessage = function(number, message){
    console.log('sending message to ' + number)

    var ajax = $.ajax({
      type: 'get',
      url: 'http://secure-temple-4125.herokuapp.com/message/new',
      data: {phone: number, message: message}
    }).done(function(data){
      console.log ('message sent')
    })
  }
  this.getPhoneNumbers = function(){
    return ['5105081935']//,'5105081935']
  };
  this.getRandomMessage = function(){
    return quoteArray[Math.floor(Math.random() * quoteArray.length)]
  }
};

Module.TwilioSMS.View = function() {
  this.render = function() {
    $('#main-container').addClass('phone')
    $('#main-container').append('<h1>Have some important spam with information about the time!</h1>')
    $('h1').addClass('custom animated bounceInRight')
  }
};

quoteArray = [
  "Clocks slay time... time is dead as long as it is being clicked off by little wheels; only when the clock stops does time come to life. ~William Faulkner"
  ,"Time is what prevents everything from happening at once. ~John Archibald Wheeler"
  ,"The clock talked loud. I threw it away, it scared me what it talked. ~Tillie Olsen, Tell Me a Riddle"
  ,"Men talk of killing time, while time quietly kills them. ~Dion Boucicault"
  ,"Who forces time is pushed back by time; who yields to time finds time on his side. ~The Talmud"
  ,"How did it get so late so soon? ― Dr. Seuss"
  ,"Here we are, trapped in the amber of the moment. There is no why.― Kurt Vonnegut"
  ,"Time is an illusion. ― Albert Einstein"
  ,"And therein lies the whole of man's plight. Human time does not turn in a circle; it runs ahead in a straight line. That is why man cannot be happy: happiness is the longing for repetition. ― Milan Kundera, The Unbearable Lightness of Being"
  ];
