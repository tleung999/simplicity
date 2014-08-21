Module.Wemo = function() {
  this.init = function() {
    $(this).on('load', function() {
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      $("#main-container").empty();
      var view = new Module.Wemo.View();
      var model = new Module.Wemo.Model();
      view.render();
      //trigger wemo device1
      model.wemoSwitch('on','1');
      setTimeout(function() {
        //change screen
        this.change_render();
        //trigger wemo device2
        model.wemoSwitch('on','2');
        setTimeout(function() {
          $(document).trigger('next');
        },5000);
      }.bind(view),5000);

    });
  };
  this.init();
};

Module.Wemo.View = function () {
  this.render = function(){
    $('#main-container').css({
                          'background-image': 'none',
                          'background-color': '#000000',
                          height: '380px',
                          'margin-top': '-75px',
                          'padding': '250px'
                          });
    $('#main-container').prepend('<h1> Wait for it........... </h1>');
  };
  this.change_render = function(){
    $("#main-container").empty();
    $("#main-container").removeAttr("style");
    $('#main-container').prepend('<h1> Congratulations </h1>');
  };
};

Module.Wemo.Model = function(){
  this.wemoSwitch = function(onOff, id){
    var ajax = $.ajax({
      type: 'GET',
      url: 'http://50.0.185.193:9292/'+ onOff + '/' + id,
      crossOrigin: true
    }).done(function(data){});
  };
};