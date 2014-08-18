Module.TagCanvas = function() {
  var self = this;
  this.init = function() {
    $(this).on('load', function() {
      console.log("loading tagCanvas app");
      //preload some stuff to get your module ready
      $(document).trigger('loaded');
    });

    $(this).on('start', function() {
      console.log("starting tagCanvas app");
      //cleans up the main main-container
      $("#main-container").empty();
      //Enter Your View Render here
      Module.TagCanvas.View.render();

      setTimeout(function() {
        //Your module can only be 30 seconds long,
        //you can remove the timeout if the animation is less than 30 seconds
        console.log("tagCanvas app ending");
        $(document).trigger('next');
      },20000);
    });
  };
  //initialize this Module
  this.init();
};

//build your view stuff and add it to the init function up above.
//Use the start function to display your view.
//DONT put your view call in the setTimeout.

Module.TagCanvas.View = {
  render: function() {
    //clear background and change bg color.
    $(document.body).css("background-image", "none");
    $(document.body).css("background-color", "#E7E3E3");
    //Create the canvas box.
    buildHTML();
    //Create the animation
    try {
        TagCanvas.Start('myCanvas','tags',{
          textColour: '#254D78',
          outlineColour: '#E7E3E3',
          reverse: true,
          depth: 0.8,
          textFont: 'Helvetica',
          textHeight: 40,
          maxSpeed: 0.01,
          imageScale: 2,
          zoom: 1.5,
          initial: [0.8,-0.3],
          outlineThickness: 0
          });
        } catch(e) {
        // something went wrong, hide the canvas container
        $('#main-container').css("display","none");
    }
  }
};

function buildHTML() {
  canvasHTML = '<div id="#main-container"><canvas width="' +
                window.innerWidth + '" height="' +
                window.innerHeight + '" id="myCanvas">' +
                '<p>Anything in here will be replaced on browsers' +
                ' that support the canvas element</p></canvas></div>';
  picturebase = '<div id="tags"><ul></ul></div>';

  $("#main-container").append(canvasHTML);
  $("#main-container").append(picturebase);
  photolist = currentUserInfo.fbphotos.data;
  console.log(photolist)
  if (photolist === undefined || photolist.length === 0) {
    for (var a=0; a<genericphotos.length; a++) {
      photolink = '<li><a href="#"><img src="'+ genericphotos[a] +
                  '" width="50%" height="50%" ></a></li>';
      $('#tags ul').append(photolink);
    }
  } else {
    for (var i=0; i<photolist.length && i<50; i++) {
      photolink = '<li><a href="#"><img src="'+ photolist[i].source +
                  '" width="50%" height="50%" ></a></li>';
      $('#tags ul').append(photolink);
    }
  }
}

genericphotos = [
  "http://www.rocktheshotforum.com/wp-content/uploads/2011/08/image11.png",
  "http://learnthat.com/files/2010/02/windows-7-tutorial1.png",
  "https://cdn1.iconfinder.com/data/icons/yooicons_set01_socialbookmarks/256/social_google_box.png",
  "http://www.carmendelajara.com/Resources/Spotify.png",
  "http://civicio.files.wordpress.com/2013/03/github.png?w=256&h=256",
  "http://existdissolve.com/wp-content/uploads/2012/01/256px-Ruby_logo.png",
  "http://software.opensuse.org/assets/default-screenshots/python-99cfd25473c412060296e820adeee175.png",
  "http://www.4stud.info/networking/img/postgresql.png",
  "http://www.tutorgrams.com/images/mysql.png",
  "https://pbs.twimg.com/profile_images/428296181739827200/Wjyk7gfV.png",
  "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-256.png",
  "http://technicallyeasy.net/wp-content/uploads/2011/04/apple-logo-256x256.jpg",
  "http://socialtimes.com/files/2013/02/Dev-Bootcamp-logo.jpg",
  "https://secure.gravatar.com/avatar/af9304fb60f3d2e6cb44b7dcd395ef20.png?r=PG&d=mm&s=150"
];
