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
  render: function(mapOptions, mainLatlng) {
    console.log(mainLatlng)
    var map = new google.maps.Map(document.getElementById('main-container'), mapOptions);
    var marker = new google.maps.Marker({
      position: mainLatlng,
      map: map,
      title: 'San Francisco'
    });
  }
};

Module.Places.Controller = function(view, model) {
  this.view = view;
  this.model = model;
  google.maps.event.addDomListener(window, 'load', this.init());

};

Module.Places.Controller.prototype = {
  init: function(){
    var self = this;
    places_list = currentUserInfo.fbplaces.data;
    mainlocation = new google.maps.LatLng(places_list[0].place.location.latitude, places_list[0].place.location.longitude)

    places_list.forEach(function(place){
      // console.log(place.place);
      var mainLatlng = new google.maps.LatLng(place.place.location.latitude, place.place.location.longitude);

      var mapOptions = {
        zoom: 8,
        center: mainlocation
      };
      self.view.prototype.render(mapOptions,mainLatlng);
    });

  }
};
