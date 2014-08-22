Module.Cube = function() {
  var self = this;
  this.init = function() {

    $(this).on('load', function() {
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your View Render here
      new Module.Cube.Controller(Module.Cube.View, Module.Cube.Model);

      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
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
Module.Cube.Model = function() {
};

Module.Cube.View = {
  render: function() {
    $('#main-container').css("height", "100%").css("width", "50%").css("background-color", "black");
  },

  displayIntro: function(){
    // clear background image
    $(document.body).css("background-image", "none");
    var message = "Time is like an ice cube in your glass. Enjoy your drink, before it melts away!";
    var module_intro = "<h1 class='animated bounceInRight' style='font-family:Helvetica;color:black'>" + message + "</h1>";

    setTimeout(function(){
      $("#main-container").append(module_intro);
      }, 500);

    setTimeout(function(){
      $("#main-container").empty();
    },5500);
  }
};

Module.Cube.Controller = function(view, model) {
  this.view = view;
  this.model = model;
  self = this;

  self.view.displayIntro();

  setTimeout(function(){
    self.init();
    self.animate();
    var camera, scene, renderer;
    var geometry, material, mesh;
    }, 6000);
};

Module.Cube.Controller.prototype = {

  init: function(){
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 300;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(150, 150, 150, 150);
      //var url = //Enter the variable for the new link here
      if (currentUserInfo.fbphotos.data === undefined || currentUserInfo.fbphotos.data.length === 0) {
        image = 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/t1.0-9/196551_10100380941062870_6244660_n.jpg';
      } else {
        image = currentUserInfo.fbphotos.data[0].source;
      }

      material = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture(image),
      });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.CanvasRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      $('#main-container').append(renderer.domElement);
    },

    animate: function() {
      requestAnimationFrame(this.animate.bind(this));
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
  };
