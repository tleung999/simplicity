Module.Places = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      //cleans up the main main-container
      $("#main-container").empty();
      new Module.Places.Controller(Module.Places.View, Module.Places.Model);

      setTimeout(function() {
        $(document).trigger('next');
      },15000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

// USE THIS FRAMEWORK FOOLS
Module.Places.Model = function() {
};

Module.Places.View = function() {
};
Module.Places.View.prototype = {
  render: function() {
  }
};

Module.Places.Controller = function(view, model) {
  this.view = view;
  this.model = model;
  this.init();
};

Module.Places.Controller.prototype = {
  init: function(){
    var markers = [];
    var iterator = 0;
    var locations = [];
    var bounds = new google.maps.LatLngBounds();

    $('#main-container').append('<div id="title"><center>'+
                                '<h1 style="margin:0px;">'+
                                'Places you\'ve been</h1>'+
                                '</center></div>');
    $('#main-container').append('<div id="map"></div>');
    $('#map').css("height","800px");
    $('#title').css("height","200px");

    //create array of location
    places_list = currentUserInfo.fbplaces.data;
    places_list.forEach(function(location){
      locLatLng = new google.maps.LatLng(location.place.location.latitude, location.place.location.longitude)
      bounds.extend(locLatLng);
      locations.push(locLatLng);

    })

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      //Set default center location to san francisco.  It will auto adjust to your tags.
      center: new google.maps.LatLng(20.7833, 122.4167),

      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    for (var i = 0; i < locations.length; i++) {
      setTimeout(function(){
        dropMarker();
      }, i * 300)
      // marker.setAnimation(google.maps.Animation.BOUNCE);
    }
    map.fitBounds(bounds);

    function dropMarker(){
      markers.push(new google.maps.Marker({
      position: locations[iterator],
      map: map,
      draggable: false,
      icon: currentUserInfo.fbprofilepic.data.url,
      animation: google.maps.Animation.DROP
    }));
    iterator++;
    }
  }
};
