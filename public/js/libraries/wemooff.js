function WemoOff(){
  var ajax = $.ajax({
    type: 'GET',
    url: 'http://50.0.185.193:9292/off',
    crossOrigin: true
  }).done(function(data){});
}