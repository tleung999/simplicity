Module.TwilioCall = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      $("#main-container").empty();
      $('#audio')[0].volume = .1;
      var twilioCallController = new Module.TwilioCall.Controller()
      twilioCallController.init();
      setTimeout(function() {
        $('h1').removeClass('custom animated bounceInRight')
        $('#main-container').removeClass('phone')
        $("#main-container").empty();
        $('#audio')[0].volume = 1;
        $(document).trigger('next');
      },20000);
    });
  };
  this.init();
};

Module.TwilioCall.Controller = function(){
  this.view = new Module.TwilioCall.View()
  this.model = new Module.TwilioCall.Model()

  this.init = function(){
    this.view.render()
    this.model.makeCall('123')//('5105081935')
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
