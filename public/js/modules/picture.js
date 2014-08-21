Module.Picture = function() {
  var self = this;
  this.init = function() {
    $(this).on('load', function() {
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
        //Enter Your View render here
      $("#main-container").empty();
      displayIntro();
      setTimeout(function(){creatingPage()}, 6000);
      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        $(document).trigger('next');
      },12000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

function creatingPage(){
  videoHTML = "<video id='video'></video>"
  canvasHTML = "<canvas id='canvas'></canvas>"
  imgHTML = '<img src="http://placekitten.com/g/200/150" id="photo" alt="photo">'
  $('#main-container').append(videoHTML, canvasHTML, imgHTML)
  addingCSS();
}

function addingCSS(){
  $('body').css({
    "background": "#553D4D",
    "height": "100%"
  });
  $('canvas').css("display", "none");
  $('img').css({
    "display": "center",
    "border-radius": "50%"
  });
  $('video').css("display", "none");
  $('#container').css({
    "overflow":"hidden",
    "width":"880px",
    "margin": "20px auto"
  });
  setupCamera();
}

function setupCamera(){
  var streaming = false,
  video        = document.querySelector('#video'),
  canvas       = document.querySelector('#canvas'),
  photo        = document.querySelector('#photo'),
  width = 500,
  height = 500;

  navigator.getMedia = ( navigator.getUserMedia ||
   navigator.webkitGetUserMedia ||
   navigator.mozGetUserMedia ||
   navigator.msGetUserMedia);

  navigator.getMedia(
  {
    video: true,
    audio: false
  },
  function(stream) {
    if (navigator.mozGetUserMedia) {
      video.mozSrcObject = stream;
    } else {
      var vendorURL = window.URL || window.webkitURL;
      video.src = vendorURL ? vendorURL.createObjectURL(stream) : stream;
    }
    window.s = stream;
    video.play();
  },
  function(err) {
    clearInterval(interval)
    clearTimeout(timeout)
    photo.setAttribute('src', 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/t1.0-9/196551_10100380941062870_6244660_n.jpg');
    setTimeout(function(){
      $(document).trigger('next');
    }, 4000)
  }
  );
  video.addEventListener('canplay', function(){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      streaming = true;
      setTimeout(function() {
        window.s.stop();
      }, 13000);
    }
  }, false);

  function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

var interval = setInterval(function(){
  takepicture();
  }, 3000);
canvasFollowingMouse();
}


function canvasFollowingMouse(){

 $('#photo').css("position", "absolute")

  $(document).on('mousemove',function(event) {
    mousePosX = event.clientX
    mousePosY = event.clientY
    moveCanvas(mousePosX, mousePosY)
  })

  function moveCanvas(mousePosX, mousePosY){
  $('#photo').css("left", (mousePosX - 30))
  $('#photo').css("top", (mousePosY - 30))
}
}


function displayIntro() {
  // clear background image
  $(document.body).css("background-image", "none");
  var message = "Time is overrated. Be Zen. Savor this very moment. This will help you...3-2-1 smile!";
  var module_intro = "<h1 class='animated bounceInRight' style='font-family:Helvetica;color:black'>" + message + "</h1>";

  setTimeout(function(){
    $("#main-container").append(module_intro);
    }, 500);

  setTimeout(function(){
    $("#main-container").empty();
  },5500);
};
