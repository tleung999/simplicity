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
                                'Places you\'ve been...</h1>'+
                                '</center></div>');
    $('#main-container').append('<div id="map"></div>');
    $('#map').css("height","800px");
    $('#title').css("height","150px");

    //create array of location
    createPlaceList();

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      //Set default center location to san francisco.  It will auto adjust to your tags.
      center: new google.maps.LatLng(20.7833, 122.4167),

      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    for (var i = 0; i < locations.length; i++) {
      setTimeout(function(){
        dropMarker();
      }, i * 300);
      // marker.setAnimation(google.maps.Animation.BOUNCE);
    }
    map.fitBounds(bounds);

    function dropMarker(){
      markers.push(new google.maps.Marker({
      position: locations[iterator],
      map: map,
      draggable: false,
      icon: '../images/poo.png',
      animation: google.maps.Animation.DROP
    }));
    iterator++;
    }

    function createPlaceList() {
      places_list = currentUserInfo.fbplaces.data;

      //generic latitude and longitude
      generic_place_list = [
                            [37.7749295,-122.4194155], //san francisco
                            [40.7143528,-74.0059731],  //new york
                            [41.8781136,-87.6297981],  //Chicago
                            [22.3129687,114.0421108],  //Hong Kong
                            [35.6894875,139.6917063],  //Tokyo
                            [41.3850639,2.17340349],   //Barcelona
                            [48.856614,2.3522219],     //Paris
                            [41.8905198,12.49424859],   //Rome
                            [51.5081289,-0.12800500],   //London
                            [46.818188,8.2275119],      //Switerland
                            [52.524268,13.4062900],     //Berlin
                            [31.768319,35.21370999],    //Jerusalem
                            [30.0444196,31.2357116],    //Cairo
                            [41.00527000,28.97695999],  //Istanbul
                            [39.90403,116.407525],      //Beijing
                            [30.267153,-97.74306079],   //Texas
                            [61.2180556,-149.90027780], //Anchorage
                            [19.8967662,-155.5827818],  //Hawaii
                            [37.566535,126.9779691],    //Seoul
                            [-33.8674869,151.2069902],  //Sydney
                            [-41.2864603,174.776236]   //Wellington
                            ];
      if (places_list === undefined) {
        generic_place_list.forEach(function(location){
          locLatLng = new google.maps.LatLng(location[0], location[1]);
          bounds.extend(locLatLng);
          locations.push(locLatLng);
        });
      } else {
        places_list.forEach(function(location){
          locLatLng = new google.maps.LatLng(location.place.location.latitude, location.place.location.longitude);
          bounds.extend(locLatLng);
          locations.push(locLatLng);
        });
      }
    }
  }
};
