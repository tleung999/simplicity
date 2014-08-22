Module.TwilioSMS = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      $('#audio')[0].volume = .5;
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting twilio SMS app");
      $("#main-container").empty();
      var twilioSMSController = new Module.TwilioSMS.Controller()
      twilioSMSController.init();
      setTimeout(function() {
        $('#audio')[0].volume = 1;
        $('h1').removeClass('custom animated bounceInRight')
        $('#main-container').removeClass('phone')
        $("#main-container").empty();
        $(document).trigger('next');
      },10000);
    });
  };
  this.init();
};


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
    return ['123']//['5105081935']
  };
  this.getRandomMessage = function(){
    return quoteArray[Math.floor(Math.random() * quoteArray.length)]
  }
};

Module.TwilioSMS.View = function() {
  this.render = function() {
    $('#main-container').addClass('phone')
    $('#main-container').append('<h1>Have some important spam with information on the time!</h1>')
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
