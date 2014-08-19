Module.Places = function() {
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
      var locations = [];
      //create array of location
      places_list = currentUserInfo.fbplaces.data;
      places_list.forEach(function(location){
        locations.push(new google.maps.LatLng(location.place.location.latitude, location.place.location.longitude));
      })
      function initialize() {
        var locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }


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
// Module.Places.Model = function() {
// };

// Module.Places.View = function() {
// };

// Module.Places.View.prototype = {
//   render: function() {
//   }
// };

// Module.Places.Controller = function(view, model) {
//   this.view = view;
//   this.model = model;
//   google.maps.event.addDomListener(window, 'load', this.init());
// };

// Module.Places.Controller.prototype = {
//   init: function(){
//     var locations = [];
//     //create array of location
//     places_list = currentUserInfo.fbplaces.data;
//     places_list.forEach(function(location){
//       locations.push(new google.maps.LatLng(location.place.location.latitude, location.place.location.longitude))
//       // locations.push([location.place.name, location.place.location.latitude, location.place.location.longitude])
//     })

//     var markers = [];
//     var iterator = 0;

//     var map;

//     function initialize() {
//       console.log("shit")
//       var mapOptions = {
//         zoom: 12,
//         center: new google.maps.LatLng(37.7833, -122.4167)
//       };

//       map = new google.maps.Map(document.getElementById('main-container'),
//               mapOptions);
//     }

//     function drop() {
//       for (var i = 0; i < locations.length; i++) {
//         setTimeout(function() {
//           addMarker();
//         }, i * 100);
//       }
//     }

//     function addMarker() {
//       markers.push(new google.maps.Marker({
//         position: locations[iterator],
//         map: map,
//         draggable: false,
//         animation: google.maps.Animation.DROP
//       }));
//       iterator++;
//     }

//     google.maps.event.addDomListener(window, 'load', initialize());
//   }
// };
