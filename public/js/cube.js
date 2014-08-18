Module.Sample = function() {
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
      new Module.Sample.Controller(Module.Sample.View, Module.Sample.Model);
      // Module.View.render();

      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("sample app ending");
        $(document).trigger('next');
      },30000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

// USE THIS FRAMEWORK FOOLS
Module.Sample.Model = function() {
};

Module.Sample.View = function() {
    $('head').prepend('<script src="http://threejs.org/build/three.min.js"></script>')
  $('#main-container').css("height", "100%").css("width", "50%")
};
Module.Sample.View.prototype = {
  render: function() {
  }
}

Module.Sample.Controller = function(view, controller) {
  this.view = new view;
  this.model = new model;
  this.init();
};

Module.Sample.Controller.prototype = {
  init: function(){
    animate();
    var camera, scene, renderer;
    var geometry, material, mesh;
    function init() {

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 300;

      scene = new THREE.Scene();

      geometry = new THREE.BoxGeometry(150, 150, 150, 150);
  //var url = //Enter the variable for the new link here
      material = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/t1.0-9/196551_10100380941062870_6244660_n.jpg'),
      });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.CanvasRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      $('#main-container').append(renderer.domElement);

    }

    function animate() {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render(scene, camera);
     }


  })
  }
}