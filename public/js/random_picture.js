$( document ).ready(function() {
  init();
})

function init(){
  creatingPage();
  addingCSS();
  setupCamera();
  canvasFollowingMouse();
}

function creatingPage(){
videoHTML = "<video id='video'></video>"
canvasHTML = "<canvas id='canvas'></canvas>"
imgHTML = '<img src="http://placekitten.com/g/200/150" id="photo" alt="photo">'
$('body').append(videoHTML, canvasHTML, imgHTML)
}

function addingCSS(){
  $('html').css({
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
}

function setupCamera(){
  var streaming = false,
  video        = document.querySelector('#video'),
  cover        = document.querySelector('#cover'),
  canvas       = document.querySelector('#canvas'),
  photo        = document.querySelector('#photo'),
  startbutton  = document.querySelector('#startbutton'),
  width = 300,
  height = 300;

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
    video.play();
  },
  function(err) {
    console.log("An error occured! " + err);
  }
  );

  video.addEventListener('canplay', function(ev){
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth/width);
      video.setAttribute('width', width);
      video.setAttribute('height', height);
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      streaming = true;
    }
  }, false);

  function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

setInterval(function(){
  takepicture();
  }, 3000);
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

