Module.Wemo = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      console.log("loading wemo app");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting wemo app");
      //cleans up the main main-container
      $("#main-container").empty();
      var view = new Module.Wemo.View();
      var model = new Module.Wemo.Model();

      model.wemoSwitch('on','1');
      model.wemoSwitch('on','2');

      setTimeout(function() {
        console.log("wemo app ending");
        $(document).trigger('next');
      },10000);
    });
  };
  this.init();
};

Module.Wemo.View = function () {
  $(document.body).css("background-image", "none");
  $(document.body).css("background-color", "#FAB562");
  $(document.body).prepend('<h1> and now... let there be light! </h1>');
};

Module.Wemo.Model = function(){
  this.wemoSwitch = function(onOff, id){
    var ajax = $.ajax({
      type: 'GET',
      url: 'http://50.0.185.193:9292/'+ onOff + '/' + id,
      crossOrigin: true
    }).done(function(data){
      console.log(data);
      console.log('ajax request successful');
    });
  };
};