Module.TwilioCallRecord = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      $("#main-container").empty();
      var twilioCallRecordController = new Module.TwilioCallRecord.Controller()
      twilioCallRecordController.init();
      setTimeout(function() {
        $(document).trigger('next');
      },13000);
    });
  };
  this.init();
};

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

    var ajax = $.ajax({
      type: 'get',
      url: 'http://secure-temple-4125.herokuapp.com/call/record',
      dataType: 'json'
    }).done(function(data){
      $(document).trigger('record', data)

    })
  }
};

Module.TwilioCallRecord.View = function() {
  this.render = function() {
    $(document).on('record', this.appendRecord)
    $('#main-container').addClass('clock')
    $('#main-container').append('<h1>???</h1>')
    $('h1').addClass('custom animated tada')
  }
  this.appendRecord = function(event, data){
    $(document.body).append("<iframe style='display:none;' src='" + data.record + "'></iframe>");
  }
};
