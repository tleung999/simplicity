Module.Places = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      console.log("loading sample app");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting sample app");
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your View Render here
      new Module.Places.Controller(Module.Places.View, Module.Places.Model);


      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("sample app ending");
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
  this.marker = {};
  google.maps.event.addDomListener(window, 'load', this.init());
};

Module.Places.Controller.prototype = {
  init: function(){
    var locations = [];
    //create array of location
    places_list = currentUserInfo.fbplaces.data;
    places_list.forEach(function(location){
      locations.push([location.place.name, location.place.location.latitude, location.place.location.longitude])
    })

    var map = new google.maps.Map(document.getElementById('main-container'), {
      zoom: 10,
      center: new google.maps.LatLng(37.7833, -122.4167),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < locations.length; i++) {
      var pos = new google.maps.LatLng(locations[i][1], locations[i][2]);
        bounds.extend(pos);
        marker = new google.maps.Marker({
            position: pos,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: currentUserInfo.fbprofilepic.data.url
          });
        marker.setAnimation(google.maps.Animation.BOUNCE);
      google.maps.event.addListener(this.marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(this.marker, i));

      map.fitBounds(bounds);
    }
  }
};
