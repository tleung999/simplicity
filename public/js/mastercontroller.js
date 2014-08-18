$(document).ready(function() {
  newPicture = new Module.Picture();
  newHelloUser = new Module.HelloUser();
  newTagCanvas = new Module.TagCanvas();
  newWemo = new Module.Wemo();
  moduleList = [newHelloUser,
                new Module.PhysicsTransition(),
                newPicture,
                new Module.PhysicsTransition(),
                newTagCanvas];
  // moduleList = [newTagCanvas]
  master = new MainController(moduleList);
  master.bindListeners();
  MusicController();
});

Module = {};

function MainController(moduleList) {
  this.moduleList = moduleList;
  this.moduleIndex = 0;
  this.loadCount = 0;
  var self = this;

  this.init = function() {
    currentUserInfo = new CurrentUserInfo();
    console.log(currentUserInfo);
    $(this.moduleList).trigger('load');
  };

  this.bindListeners = function() {
    $(document).on('loaded',function() {
      self.loadCount++;
      if (self.loadCount === self.moduleList.length) {
        $(document).trigger('next');
      }
    });

    $('#start').on('click', this.init.bind(master));

    $(document).on('next',function() {
      $(this.moduleList[this.moduleIndex]).trigger('start');
      this.moduleIndex++;
      new BackgroundColorPicker.Controller(BackgroundColorPicker.View,BackgroundColorPicker.Model)
    }.bind(this));
  };
}

function CurrentUserInfo() {
  var formInput = $("#form input").serializeArray();
  this.name = formInput[0].value;
  this.love = formInput[1].value;
  this.phone = formInput[2].value;
  this.likes = fbuser.likes;
  this.fbprofile = fbuser.profile;
  this.fbphotos = fbuser.photos;
  this.fbposts = fbuser.posts;
  this.fbplaces = fbuser.places;
}

function MusicController(){
	$('#audio')[0].volume = 0;
	$('#volume').click(toggleVolumeIcon);
	$('#volume').click(toggleVolume);
}

function toggleVolumeIcon(){
	var $this = $(this);
	if($this.hasClass('fa-volume-up')){
		$this.removeClass('fa-volume-up').addClass('fa-volume-off');
	}
	else{
		$this.removeClass('fa-volume-off').addClass('fa-volume-up');
	}
}

function toggleVolume(){
	var $audio = $('#audio')[0];
	if ($audio.volume === 0) {
		$audio.volume = 1.0;
	}
	else {
		$audio.volume = 0;
	}
}

BackgroundColorPicker = {}

BackgroundColorPicker.Model = function(){
  this.colorArray =  ['#95D3E2'
                      ,'#254D78'
                      ,'#825D75'
                      ,'#F23E32'
                      ,'#FAB562'
                      ,'#D2E594'
                      ,'#476054'
                      ,'#FEDB74'
                      ,'#4D4550'
                      ,'#E7E3E3'];
}

BackgroundColorPicker.Model.prototype = {
  produceRandomColor: function(){
    var colorArrayLength = this.colorArray.length;
    var randomIndex = Math.floor((Math.random() * colorArrayLength));
    return this.colorArray[randomIndex];
  },
}

BackgroundColorPicker.Controller = function(view, model) {
  this.view  = new view;
  this.model = new model;
  this.init();
}

BackgroundColorPicker.Controller.prototype = {
  init: function(){
    var color = this.model.produceRandomColor();
    this.view.removeBackground;
    this.view.render(color);
  }
}

BackgroundColorPicker.View = function() {}

BackgroundColorPicker.View.prototype = {
  render: function(color, transition){
    this.addBackgroundColor(color);
  },

  addBackgroundColor: function(color) {
    // add background color
    $(document.body).css("background-color", color)
  },
}



